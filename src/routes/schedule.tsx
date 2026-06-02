import { createFileRoute, Link } from "@tanstack/react-router"
import { Calendar, Users } from "lucide-react"
import { PrideGradient } from "#/components/typography"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "#/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card"
import { cn } from "#/lib/utils"

const AVATAR_COLORS = [
  "bg-rose-500",
  "bg-blue-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-cyan-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-indigo-500",
]

interface Participant {
  name: string
}

interface Event {
  id: number
  name: string
  date: string
  participants: Participant[]
  description: string
}

const events: Event[] = [
  {
    date: "TBA",
    description:
      "A Spire-themed game of Jeopardy designed & hosted by vmService",
    id: 1,
    name: "Spire Trivia",
    participants: [{ name: "TBA 1" }, { name: "TBA 2" }, { name: "TBA 3" }],
  },
  {
    date: "TBA",
    description:
      "8 teams of 2 players face off to win Spire 2 Ascension 0 runs. May the fastest pair prevail!",
    id: 2,
    name: "Coop Speedrun Tournament",
    participants: [
      { name: "TBA 1" },
      { name: "TBA 2" },
      { name: "TBA 3" },
      { name: "TBA 4" },
      { name: "TBA 5" },
      { name: "TBA 6" },
      { name: "TBA 7" },
      { name: "TBA 8" },
      { name: "TBA 9" },
      { name: "TBA 10" },
      { name: "TBA 11" },
      { name: "TBA 12" },
      { name: "TBA 13" },
      { name: "TBA 14" },
      { name: "TBA 15" },
      { name: "TBA 16" },
    ],
  },
  {
    date: "TBA",
    description:
      "A thoughtful review of the nostalgia and time we shared with the original Slay the Spire.",
    id: 3,
    name: "Spire 1 Retrospective",
    participants: [
      { name: "TBA 1" },
      { name: "TBA 2" },
      { name: "TBA 3" },
      { name: "TBA 4" },
    ],
  },
  {
    date: "TBA",
    description:
      "Discussion panel featuring queer community members regarding issues facing queer people.",
    id: 4,
    name: "Queer Discussion Panel",
    participants: [
      { name: "TBA 1" },
      { name: "TBA 2" },
      { name: "TBA 3" },
      { name: "TBA 4" },
    ],
  },
]

function ParticipantAvatars({ participants }: { participants: Participant[] }) {
  const maxVisible = 4
  const visible = participants.slice(0, maxVisible)
  const overflow = participants.length - maxVisible

  return (
    <AvatarGroup>
      {visible.map((p, i) => {
        const color = AVATAR_COLORS[i % AVATAR_COLORS.length]
        return (
          <Avatar key={p.name} size="sm">
            <AvatarFallback className={cn("text-white text-xs", color)}>
              {p.name[0]}
            </AvatarFallback>
          </Avatar>
        )
      })}
      {overflow > 0 && (
        <AvatarGroupCount>
          <span>+{overflow}</span>
        </AvatarGroupCount>
      )}
    </AvatarGroup>
  )
}

function DateBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-2 font-medium text-muted-foreground text-sm">
      <Calendar className="size-5" />
      {children}
    </span>
  )
}

function EventCard({ event }: { event: Event }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="text-lg">{event.name}</CardTitle>
            <DateBadge>{event.date}</DateBadge>
          </div>
          <ParticipantAvatars participants={event.participants} />
        </div>
        <CardDescription className="leading-relaxed">
          {event.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="border-t pt-4">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Users className="size-3.5" />
          <span>
            {event.participants.length} participant
            {event.participants.length === 1 ? "" : "s"}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export const Route = createFileRoute("/schedule")({
  component: Schedule,
})

function Schedule() {
  return (
    <div className="mx-auto max-w-2xl items-center space-y-8 px-4 py-8">
      <div>
        <h2 className="font-bold text-3xl text-foreground">
          <PrideGradient>Pride With Friends</PrideGradient> Events
        </h2>
        <p className="mt-1 text-muted-foreground">
          Content schedule for June 22-29
        </p>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
      <div>
        <Link
          className="font-medium text-foreground underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
          to="/leaderboards"
        >
          Month-Long Challenge Runs &rarr;
        </Link>
      </div>
    </div>
  )
}
