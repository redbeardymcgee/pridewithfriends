import { Link } from "@tanstack/react-router"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "#/components/ui/sidebar"

export function DocsSidebar() {
  return (
    // FIXME:The height of this should be dynamically calculated. Currently the
    // header is in front of the sidebar and the footer is behind.
    // This className overrides the `sidebar-container` data-slot.
    <Sidebar className="fixed inset-y-16 h-fit" collapsible="offcanvas">
      {/* <SidebarHeader className="mt-16"> */}
      <SidebarHeader>
        <p>hello world</p>
      </SidebarHeader>
      <SidebarContent className="pl-3">
        <SidebarGroup>
          <SidebarGroupLabel>Campaign</SidebarGroupLabel>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              {/* FIXME: All these links are styled like links instead of menu items */}
              <Link hash="campaign-setup" to="/docs/setup">
                Create your campaign
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Overlay</SidebarGroupLabel>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link hash="overlay-setup" to="/docs/setup">
                Donation tracker
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link hash="campaign-tracker" to="/docs/setup">
                Campaign tracker
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Bot</SidebarGroupLabel>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link hash="bot-setup" to="/docs/setup">
                Chat commands
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link hash="streamelements" to="/docs/setup">
                StreamElements
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link hash="nightbot" to="/docs/setup">
                Nightbot
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link hash="Streamlabs" to="/docs/setup">
                Streamlabs
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Donations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link hash="donation-link-setup" to="/docs/setup">
                  Links
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link hash="donation-panel-setup" to="/docs/setup">
                  Panels
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p>goodbye world</p>
      </SidebarFooter>
    </Sidebar>
  )
}
