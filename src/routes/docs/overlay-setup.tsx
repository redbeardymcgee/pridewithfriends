import { createFileRoute } from "@tanstack/react-router"
import { TutorialText } from "#/components/typography"

export const Route = createFileRoute("/docs/overlay-setup")({
  component: RouteComponent,
})

export function RouteComponent() {
  return (
    <div className="m-5">
      <h2 className="text-cyan-300 text-xl">Overlay Setup</h2>
      <p>
        Once you have completed the above steps, setup the tracker and overlay.
      </p>
      <br />
      <ol className="list-decimal pl-10">
        <li>
          From the published campaign dashboard, click{" "}
          <TutorialText>Overlays</TutorialText> on the top bar
        </li>
        <li>Create new overlay</li>
        <li>
          Choose <TutorialText>Blank Slate</TutorialText> to start from an empty
          overlay
        </li>
        <li>
          Choose <TutorialText>The Default</TutorialText> to start with a basic
          overlay that already includes the{" "}
          <TutorialText>Alert Box</TutorialText> and{" "}
          <TutorialText>Event List</TutorialText> and a QR code for mobile users
        </li>
        <li>
          Use the editor to add and remove widgets, edit colors, add sounds,
          move them around and more
        </li>
        <li>Save the changes with the button above the overlay preview</li>
        <li>Copy the overlay URL</li>
        <li>
          Add the overlay as a <TutorialText>Browser Source</TutorialText> in
          OBS
        </li>
      </ol>
      <br />
      <p>
        You can edit this overlay on this page at any time, even while
        broadcasting. If you want to control the placement of each part of your
        overlay in OBS:
      </p>
      <br />
      <ul className="list-disc pl-10">
        <li>
          Use the steps above, starting with the{" "}
          <TutorialText>Blank Slate</TutorialText>.
        </li>
        <li>
          Add <strong>one</strong> overlay element, such as the{" "}
          <TutorialText>Alert Box</TutorialText> or{" "}
          <TutorialText>Event List</TutorialText>
        </li>
        <li>Edit it to your needs</li>
        <li>
          Save it, copy the overlay url, and add it as a browser source to OBS
        </li>
        <li>
          Repeat for <strong>each</strong> overlay element
        </li>
        <li>
          Now you can control each element of the overlay individually in OBS
        </li>
      </ul>
    </div>
  )
}
