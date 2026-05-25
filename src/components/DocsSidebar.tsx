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
      {
        hash: "campaign-setup",
        label: "Campaign setup",
        to: ".",
      },
    ],
    label: "Campaign",
  },
  {
    items: [
      { hash: "overlay-setup", label: "Donation tracker", to: "." },
      {
        hash: "campaign-tracker",
        label: "Campaign tracker",
        to: ".",
      },
    ],
    label: "Overlay",
  },
  {
    items: [
      { hash: "bot-setup", label: "Chat commands", to: "." },
      { hash: "streamelements", label: "StreamElements", to: "." },
      { hash: "nightbot", label: "Nightbot", to: "." },
      { hash: "streamlabs", label: "Streamlabs", to: "." },
    ],
    label: "Bot",
  },
  {
    items: [
      { hash: "donation-link-setup", label: "Links", to: "." },
      { hash: "donation-panel-setup", label: "Panels", to: "." },
    ],
    label: "Donations",
  },
]

export function DocsSidebar() {
  return (
    <Sidebar className="fixed top-16 h-svh">
      <SidebarContent className="pl-3">
        {groups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            {group.items.map((item) => (
              <SidebarMenuItem className="list-none" key={item.hash}>
                <SidebarMenuButton asChild>
                  <Link
                    activeOptions={{ includeHash: true }}
                    activeProps={{
                      className: "font-bold",
                    }}
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
