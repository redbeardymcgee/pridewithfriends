import { Link } from "@tanstack/react-router"
import type { ComponentProps } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
} from "#/components/ui/sidebar"
import { cn } from "#/lib/utils"

const groups = [
  {
    items: [{ label: "Home", to: "/docs/setup" }],
    label: "Menu",
  },
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
    items: [{ label: "Donation tracker", to: "/docs/overlay-setup" }],
    label: "Overlay",
  },
  {
    items: [
      { label: "Chatbot commands", to: "/docs/chatbot-commands" },
      { label: "StreamElements", to: "/docs/streamelements" },
      { label: "Nightbot", to: "/docs/nightbot" },
      { label: "Streamlabs", to: "/docs/streamlabs" },
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
  {
    items: [{ label: "Challenge runs", to: "/docs/challenge-runs" }],
    label: "Challenges",
  },
]

export function DocsSidebar({
  className,
  ...props
}: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className={cn("fixed top-16 h-svh", className)}>
      <SidebarContent className="pl-3">
        {groups.map(({ items, label }) => (
          <SidebarGroup key={label}>
            <SidebarGroupLabel>{label}</SidebarGroupLabel>
            {items.map(({ label, to }) => (
              <SidebarMenuItem className="list-none" key={label}>
                <SidebarMenuButton asChild>
                  <Link
                    activeProps={{
                      className: "font-bold",
                    }}
                    // HACK: This `!important` feels wrong but I don't want the sidebar items to be styled like links
                    className="text-current!"
                    to={to}
                  >
                    {label}
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
