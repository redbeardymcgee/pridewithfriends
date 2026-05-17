import { createFileRoute, Link } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { ApiClient, type HelixUser } from "@twurple/api"
import { AppTokenAuthProvider, RefreshingAuthProvider } from "@twurple/auth"
import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#/components/ui/card"
import TwitchLogo from "@/assets/icons/glitch_flat_purple.svg?react"

const streamers = [
  {
    discord: "",
    twitch: "0_tripwire_0",
  },
  {
    discord: "",
    twitch: "baalorlord",
  },
  {
    discord: "",
    twitch: "blazikus",
  },
  {
    discord: "",
    twitch: "bunhara",
  },
  {
    discord: "",
    twitch: "carlsagan42",
  },
  {
    discord: "",
    twitch: "commentbagel",
  },
  {
    discord: "",
    twitch: "croven831",
  },
  {
    discord: "",
    twitch: "disruptr88",
  },
  {
    discord: "",
    twitch: "dr0gulus",
  },
  {
    discord: "",
    twitch: "fletch74",
  },
  {
    discord: "",
    twitch: "its_goddy",
  },
  {
    discord: "",
    twitch: "japaneseexport",
  },
  {
    discord: "",
    twitch: "jmac_sts",
  },
  {
    discord: "",
    twitch: "merl61",
  },
  {
    discord: "",
    twitch: "midmillenial",
  },
  {
    discord: "",
    twitch: "multibradx",
  },
  {
    discord: "",
    twitch: "navegreed",
  },
  {
    discord: "",
    twitch: "onepunman_",
  },
  {
    discord: "",
    twitch: "paparatto18",
  },
  {
    discord: "",
    twitch: "rebelnae",
  },
  {
    discord: "",
    twitch: "solowingsc2",
  },
  {
    discord: "",
    twitch: "sorcerertwyx",
  },
  {
    discord: "",
    twitch: "strongholdcentral",
  },
  {
    discord: "",
    twitch: "tonytwitch",
  },
  {
    discord: "",
    twitch: "vmservice",
  },
  {
    discord: "",
    twitch: "xecnar",
  },
  {
    discord: "",
    twitch: "zzzhypnos",
  },
]

const getStreamers = createServerFn().handler(async () => {
  const clientId = process.env.TWITCH_CLIENT_ID
  const clientSecret = process.env.TWITCH_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error(
      "Missing Twitch API credentials. Check the .env, .env.development, .env.local and .env.production files.",
    )
  }
  const authProvider = new AppTokenAuthProvider(clientId, clientSecret)
  const apiClient = new ApiClient({ authProvider })
  const users = await apiClient.users.getUsersByNames(
    streamers.map((streamer) => streamer.twitch),
  )

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
    const streamers = await getStreamers()

    return streamers
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
                      {streamer.name.slice(0, 2).toLowerCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold text-2xl text-neutral-400 text-shadow-lg">
                      {streamer.displayName}
                    </span>
                    {/* <span className="font-light text-neutral-400 text-shadow-lg text-sm italic"> */}
                    {/*   {streamer.pronouns} */}
                    {/* </span> */}
                  </div>
                </div>
              </CardTitle>
              <a
                className="place-self-end self-center"
                href={`https://twitch.tv/${streamer.name}`}
              >
                <TwitchLogo className="px-2" height="30" />
              </a>
              {/* FIXME: Wanted to use SVG, but it was very broken and YouTube doesn't provide official SVG */}
              {/* {organizer.youtube && ( */}
              {/*   <a href={organizer.youtube}> */}
              {/*     <img */}
              {/*       alt="YouTube icon" */}
              {/*       className="px-2" */}
              {/*       height="60" */}
              {/*       src="/icons/youtube.png" */}
              {/*       width="60" */}
              {/*     /> */}
              {/*   </a> */}
              {/* )} */}
            </CardHeader>
            <CardContent>{streamer.description}</CardContent>
          </Card>
        )
      })}
    </div>
  )
}
