import { createFileRoute } from "@tanstack/react-router"
import {
  DocsH2,
  DocsH3,
  PrideGradient,
  TutorialText,
} from "#/components/typography"

export const Route = createFileRoute("/docs/join-the-team")({
  component: JoinTheTeam,
})

function JoinTheTeam() {
  return (
    <div className="mx-auto max-w-prose">
      <DocsH2>
        Join the <PrideGradient>Pride With Friends</PrideGradient> team!
      </DocsH2>
      <br />
      <p>
        Our fundraisers are hosted on the{" "}
        <a href="https://tiltify.com/" rel="noreferrer" target="_blank">
          Tiltify
        </a>{" "}
        platform. For the smoothest setup experience, we have created a team
        that you may join.
      </p>
      <br />
      <p>
        Start by clicking{" "}
        <a
          href="https://tiltify.com/team-invite/dfboyD6KKrZitzUKnkWp2wj"
          rel="noreferrer"
          target="_blank"
        >
          this link
        </a>
        . Click <TutorialText>accept</TutorialText> and you will be redirected
        to an onboarding tutorial for the Tiltify dashboard. Please click{" "}
        <TutorialText>Next</TutorialText>
        to learn about navigating the web app. If you wish, take a few moments
        to explore around the interface yourself.
      </p>
      <br />
      <p>
        You are now a member of the{" "}
        <PrideGradient>Pride With Friends</PrideGradient> Tiltify team! This
        makes it easier for you to launch your own fundraising campaign as a
        part of our larger overall fundraiser.
      </p>
      <br />
      <p>Next, let's launch your campaign as a member of Pride with Friends!</p>
      <br />
      <DocsH3>Resources</DocsH3>
      <ul className="list-disc pl-10">
        <li>
          <a
            href="https://info.tiltify.com/support/solutions/articles/43000013769-fundraiser-dashboard-my-hub"
            rel="noreferrer"
            target="_blank"
          >
            Tiltify support: Fundraiser Dashboard / My Hub
          </a>
        </li>
      </ul>
    </div>
  )
}
