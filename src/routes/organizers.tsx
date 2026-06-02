import { createFileRoute } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"
import { getTwitchUsersByNames } from "#/lib/twitch"
import TwitchLogo from "@/assets/icons/glitch_flat_purple.svg?react"

interface Organizer {
  bio?: string
  name: string
  pronouns?: string
  twitch: string
  youtube?: string
}

interface OrganizerWithAvatar extends Organizer {
  avatar: string
}

const organizers: Organizer[] = [
  {
    bio: "Creator of too many Spire song parodies. Moderator of too many Spire Twitch channels. Merlathon co-organizer.",
    name: "asukii",
    pronouns: "she/her",
    twitch: "asukii314",
    youtube: "https://youtube.com/@asukii314/",
  },
  {
    bio: "Spire 1 and 2 speedrunner, WR holder, and moderator.",
    name: "Mira Newton",
    pronouns: "they/them",
    twitch: "hellofmira",
    youtube: "https://www.youtube.com/@mirahell",
  },
  {
    bio: "Partnered Spire streamer owned by an incredibly cute cat.",
    name: "kaosmark2",
    pronouns: "they/them",
    twitch: "kaosmark2",
    youtube: "http://www.youtube.com/@kaosmark2",
  },
  {
    bio: "Local activist & organizer. Retired Spirehead.",
    name: "Redbeardy McGee",
    pronouns: "he/them",
    twitch: "redbeardy_mcgee",
    youtube: "https://www.youtube.com/@RedbeardyMcGee",
  },
  {
    name: "Transgentrified",
    pronouns: "they/them",
    twitch: "transgentrified",
  },
  {
    bio: "Best Japanese Slay the Spire player.",
    name: "vmService",
    twitch: "vmservice",
    youtube: "https://www.youtube.com/@vmserv",
  },
]

const getOrganizers = createServerFn().handler(async () => {
  const twitchNames = organizers.map((o) => o.twitch)
  const users = await getTwitchUsersByNames(twitchNames)

  if (!users) {
    throw new Error("No users found.")
  }

  const avatarMap = new Map(users.map((u) => [u.name, u.profilePictureUrl]))

  return organizers.map(
    (organizer): OrganizerWithAvatar => ({
      ...organizer,
      avatar: avatarMap.get(organizer.twitch) || "",
    }),
  )
})

export const Route = createFileRoute("/organizers")({
  component: OrganizerCards,
  loader: async () => {
    return await getOrganizers()
  },
})

function OrganizerCards() {
  const organizers = Route.useLoaderData()
  return (
    <div className="mt-4 grid grid-flow-col grid-rows-2 place-content-evenly gap-4">
      {organizers.map(({ avatar, bio, name, pronouns, twitch, youtube }) => {
        return (
          <Card className="w-sm bg-slate-700" key={name}>
            {/* FIXME: `flex flex-row` is probably more correct, but messes up the youtube image */}
            <CardHeader className="grid grid-flow-col grid-rows-1">
              {/* <CardHeader className="flex flex-row"> */}
              <CardTitle>
                <div className="flex flex-row pb-2">
                  {avatar && (
                    <Avatar className="mr-4 mb-2" size="lg">
                      <AvatarImage src={avatar} />
                      <AvatarFallback>
                        {name.slice(0, 2).toLowerCase()}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div className="flex flex-col">
                    <span className="font-semibold text-2xl text-neutral-400 text-shadow-lg">
                      {name}
                    </span>
                    <span className="font-light text-neutral-400 text-shadow-lg text-sm italic">
                      {pronouns}
                    </span>
                  </div>
                </div>
              </CardTitle>
              <div className="flex flex-row items-center justify-end">
                {twitch && (
                  <a href={`https://twitch.tv/${twitch}`}>
                    <TwitchLogo className="px-2" height="30" />
                  </a>
                )}
                {/* FIXME: Wanted to use SVG, but it was very broken and YouTube doesn't provide official SVG */}
                {youtube && (
                  <a href={youtube}>
                    <img
                      alt="YouTube icon"
                      className="px-2"
                      height="60"
                      src="/icons/youtube.png"
                      width="60"
                    />
                  </a>
                )}
              </div>
            </CardHeader>
            <CardContent className="font-medium text-lg text-shadow-lg">
              {bio}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
