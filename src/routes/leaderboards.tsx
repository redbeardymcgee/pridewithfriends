import { createFileRoute, Link } from "@tanstack/react-router"
import { ExternalLink, Trophy } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card"

interface ChallengeRun {
  id: number
  name: string
  description: string
  submissions: ChallengeSubmission[]
}

interface ChallengeSubmission {
  rank: number
  name: string
  time: string
  clipUrl?: string
}

const challengeRuns: ChallengeRun[] = [
  {
    description: "Ranked by score",
    id: 1,
    name: "Pride's Bane",
    submissions: [
      { clipUrl: "#", name: "TBD", rank: 1, time: "TBD" },
      { clipUrl: "#", name: "TBD", rank: 2, time: "TBD" },
      { clipUrl: "#", name: "TBD", rank: 3, time: "TBD" },
    ],
  },
  {
    description: "Ranked by percentage of deck enchanted with Glam",
    id: 2,
    name: "Get Glamourous",
    submissions: [
      { clipUrl: "#", name: "TBD", rank: 1, time: "TBD" },
      { clipUrl: "#", name: "TBD", rank: 2, time: "TBD" },
      { clipUrl: "#", name: "TBD", rank: 3, time: "TBD" },
    ],
  },
  {
    description: "Ranked by remaining gold",
    id: 3,
    name: "Luxury Gay Space",
    submissions: [
      { clipUrl: "#", name: "TBD", rank: 1, time: "TBD" },
      { clipUrl: "#", name: "TBD", rank: 2, time: "TBD" },
      { clipUrl: "#", name: "TBD", rank: 3, time: "TBD" },
    ],
  },
  {
    description: "Ranked by score",
    id: 4,
    name: "Constellation Partners",
    submissions: [
      { clipUrl: "#", name: "TBD", rank: 1, time: "TBD" },
      { clipUrl: "#", name: "TBD", rank: 2, time: "TBD" },
      { clipUrl: "#", name: "TBD", rank: 3, time: "TBD" },
    ],
  },
]

function ChallengeRunCard({ challenge }: { challenge: ChallengeRun }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="text-lg">{challenge.name}</CardTitle>
            <CardDescription className="leading-relaxed">
              {challenge.description}
            </CardDescription>
          </div>
          <Trophy className="size-5 shrink-0 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="border-t pt-4">
        <div className="space-y-2">
          {challenge.submissions.map((sub) => (
            <div
              className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2"
              key={sub.rank}
            >
              <div className="flex items-center gap-3">
                <span className="font-medium text-muted-foreground text-sm tabular-nums">
                  #{sub.rank}
                </span>
                <span className="font-medium text-foreground text-sm">
                  {sub.name}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground text-sm tabular-nums">
                  {sub.time}
                </span>
                {sub.clipUrl && (
                  <a
                    className="text-muted-foreground hover:text-foreground"
                    href={sub.clipUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export const Route = createFileRoute("/leaderboards")({
  component: ChallengeRuns,
})

function ChallengeRuns() {
  return (
    <div className="mx-auto max-w-2xl items-center space-y-8 px-4 py-8">
      <div>
        <h2 className="font-bold text-3xl text-foreground">
          Month-Long Challenge Runs
        </h2>
        <p className="mt-1 text-muted-foreground">
          <Link params={{ _splat: "challenge-runs" }} to="/docs/$">
            Submit your runs
          </Link>{" "}
          throughout June for a chance to be on the leaderboard!
        </p>
      </div>
      <div className="space-y-4">
        {challengeRuns.map((challenge) => (
          <ChallengeRunCard challenge={challenge} key={challenge.id} />
        ))}
      </div>
    </div>
  )
}
