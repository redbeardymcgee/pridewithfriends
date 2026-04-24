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
  },
  {
    bio: "hello world",
    name: "Mira Newton",
    pronouns: "they/them",
    twitch: "https://twitch.tv/hellofmira",
  },
  {
    bio: "hello world",
    name: "kaosmark2",
    pronouns: "they/them",
    twitch: "https://twitch.tv/kaosmark2",
  },
  {
    bio: "hello world",
    name: "nickysts",
    pronouns: "",
    twitch: "https://twitch.tv/nickysts",
  },
  {
    bio: "hello world",
    name: "Panacea",
    pronouns: "any/any",
    twitch: "https://twitch.tv/panacea108",
  },
  {
    bio: "Local activist & organizer. Retired Spirehead.",
    name: "Redbeardy McGee",
    pronouns: "he/them",
    twitch: "https://twitch.tv/redbeardymcgee",
  },
  {
    bio: "hello world",
    name: "Transgentrified",
    pronouns: "they/them",
    twitch: "https://twitch.tv/Transgentrified",
  },
  {
    bio: "hello world",
    name: "vmService",
    pronouns: "",
    twitch: "https://twitch.tv/vmService",
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
            <CardFooter>
              <a href={organizer.twitch}>
                <TwitchLogo height="30" />
              </a>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
