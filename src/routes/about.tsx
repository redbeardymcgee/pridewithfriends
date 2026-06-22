import { createFileRoute } from "@tanstack/react-router"
import { PrideGradient, ProseText } from "#/components/typography"

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
        <ProseText className="mb-6">
          <PrideGradient>Pride</PrideGradient> is a riot. This whole movement
          started from throwing stones, bottles, and bricks at cops raiding gay
          bars in 1969. It's true drag and queer culture has been present
          throughout all of history and in many depictions of gods, but{" "}
          <PrideGradient>Pride</PrideGradient> to me is about the activism and
          activeness that started that day. <PrideGradient>Pride</PrideGradient>{" "}
          has become flashier and gone through its brief situationship with
          rainbow capitalism but it has remained visible.
        </ProseText>
        <ProseText className="mb-6">
          This visibility is what made me who I am today. I don’t think I ever
          would have been comfortable identifying as queer without seeing people
          like me (in my case at the time, very masc looking enbies) be happy
          with it. It no longer made me feel like I was intruding on the LGBTQ+
          identity. I can’t express how this made me feel. The whole world of
          possibility opened. Experiences like this are why we need{" "}
          <PrideGradient>Pride</PrideGradient>. Seeing someone like you be in
          this umbrella that at one point may seem inaccessible changes the
          world for people whose worlds may be closed.
        </ProseText>
        <ProseText>
          The visibility of <PrideGradient>Pride</PrideGradient> is special to
          me for a few reasons. It's being visible for those whose worlds are
          closed and for those who can't. We remind everyone that no matter how
          lost they feel or how many obstacles are in their way we will be loud
          for them, we will support them, and we will be ready for them to join
          when ready or lost. Our presence and steps will guide those to come
          after - even without doing anything other than being ourselves.
          Activism is important too, but sometimes it's the everyday ourselves
          that people will see themselves in. I would be lost without people
          like that. As much as we can we must make ourselves known and loud. We
          have to riot for those that can't and those who are to come.{" "}
          <PrideGradient>Pride</PrideGradient> is our riot.
        </ProseText>
        <p className="mt-4 text-right italic text-(--sea-ink-soft/60)">
          — Transgentrified
        </p>
      </section>
    </main>
  )
}
