import { createFileRoute } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { PrideGradient } from "#/components/typography"
import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"
import { getTwitchUsersByNames } from "#/lib/twitch"
import TwitchLogo from "@/assets/icons/glitch_flat_purple.svg?react"

const streamers = [
  "0_tripwire_0",
  "baalorlord",
  "blazikus",
  "bunhara",
  "carlsagan42",
  "commentbagel",
  "croven831",
  "disruptr88",
  "dr0gulus",
  "fletch74",
  "japaneseexport",
  "jmac_sts",
  "merl61",
  "midmillenial",
  "multibradx",
  "navegreed",
  "onepunman_",
  "paparatto18",
  "rebelnae",
  "solowingsc2",
  "sorcerertwyx",
  "strongholdcentral",
  "tonytwitch",
  "vmservice",
  "xecnar",
  "zzzhypnos",
]

const getStreamers = createServerFn().handler(async () => {
  const users = await getTwitchUsersByNames(streamers)

  if (!users) {
    throw new Error("No users found.")
  }

  return users.map((user) => {
    return {
      broadcasterType: user.broadcasterType,
      creationDate: user.creationDate,
      description: user.description,
      displayName: user.displayName,
      id: user.id,
      name: user.name,
      offlinePlaceholderUrl: user.offlinePlaceholderUrl,
      profilePictureUrl: user.profilePictureUrl,
      type: user.type,
    }
  })
})

export const Route = createFileRoute("/streamers")({
  component: StreamerCards,
  loader: async () => {
    return await getStreamers()
  },
})

function StreamerCards() {
  const streamers = Route.useLoaderData()
  const sortedCards = streamers.toSorted((a, b) => {
    const nameA = a.name
    const nameB = b.name

    if (nameA < nameB) {
      return -1
    }

    if (nameA > nameB) {
      return 1
    }

    return 0
  })

  return (
    <>
      <div className="bg-slate-900 text-center">
        <h1 className="my-2 text-4xl">Streamers</h1>
        <p className="text-slate-400 text-xl">
          Meet the amazing gamers supporting{" "}
          <PrideGradient>Pride With Friends</PrideGradient>!
        </p>
      </div>
      <div className="mt-4 grid grid-cols-3 justify-items-center gap-y-4">
        {sortedCards.map((streamer) => {
          return (
            <Card className="w-sm bg-slate-700" key={streamer.name}>
              <CardHeader className="grid grid-flow-col grid-rows-1">
                <CardTitle>
                  <div className="flex flex-row pb-2">
                    <Avatar className="mr-4" size="lg">
                      <AvatarImage src={streamer.profilePictureUrl} />
                      <AvatarFallback>
                        {streamer.name.slice(0, 2).toLocaleLowerCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-semibold text-2xl text-neutral-400 text-shadow-lg">
                        {streamer.displayName}
                      </span>
                    </div>
                  </div>
                </CardTitle>
                <a
                  className="place-self-end self-center"
                  href={`https://twitch.tv/${streamer.name}`}
                >
                  <TwitchLogo className="px-2" height="30" />
                </a>
              </CardHeader>
              <CardContent>{streamer.description}</CardContent>
            </Card>
          )
        })}
      </div>
    </>
  )
}
