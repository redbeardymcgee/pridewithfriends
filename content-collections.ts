import {
  defineCollection,
  defineConfig,
  // defineSingleton,
} from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"
import { remarkPlugins } from "@prose-ui/core"
import { z } from "zod"

const docs = defineCollection({
  directory: "content/docs",
  include: "**/*.mdx",
  name: "docs",
  schema: z.object({
    content: z.string(),
    title: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: remarkPlugins(),
    })

    return {
      ...document,
      mdx,
    }
  },
})

// const settings = defineSingleton({
//   filePath: "content/settings.json",
//   name: "settings",
//   parser: "json",
//   schema: z.object({
//     theme: z.enum(["light", "dark"]),
//   }),
// })

export default defineConfig({
  // content: [docs, settings],
  content: [docs],
})
