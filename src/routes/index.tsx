import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main className="page-wrap px-4 pt-14 pb-8">
      <section className="island-shell rise-in relative overflow-hidden rounded-4xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -top-24 -left-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
        <p className="island-kicker mb-3">
          Slay the Spire with friends and pros
        </p>
        <h1 className="display-title mb-5 max-w-3xl font-bold text-(--sea-ink) text-4xl leading-[1.02] tracking-tight sm:text-6xl">
          Pride With Friends
        </h1>
        <p className="mb-8 max-w-2xl text-(--sea-ink-soft) text-base sm:text-lg">
          A fun way to support our friends and neighbors in the queer community,
          judgment-free and inclusive.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 font-semibold text-(--lagoon-deep) text-sm no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
            href="/about"
          >
            About This Event
          </a>
          <a
            className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 font-semibold text-(--sea-ink) text-sm no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
            href="/setup"
          >
            Streamer Setup
          </a>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [
            "Streamers",
            "Meet the amazing gamers participating in Pride With Friends.",
          ],
          ["Schedule", "Find your favorite events during Pride With Friends."],
          ["Find a lobby", "Discover upcoming coop lobbies that you can join!"],
          ["Support", "Donate to <charity>!"],
        ].map(([title, desc], index) => (
          <article
            className="island-shell feature-card rise-in rounded-2xl p-5"
            key={title}
            style={{ animationDelay: `${index * 90 + 80}ms` }}
          >
            <h2 className="mb-2 font-semibold text-(--sea-ink) text-base">
              {title}
            </h2>
            <p className="m-0 text-(--sea-ink-soft) text-sm">{desc}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
