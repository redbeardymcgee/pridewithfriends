import { createFileRoute } from "@tanstack/react-router"
import { PrideGradient } from "#/components/typography"

export const Route = createFileRoute("/about")({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rise-in rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">About</p>
        <h1 className="display-title mb-3 font-bold text-(--sea-ink) text-4xl sm:text-5xl">
          A celebration of <PrideGradient>Pride</PrideGradient>, with all our
          friends.
        </h1>
        <p className="m-0 max-w-3xl text-(--sea-ink-soft) text-base leading-8">
          <PrideGradient>Pride With Friends</PrideGradient> is a charity event
          supporting the underrepresented queer community on Twitch.
        </p>
      </section>
    </main>
  )
}
