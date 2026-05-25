import { createFileRoute } from "@tanstack/react-router"
import {
  DocsH2,
  ExampleText,
  TutorialText,
  WarningText,
} from "#/components/typography"

export const Route = createFileRoute("/docs/campaign-setup")({
  component: CampaignSetup,
})

function CampaignSetup() {
  return (
    <div className="m-5">
      <DocsH2>Campaign Setup</DocsH2>
      <p>
        If you are a streamer and want to have your own individual donation
        tracker, overlay, incentives and milestones, follow these instructions.
      </p>
      <br />
      <ol className="list-decimal pl-10">
        <li>
          Click {/* FIXME: Update link for new campaign */}
          <a
            href="https://tilt.fyi/mqTk1CP3dQ"
            rel="noreferrer"
            target="_blank"
          >
            here
          </a>{" "}
          (<WarningText>WARNING:</WarningText>
          <em> This is not updated yet</em>)
        </li>
        <li>
          Click <TutorialText>Support this campaign</TutorialText>
        </li>
        <li>
          Fill in the <TutorialText>Campaign Name</TutorialText> (e.g{" "}
          <ExampleText>Pride With Friends 2026 [YOURNAME]</ExampleText>)
        </li>
        <li>
          Add a description (e.g.{" "}
          <ExampleText>
            [YOURNAME] climbs spires and slays hearts with friends to support
            the Trevor Project!
          </ExampleText>
          )
        </li>
        <li>Link your Twitch account name or skip</li>
        <li>
          {/* TODO: Create PWF explainer/invite video? */}
          Skip the Youtube video
        </li>
        <li>Skip Image</li>
        <li>
          Set your own campaign goal! $100 is the minimum on Tiltify, but you
          are under zero pressure to reach it at all. Every penny counts towards
          supporting a good cause, and combines with the whole campaign!
        </li>
        <li>
          {" "}
          Click <TutorialText>Create Campaign</TutorialText>
        </li>
      </ol>
      <br />
      <p>
        You will now be at the Campaign Dashboard for Pride With Friends. This
        is where you edit any additional information. You do not have to change
        or add anything here, but it is the place where you configure donation
        incentives and milestones. After setting those up, you click the blue
        publish button and start adding the campaign and donate urls to your
        stream panels and bot commands! You will also find the overlays section,
        for adding your own donation tracker and alerts to your stream.
      </p>
    </div>
  )
}
