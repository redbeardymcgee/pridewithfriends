import { createFileRoute } from "@tanstack/react-router"
import { BotSetup } from "./BotSetup"
import { CampaignSetup } from "./CampaignSetup"
import { CampaignTracker } from "./CampaignTracker"
import { LinkSetup } from "./LinkSetup"
import { OverlaySetup } from "./OverlaySetup"
import { PanelSetup } from "./PanelSetup"

export const Route = createFileRoute("/docs/setup")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <CampaignSetup />
      <br />
      <OverlaySetup />
      <br />
      <CampaignTracker />
      <br />
      <BotSetup />
      <br />
      <LinkSetup />
      <br />
      <PanelSetup />
    </div>
  )
}
