import { createFileRoute } from "@tanstack/react-router"
import { ExampleText, TutorialText } from "#/components/typography"

export const Route = createFileRoute("/docs/link-setup")({
  component: LinkSetup,
})

export function LinkSetup() {
  return (
    <div className="m-5">
      <h2 className="text-cyan-300 text-xl">Set up your Donation Links!</h2>
      <ol className="list-decimal pl-10">
        <li>
          Visit your campaign dashboard by at{" "}
          <a
            href="https://app.tiltify.com/hub"
            rel="noreferrer"
            target="_blank"
          >
            https://app.tiltify.com/hub
          </a>{" "}
          or clicking the menu on the top right of the Tiltify page.
        </li>
        <li>
          Click the campaign you created earlier{" "}
          <ExampleText>Pride With Friends 2025 [YOURNAME]</ExampleText>
        </li>
        <li>
          Use the share or copy buttons to get a valid link
          <ul className="list-inside list-disc pl-10">
            <li>
              <TutorialText>Share</TutorialText>{" "}
            </li>
            <li>
              <TutorialText>Copy Donate URL</TutorialText>
            </li>
            <li>
              <TutorialText>Copy Campaign URL</TutorialText>.
            </li>
          </ul>
        </li>
        <br />
        <li>
          Using your Twitch channel chatbot of choice, add or edit your{" "}
          <code>!donate</code>/<code>!pwf</code>/<code>!pride</code> command to
          include the donate URL copied from the{" "}
          <TutorialText>Share</TutorialText> panel.
        </li>
      </ol>
    </div>
  )
}
