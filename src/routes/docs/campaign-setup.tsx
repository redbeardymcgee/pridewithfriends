import { createFileRoute } from "@tanstack/react-router"
import { Image } from "@unpic/react"
import {
  DocsH2,
  ExampleText,
  PrideText,
  TutorialText,
} from "#/components/typography"
import createCampaign from "@/assets/images/docs/create-campaign.png"
import reviewPublish from "@/assets/images/docs/review-publish.png"

export const Route = createFileRoute("/docs/campaign-setup")({
  component: CampaignSetup,
})

function CampaignSetup() {
  return (
    <div className="mx-auto max-w-prose">
      <DocsH2>Campaign Setup</DocsH2>
      <br />
      <p>
        Now that you are a member of the team, you will be able to automatically
        add your own fundraiser to the overall campaign!
      </p>
      <ol className="list-disc pl-10">
        <li>Ensure you are logged into your Tiltify account, then click </li>
        <a
          href="https://start.tiltify.com?supportingFactId=34a3bb09-ed1e-4930-9f0b-348723ad829d"
          rel="noreferrer"
          target="_blank"
        >
          this link
        </a>
        .
        <li>
          Click <TutorialText>Skip with Quick Start</TutorialText> to choose how
          you will share the campaign with donors.
        </li>
        <li>
          Select <TutorialText>Sharing on Social</TutorialText> and{" "}
          <TutorialText>Live Streaming</TutorialText>.
        </li>
        <li>
          <TutorialText>Confirm</TutorialText> your choice
        </li>
        <li>
          Select <TutorialText>No</TutorialText> when it suggests to allow other
          creators to support your fundraising effort. They will already be
          following these same steps to support the{" "}
          <PrideText>Pride With Friends</PrideText> campaign. It should look
          like the below image.
        </li>
      </ol>
      <br />
      <Image
        alt="Create campaign wizard demonstrating the correct selections"
        className="place-self-center"
        height={500}
        layout="constrained"
        src={createCampaign}
        width={400}
      />
      <br />
      <p>
        After confirming, you will be offered an opportunity to edit a couple
        more details.
      </p>
      <br />
      <ol className="list-disc pl-10">
        <li>
          Please edit the <TutorialText>Campaign name</TutorialText> to clarify
          that it is a <PrideText>Pride With Friends</PrideText> fundraiser.
          Most other participants will name it
          <ExampleText>Pride With Friends 2026 [YOURNAME]</ExampleText>).
        </li>
        <li>
          Feel free to add your own description in{" "}
          <TutorialText>About your campaign</TutorialText>, but ensure that the
          Mermaids charity we are supporting is mentioned!
        </li>
        <li>
          Set the <TutorialText>Goal</TutorialText> to any value you feel is
          both comfortable and achievable.
        </li>
        <li>
          You may now <TutorialText>Save & publish</TutorialText> to officially
          launch your <PrideText>Pride With Friends</PrideText> fundraiser!
        </li>
      </ol>
      <br />
      <Image
        alt="Final details editor before publishing"
        className="place-self-center"
        layout="fullWidth"
        // FIXME: This image needs to change the campaign name for demonstration
        src={reviewPublish}
      />
      <br />
      <p>
        You will now be at the Campaign Dashboard for{" "}
        <PrideText>Pride With Friends</PrideText>. This is where you may edit
        additional details of the campaign to increase the chance of reaching
        your donation goal.
        {/* TODO: Update this with a link to next steps, such as editing incentives or sharing campaign/dono links */}
      </p>
    </div>
  )
}
