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
    items: [{ label: "Home", splat: "setup" }],
    label: "Menu",
  },
  {
    items: [
      { label: "Join the team", splat: "join-the-team" },
      { label: "Campaign setup", splat: "campaign-setup" },
    ],
    label: "Campaign",
  },
  {
    items: [{ label: "Donation tracker", splat: "overlay-setup" }],
    label: "Overlay",
  },
  {
    items: [
      { label: "Chatbot commands", splat: "chatbot-commands" },
      { label: "StreamElements", splat: "streamelements" },
      { label: "Nightbot", splat: "nightbot" },
      { label: "Streamlabs", splat: "streamlabs" },
    ],
    label: "Bot",
  },
  {
    items: [
      { label: "Links", splat: "link-setup" },
      { label: "Panels", splat: "panel-setup" },
    ],
    label: "Donations",
  },
  {
    items: [{ label: "Challenge runs", splat: "challenge-runs" }],
    label: "Challenges",
  },
]

export function DocsSidebar({
  className,
  ...props
}: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className={cn("fixed top-16 h-svh", className)}>
      <div className="mt-5">
        <SidebarContent className="pl-3">
          {groups.map(({ items, label }) => (
            <SidebarGroup key={label}>
              <SidebarGroupLabel>{label}</SidebarGroupLabel>
              {items.map(({ label, splat }) => (
                <SidebarMenuItem className="list-none" key={label}>
                  <SidebarMenuButton asChild>
                    <Link
                      activeProps={{
                        className: "font-bold",
                      }}
                      // HACK: This `!important` feels wrong but I don't want the sidebar items to be styled like links
                      className="text-current!"
                      params={{ _splat: splat }}
                      to="/docs/$"
                    >
                      {label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarGroup>
          ))}
        </SidebarContent>
      </div>
    </Sidebar>
  )
}
