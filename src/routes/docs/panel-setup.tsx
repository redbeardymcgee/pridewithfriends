import { createFileRoute, Link } from "@tanstack/react-router"
import { DocsH2, ExampleText, TutorialText } from "#/components/typography"

export const Route = createFileRoute("/docs/panel-setup")({
  component: PanelSetup,
})

function PanelSetup() {
  return (
    <div className="mx-auto max-w-prose">
      <DocsH2>Donation Panel</DocsH2>
      <ol className="list-decimal pl-10">
        <li>
          From the Twitch homepage, click your profile icon in the top right to
          open the options menu.
        </li>
        <li>
          Click <TutorialText>Channel</TutorialText> to go to your Twitch
          channel.
        </li>
        <li>
          Click <TutorialText>About</TutorialText> under the video player
        </li>
        <li>
          Click <TutorialText>Edit Panel</TutorialText> under{" "}
          <TutorialText>About Me</TutorialText>
        </li>
        <li>Click the large gray plus symbol</li>
        <li>Click add a text or image panel</li>
        <li>
          Click <TutorialText>Add Image</TutorialText>
        </li>
        <li>TODO: PUT IMAGE FOR DOWNLOAD HERE</li>
        <li>
          Fill out the description with a message similar to this, edited to
          your liking:
          <p>
            <ExampleText>
              Donate to the Trevor Project directly by clicking this panel!
              Donations are non-refundable, but deeply appreciated!
            </ExampleText>
          </p>
        </li>
        <li>
          Fill in the <TutorialText>Image Links to</TutorialText> box with your{" "}
          <Link to="/docs/link-setup">donation URL</Link>
        </li>
        <li>
          Click <TutorialText>Submit</TutorialText> and you're done!
        </li>
      </ol>
    </div>
  )
}
