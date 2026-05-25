import { createFileRoute, Link } from "@tanstack/react-router"
import { TutorialText, WarningText } from "#/components/typography"

export const Route = createFileRoute("/docs/campaign-tracker")({
  component: CampaignTracker,
})

function CampaignTracker() {
  return (
    <div className="m-5">
      <h2 className="text-cyan-300 text-xl">
        <Link to="/docs/campaign-tracker">Campaign Tracker</Link>
      </h2>
      {/* TODO: Provide more direct instructions */}
      <p>
        For those of you who <strong>are</strong> streaming, but do not want to
        implement your own individual campaign and overlays, you may use this
        overlay as a <TutorialText>Browser Source</TutorialText> in OBS! Just
        paste this into the <TutorialText>Browser Source</TutorialText> and set
        it to <code>1920x1080</code> resolution
      </p>
      <br />
      <a
        href="https://overlays.tiltify.com/1IZ_AXFieYk0RtJOGKsXRJrXD4m7BgcS"
        rel="noreferrer"
        target="_blank"
      >
        Overlay
      </a>{" "}
      <WarningText>WARNING:</WarningText> Old link!
      <br />
      <br />
      <p>
        This overlay shows the total progress of the{" "}
        <strong>entire campaign</strong>. It is <strong>not suitable</strong>{" "}
        for streamers who have configured their individual campaign and overlays
        for the event. For the rest of you who are streaming for the event but
        not setting up your own overlays, you can use this to let your viewers
        track the total progress live as they hang out with you.
      </p>
    </div>
  )
}
