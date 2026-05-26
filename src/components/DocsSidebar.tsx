import { Link } from "@tanstack/react-router"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
} from "#/components/ui/sidebar"

const groups = [
  {
    items: [
      { label: "Join the team", to: "/docs/join-the-team" },
      {
        label: "Campaign setup",
        to: "/docs/campaign-setup",
      },
    ],
    label: "Campaign",
  },
  {
    items: [
      { label: "Donation tracker", to: "/docs/overlay-setup" },
      {
        label: "Campaign tracker",
        to: "/docs/campaign-tracker",
      },
    ],
    label: "Overlay",
  },
  {
    items: [
      { label: "Chat commands", to: "/docs/bot-setup" },
      {
        hash: "streamelements",
        label: "StreamElements",
        to: "/docs/bot-setup",
      },
      { hash: "nightbot", label: "Nightbot", to: "/docs/bot-setup" },
      { hash: "streamlabs", label: "Streamlabs", to: "/docs/bot-setup" },
    ],
    label: "Bot",
  },
  {
    items: [
      { label: "Links", to: "/docs/link-setup" },
      { label: "Panels", to: "/docs/panel-setup" },
    ],
    label: "Donations",
  },
]

export function DocsSidebar() {
  return (
    <Sidebar className="fixed top-16 h-svh">
      <SidebarContent className="pl-3">
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarMenuItem className="list-none">
            <SidebarMenuButton asChild>
              <Link
                activeProps={{ className: "font-bold" }}
                className="text-current!"
                to="/docs/setup"
              >
                Home
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>
        {groups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            {group.items.map((item) => (
              <SidebarMenuItem className="list-none" key={item.to}>
                <SidebarMenuButton asChild>
                  <Link
                    activeOptions={{ includeHash: true }}
                    activeProps={{
                      className: "font-bold",
                    }}
                    // FIXME: This `!important` feels wrong but I don't want the sidebar items to be styled like links
                    className="text-current!"
                    hash={item.hash}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
