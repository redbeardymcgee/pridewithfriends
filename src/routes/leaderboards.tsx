import { createFileRoute, Link } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ExternalLink, Medal, Trophy } from "lucide-react";
import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#/components/ui/table";

type RankingMetric = "score" | "percentage" | "gold" | "time";

interface ChallengeSubmission {
  rank: number;
  player: string;
  clipUrl?: string;
  score?: number;
  time?: string;
  percentage?: number;
  gold?: number;
}

interface ChallengeRun {
  id: number;
  label: string;
  description: string;
  rankingMetric: RankingMetric;
  seeded: ChallengeSubmission[];
  unseeded: ChallengeSubmission[];
}

const METRIC_LABELS: Record<RankingMetric, string> = {
  gold: "Gold",
  percentage: "Glam %",
  score: "Score",
  time: "Time",
};

// TODO: Take submissions by form instead. Blocked on DB integration.
const challengeRuns: ChallengeRun[] = [
  {
    description: "Ranked by score",
    id: 1,
    label: "Pride's Bane",
    rankingMetric: "score",
    seeded: [
      { player: "TBD", rank: 1, score: 0 },
      { player: "TBD", rank: 2, score: 0 },
      { player: "TBD", rank: 3, score: 0 },
    ],
    unseeded: [
      {
        clipUrl: "https://www.twitch.tv/videos/2793479113",
        player: "kaosmark2",
        rank: 1,
        score: 3470,
      },
      { player: "TBD", rank: 2, score: 0 },
      { player: "TBD", rank: 3, score: 0 },
    ],
  },
  {
    description: "Ranked by percentage of deck enchanted with Glam",
    id: 2,
    label: "Get Glamourous",
    rankingMetric: "percentage",
    seeded: [
      { percentage: 0, player: "TBD", rank: 1 },
      { percentage: 0, player: "TBD", rank: 2 },
      { percentage: 0, player: "TBD", rank: 3 },
    ],
    unseeded: [
      { percentage: 0, player: "TBD", rank: 1 },
      { percentage: 0, player: "TBD", rank: 2 },
      { percentage: 0, player: "TBD", rank: 3 },
    ],
  },
  {
    description: "Ranked by remaining gold",
    id: 3,
    label: "Luxury Gay Space",
    rankingMetric: "gold",
    seeded: [
      { gold: 0, player: "TBD", rank: 1 },
      { gold: 0, player: "TBD", rank: 2 },
      { gold: 0, player: "TBD", rank: 3 },
    ],
    unseeded: [
      {
        clipUrl: "https://www.twitch.tv/videos/2793879737?t=0h9m28s",
        gold: 2150402,
        player: "jmac_sts",
        rank: 1,
      },
      { gold: 0, player: "TBD", rank: 2 },
      { gold: 0, player: "TBD", rank: 3 },
    ],
  },
  {
    description: "Ranked by time",
    id: 4,
    label: "Constellation Partners",
    rankingMetric: "time",
    seeded: [
      { player: "TBD", rank: 1, time: "TBD" },
      { player: "TBD", rank: 2, time: "TBD" },
      { player: "TBD", rank: 3, time: "TBD" },
    ],
    unseeded: [
      { player: "TBD", rank: 1, time: "TBD" },
      { player: "TBD", rank: 2, time: "TBD" },
      { player: "TBD", rank: 3, time: "TBD" },
    ],
  },
];

function getRowClassName(rank: number) {
  switch (rank) {
    case 1:
      return "bg-yellow-500/10 hover:bg-yellow-500/15";
    case 2:
      return "bg-gray-500/10 hover:bg-gray-500/15";
    case 3:
      return "bg-orange-500/10 hover:bg-orange-500/15";
    default:
      return "";
  }
}

function RankCell({ rank }: { rank: number }) {
  switch (rank) {
    case 1:
      return (
        <span className="flex items-center gap-1 text-yellow-500">
          <Medal className="size-3" />
          <span>1</span>
        </span>
      );
    case 2:
      return (
        <span className="flex items-center gap-1 text-gray-400">
          <Medal className="size-3" />
          <span>2</span>
        </span>
      );
    case 3:
      return (
        <span className="flex items-center gap-1 text-orange-600">
          <Medal className="size-3" />
          <span>3</span>
        </span>
      );
    default:
      return <span>#{rank}</span>;
  }
}

const columnHelper = createColumnHelper<ChallengeSubmission>();

function SubmissionTable({
  challengeName,
  rankingMetric,
  submissions,
}: {
  challengeName: string;
  rankingMetric: RankingMetric;
  submissions: ChallengeSubmission[];
}) {
  const metricColumn = useMemo(
    () =>
      columnHelper.accessor(rankingMetric, {
        header: METRIC_LABELS[rankingMetric],
      }),
    [rankingMetric],
  );

  const columns = useMemo(
    () => [
      columnHelper.accessor("rank", {
        cell: (info) => <RankCell rank={info.getValue()} />,
        header: "Rank",
      }),
      columnHelper.accessor("player", {
        header: "Player",
      }),
      metricColumn,
      columnHelper.display({
        cell: (info) => {
          const { player, rank, clipUrl } = info.row.original;
          if (!clipUrl) return null;
          return (
            <a
              aria-label={`Watch ${player}'s ${challengeName} clip for rank #${rank}`}
              className="text-muted-foreground hover:text-foreground"
              href={clipUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ExternalLink className="size-3" />
            </a>
          );
        },
        header: "Clip",
        id: "clip",
      }),
    ],
    [challengeName, metricColumn],
  );

  const table = useReactTable({
    columns,
    data: submissions,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow className={getRowClassName(row.original.rank)} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function RunTypeLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-2 text-sm">{children}</p>;
}

function ChallengeRunCard({ challenge }: { challenge: ChallengeRun }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="text-lg">{challenge.label}</CardTitle>
            <CardDescription className="leading-relaxed">
              {challenge.description}
            </CardDescription>
          </div>
          <Trophy className="text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <RunTypeLabel>Unseeded</RunTypeLabel>
            <SubmissionTable
              challengeName={challenge.label}
              rankingMetric={challenge.rankingMetric}
              submissions={challenge.unseeded}
            />
          </div>
          <div>
            <RunTypeLabel>Seeded</RunTypeLabel>
            <SubmissionTable
              challengeName={challenge.label}
              rankingMetric={challenge.rankingMetric}
              submissions={challenge.seeded}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export const Route = createFileRoute("/leaderboards")({
  component: ChallengeRuns,
});

function ChallengeRuns() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h2 className="font-bold text-3xl text-foreground">
        Month-Long Challenge Runs
      </h2>
      <p className="mt-1 text-muted-foreground">
        <Link params={{ _splat: "challenge-runs" }} to="/docs/$">
          Submit your runs
        </Link>{" "}
        throughout June for a chance to be on the leaderboard!
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {challengeRuns.map((challenge) => (
          <ChallengeRunCard challenge={challenge} key={challenge.id} />
        ))}
      </div>
    </div>
  );
}
