import { createFileRoute, Link } from "@tanstack/react-router"
import { DocsH2 } from "#/components/typography"

export const Route = createFileRoute("/docs/setup")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="m-5">
      <DocsH2>Streamer Setup</DocsH2>
      <br />
      <p>
        Thank you so much for joining Pride With Friends! Click a section in the
        sidebar on the left to learn how to configure your stream software to
        provide the best experience for your viewers!
      </p>
      <br />
      <p>
        Not sure where to begin? Try{" "}
        <Link to="/docs/campaign-setup">this page</Link>
      </p>
    </div>
  )
}
