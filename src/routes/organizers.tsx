import { createFileRoute } from "@tanstack/react-router"
import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#/components/ui/card"
import TwitchLogo from "@/assets/icons/glitch_flat_purple.svg?react"

export const Route = createFileRoute("/organizers")({
  component: OrganizerCards,
})

const organizers = [
  {
    bio: "hello world",
    name: "asukii",
    pronouns: "she/her",
    twitch: "https://twitch.tv/asukii",
    youtube: "https://youtube.com/@asukii314/",
  },
  {
    bio: "hello world",
    name: "Mira Newton",
    pronouns: "they/them",
    twitch: "https://twitch.tv/hellofmira",
    youtube: "https://www.youtube.com/@mirahell",
  },
  {
    bio: "hello world",
    name: "kaosmark2",
    pronouns: "they/them",
    twitch: "https://twitch.tv/kaosmark2",
    youtube: "http://www.youtube.com/@kaosmark2",
  },
  {
    avatar: "/avatars/redbeardymcgee.jpg",
    bio: "Local activist & organizer. Retired Spirehead.",
    name: "Redbeardy McGee",
    pronouns: "he/them",
    twitch: "https://twitch.tv/redbeardymcgee",
    youtube: "https://www.youtube.com/@RedbeardyMcGee",
  },
  {
    bio: "hello world",
    name: "Transgentrified",
    pronouns: "they/them",
    twitch: "https://twitch.tv/Transgentrified",
    youtube: "",
  },
  {
    bio: "hello world",
    name: "vmService",
    pronouns: "",
    twitch: "https://twitch.tv/vmService",
    youtube: "https://www.youtube.com/@vmserv",
  },
]

function OrganizerCards() {
  return (
    <div className="mt-4 grid grid-flow-col grid-rows-2 gap-2">
      {organizers.map((organizer) => {
        return (
          <Card className="w-md bg-slate-700" key={organizer.name}>
            <CardHeader>
              <Avatar>
                <AvatarImage src={undefined} />
                <AvatarFallback>
                  {organizer.name.slice(0, 2).toLowerCase()}
                </AvatarFallback>
              </Avatar>
              <CardTitle>
                <span className="font-semibold text-4xl text-neutral-400 text-shadow-lg">
                  {organizer.name}
                </span>
                <div>
                  <span className="font-light text-neutral-400 text-shadow-lg text-sm italic">
                    {organizer.pronouns}
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="font-medium text-lg text-shadow-lg">
              {organizer.bio}
            </CardContent>
            <CardFooter className="place-content-evenly">
              {organizer.twitch && (
                <a className="" href={organizer.twitch}>
                  <TwitchLogo height="30" />
                </a>
              )}
              {/* FIXME: Wanted to use SVG, but it was very broken and YouTube doesn't provide official SVG */}
              {organizer.youtube && (
                <a className="" href={organizer.youtube}>
                  <img
                    alt="YouTube icon"
                    height="50"
                    src="/public/icons/youtube.png"
                    width="50"
                  />
                </a>
              )}
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
