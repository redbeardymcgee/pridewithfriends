import { Link } from "@tanstack/react-router"
import {
  Bot,
  Flag,
  HeartHandshake,
  Home,
  LayoutGrid,
  Link as LinkIcon,
  Smile,
  TerminalSquare,
  Trophy,
  UserRoundPlus,
} from "lucide-react"
import type { ComponentProps } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "#/components/ui/sidebar"
import { cn } from "#/lib/utils"

interface SidebarItem {
  label: string
  splat: string
  icon: React.ElementType
}

interface SidebarGroupType {
  label: string
  items: SidebarItem[]
}

const groups: SidebarGroupType[] = [
  {
    items: [{ icon: Home, label: "Home", splat: "setup" }],
    label: "Menu",
  },
  {
    items: [
      {
        icon: UserRoundPlus,
        label: "Join the team",
        splat: "join-the-team",
      },
      { icon: Flag, label: "Campaign setup", splat: "campaign-setup" },
    ],
    label: "Campaign",
  },
  {
    items: [
      {
        icon: HeartHandshake,
        label: "Donation tracker",
        splat: "overlay-setup",
      },
    ],
    label: "Overlay",
  },
  {
    items: [{ icon: Smile, label: "Emotes", splat: "emotes" }],
    label: "Emotes",
  },
  {
    items: [
      {
        icon: TerminalSquare,
        label: "Chatbot commands",
        splat: "chatbot-commands",
      },
      { icon: Bot, label: "StreamElements", splat: "streamelements" },
      { icon: Bot, label: "Nightbot", splat: "nightbot" },
      { icon: Bot, label: "Streamlabs", splat: "streamlabs" },
    ],
    label: "Bot",
  },
  {
    items: [
      { icon: LinkIcon, label: "Links", splat: "link-setup" },
      { icon: LayoutGrid, label: "Panels", splat: "panel-setup" },
    ],
    label: "Donations",
  },
  {
    items: [{ icon: Trophy, label: "Challenge runs", splat: "challenge-runs" }],
    label: "Challenges",
  },
]

export function DocsSidebar({
  className,
  ...props
}: ComponentProps<typeof Sidebar>) {
  const { isMobile, setOpenMobile } = useSidebar()
  return (
    <Sidebar
      {...props}
      className={cn("top-16 h-[calc(100svh-4rem)]", className)}
    >
      <div className="mt-5">
        <SidebarContent className="pl-3">
          {groups.map(({ items, label }) => (
            <SidebarGroup key={label}>
              <SidebarGroupLabel>{label}</SidebarGroupLabel>
              {items.map(({ icon: Icon, label, splat }) => (
                <SidebarMenuItem className="list-none" key={label}>
                  <SidebarMenuButton
                    asChild
                    onClick={() => {
                      isMobile && setOpenMobile(false)
                    }}
                  >
                    <Link
                      activeProps={{
                        className: "font-bold",
                      }}
                      className="px-4 text-slate-300!"
                      params={{ _splat: splat }}
                      to="/docs/$"
                    >
                      <Icon className="inline-block" />
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
