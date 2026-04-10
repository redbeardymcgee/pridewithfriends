import {
  createCollection,
  localOnlyCollectionOptions,
} from "@tanstack/react-db"
import { createFileRoute } from "@tanstack/react-router"
import { json } from "@tanstack/react-start"
import { z } from "zod"

const IncomingMessageSchema = z.object({
  text: z.string(),
  user: z.string(),
})

const MessageSchema = IncomingMessageSchema.extend({
  id: z.number(),
})

export type Message = z.infer<typeof MessageSchema>

export const serverMessagesCollection = createCollection(
  localOnlyCollectionOptions({
    getKey: (message) => message.id,
    schema: MessageSchema,
  }),
)

let id = 0
serverMessagesCollection.insert({
  id: id++,
  text: "Hello, how are you?",
  user: "Alice",
})
serverMessagesCollection.insert({
  id: id++,
  text: "I'm fine, thank you!",
  user: "Bob",
})

const sendMessage = (message: { user: string; text: string }) => {
  serverMessagesCollection.insert({
    id: id++,
    text: message.text,
    user: message.user,
  })
}

export const Route = createFileRoute("/demo/db-chat-api")({
  server: {
    handlers: {
      GET: () => {
        const stream = new ReadableStream({
          start(controller) {
            for (const [_id, message] of serverMessagesCollection.state) {
              controller.enqueue(JSON.stringify(message) + "\n")
            }
            serverMessagesCollection.subscribeChanges((changes) => {
              for (const change of changes) {
                if (change.type === "insert") {
                  controller.enqueue(JSON.stringify(change.value) + "\n")
                }
              }
            })
          },
        })

        return new Response(stream, {
          headers: {
            "Content-Type": "application/x-ndjson",
          },
        })
      },
      POST: async ({ request }) => {
        const message = IncomingMessageSchema.safeParse(await request.json())
        if (!message.success) {
          return new Response(message.error.message, { status: 400 })
        }
        sendMessage(message.data)
        return json(message.data)
      },
    },
  },
})
