import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { ArrowRight, Calendar, Mic, Users } from "lucide-react";
import { ContactHandle, PrideGradient } from "#/components/typography";
import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card";
import { getTwitchUsersByNames } from "#/lib/twitch";

interface Participant {
  name: string;
}

interface Host {
  name: string;
  displayName: string;
  profilePictureUrl: string;
}

interface Event {
  name: string;
  /** ISO UTC string, e.g. "2025-06-22T20:00:00Z" */
  date: string;
  hosts: Participant[];
  participants: Participant[];
  description: string;
}

const events: Event[] = [
  {
    date: "2026-06-26T14:00:00Z",
    description: "Coop speedrun quarterfinals 3",
    hosts: [{ name: "hellofmira" }, { name: "Merl61" }],
    name: "Coop Speedrun Quarterfinals 1",
    participants: [],
  },
  {
    date: "2026-06-26T18:00:00Z",
    description: "A friendly seeded STS2 Regent run",
    hosts: [{ name: "Baalorlord" }],
    name: "Open registration Regent seed",
    participants: [],
  },
  {
    date: "2026-06-26T22:00:00Z",
    description: "Coop speedrun quarterfinals 4",
    hosts: [{ name: "hellofmira" }, { name: "Merl61" }],
    name: "Coop Speedrun Quarterfinals 2",
    participants: [],
  },
  {
    date: "2026-06-27T02:00:00Z",
    description: "STS1 Silent evil seed competition",
    hosts: [{ name: "Xecnar" }, { name: "NaveGreed" }],
    name: "Sinister Silent seed",
    participants: [],
  },
  {
    date: "2026-06-27T06:00:00Z",
    description: "A friendly seeded STS2 Ironclad run",
    hosts: [{ name: "paparatto18" }, { name: "Onepunman_" }],
    name: "Open registration Ironclad seed",
    participants: [],
  },
  {
    date: "2026-06-27T14:00:00Z",
    description: "STS1 Ironclad evil seed competition",
    hosts: [{ name: "PrydwenWZ" }, { name: "Ckalvins" }],
    name: "Infernal Ironclad",
    participants: [],
  },
  {
    date: "2026-06-27T18:00:00Z",
    description: "Coop speedrun semifinals 1",
    hosts: [{ name: "hellofmira" }, { name: "Merl61" }],
    name: "Coop Speedrun Semifinals 1",
    participants: [],
  },
  {
    date: "2026-06-27T20:00:00Z",
    description:
      "A Spire-themed game of Jeopardy designed & hosted by vmService",
    hosts: [{ name: "vmService" }],
    name: "Spire Trivia",
    participants: [],
  },
  {
    date: "2026-06-27T22:00:00Z",
    description: "Coop speedrun semifinals 2",
    hosts: [{ name: "hellofmira" }, { name: "Merl61" }],
    name: "Coop Speedrun Semifinals 2",
    participants: [],
  },
  {
    date: "2026-06-28T00:00:00Z",
    description:
      "Discussion panel featuring queer community members regarding issues facing queer people",
    hosts: [{ name: "Baalorlord" }, { name: "Asukii314" }],
    name: "Queer Discussion Panel 1",
    participants: [{ name: "TransRatSatan" }, { name: "zzzHypnos" }],
  },
  {
    date: "2026-06-28T02:00:00Z",
    description:
      "Players compete to enchant the highest percentage of their deck with Glam",
    hosts: [{ name: "vmService" }, { name: "Nalei" }],
    name: "BIG GLAM GAY SEED",
    participants: [],
  },
  {
    date: "2026-06-28T04:00:00Z",
    description: "A friendly seeded STS2 Necrobinder seed",
    hosts: [{ name: "Xecnar" }, { name: "Onepunman_" }],
    name: "Open registration Necrobinder seed",
    participants: [],
  },
  {
    date: "2026-06-28T08:00:00Z",
    description: "A friendly seeded STS2 Defect run",
    hosts: [{ name: "jmacsts" }],
    name: "Open registration Defect seed",
    participants: [],
  },
  {
    date: "2026-06-28T12:00:00Z",
    description: "A friendly seeded STS2 Silent run",
    hosts: [{ name: "PrydwenWZ" }],
    name: "Open registration Silent seed",
    participants: [],
  },
  {
    date: "2026-06-28T16:00:00Z",
    description:
      "Discussion panel featuring queer community members regarding issues facing queer people",
    hosts: [{ name: "FrostPrime" }, { name: "kaosmark2" }],
    name: "Queer Discussion Panel 2",
    participants: [{ name: "grapeses" }, { name: "Kristen Grimm" }],
  },
  {
    date: "2026-06-28T18:00:00Z",
    description: "2v2 speedrun to determine 3rd place winner",
    hosts: [{ name: "hellofmira" }, { name: "Merl61" }],
    name: "Coop Speedrun 3rd Place",
    participants: [],
  },
  {
    date: "2026-06-28T20:00:00Z",
    description: "Players guess bookshelf's silly Spire drawings",
    hosts: [{ name: "bookshelf2029" }, { name: "JapaneseExport" }],
    name: "bookshelf2029 Draws the Spire",
    participants: [],
  },
  {
    date: "2026-06-28T22:00:00Z",
    description: "Coop speedrun Grand Finals",
    hosts: [{ name: "hellofmira" }, { name: "Merl61" }],
    name: "Coop Speedrun Grand Final",
    participants: [],
  },
  {
    date: "2026-06-29T00:00:00Z",
    description:
      "A thoughtful review of the nostalgia and time we shared with the original Slay the Spire.",
    hosts: [
      { name: "Xecnar" },
      { name: "Onepunman_" },
      { name: "NaveGreed" },
      { name: "TheCrimsonBlur" },
    ],
    name: "Spire 1 Retrospective",
    participants: [],
  },
  {
    date: "2026-06-29T02:00:00Z",
    description: "STS1 Defect evil seed competition",
    hosts: [{ name: "JapaneseExport" }, { name: "vmService" }],
    name: "Diabolical Defect seed",
    participants: [],
  },
  {
    date: "2026-06-29T06:00:00Z",
    description: "3-4 player Soulbound Regent run",
    hosts: [{ name: "paparatto18" }],
    name: "Constellation Partners",
    participants: [],
  },
];

const getHosts = createServerFn().handler(async () => {
  const names = [
    ...new Set(events.flatMap((e) => e.hosts.map((h) => h.name.toLowerCase()))),
  ];
  if (names.length === 0) return new Map();
  const users = await getTwitchUsersByNames(names);
  const map = new Map<string, Host>();
  for (const user of users ?? []) {
    map.set(user.name.toLowerCase(), {
      displayName: user.displayName,
      name: user.name,
      profilePictureUrl: user.profilePictureUrl,
    });
  }
  return map;
});

function toLocalTime(dateStr: string): string {
  const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    month: "short",
    timeZone: userTz,
    timeZoneName: "short",
  }).format(new Date(dateStr));
}

export const Route = createFileRoute("/schedule")({
  component: Schedule,
  loader: async () => {
    return await getHosts();
  },
});

function ParticipantList({ participants }: { participants: Participant[] }) {
  if (participants.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm">
      <Users className="size-3.5 shrink-0" />
      {participants.map((p) => (
        <span key={p.name}>
          <ContactHandle>{p.name}</ContactHandle>
        </span>
      ))}
    </div>
  );
}

function DateBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-2 font-medium text-muted-foreground text-sm">
      <Calendar className="size-5" />
      {children}
    </span>
  );
}

function EventCard({ event }: { event: Event }) {
  const hostMap = Route.useLoaderData();
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle className="py-2 text-lg">{event.name}</CardTitle>
          <DateBadge>{toLocalTime(event.date)}</DateBadge>
        </div>
        <CardDescription className="leading-relaxed">
          {event.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 border-t pt-4">
        {event.hosts.length > 0 && (
          <div className="flex items-center gap-2">
            <Mic className="size-3.5 text-muted-foreground" />
            <div className="flex items-center gap-4">
              {event.hosts.map((h) => {
                const host = hostMap?.get(h.name.toLowerCase());
                return (
                  <div
                    className="flex flex-col items-center gap-1 text-center"
                    key={h.name}
                  >
                    <Avatar size="lg">
                      <AvatarImage src={host?.profilePictureUrl} />
                      <AvatarFallback>
                        {h.name.slice(0, 2).toLocaleLowerCase()}
                      </AvatarFallback>
                    </Avatar>
                    <ContactHandle>{host?.displayName ?? h.name}</ContactHandle>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {event.participants.length > 0 && (
          <ParticipantList participants={event.participants} />
        )}
      </CardContent>
    </Card>
  );
}

function Schedule() {
  return (
    <div className="mx-auto max-w-2xl items-center space-y-8 px-4 py-8">
      <div>
        <h2 className="font-bold text-3xl text-foreground">
          <PrideGradient>Pride With Friends</PrideGradient> Events
        </h2>
        <p className="mt-1">Content schedule for June 26-29</p>
        <p className="mt-1 text-muted-foreground">
          Interested in joining? The seeded STS1 and STS2 runs are open
          registration for <strong>ANYONE</strong> to play. Contact{" "}
          <ContactHandle>asukii</ContactHandle>,{" "}
          <ContactHandle>kaosmark2</ContactHandle>, or{" "}
          <ContactHandle>redbeardymcgee</ContactHandle> on Discord to get
          involved!
        </p>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <EventCard event={event} key={event.name} />
        ))}
      </div>
      <div>
        <Link
          className="font-medium text-foreground underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
          to="/leaderboards"
        >
          <span className="inline-flex items-center gap-1">
            Month-Long Challenge Runs
            <ArrowRight className="size-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
