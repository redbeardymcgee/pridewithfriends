import { createFileRoute, Outlet } from "@tanstack/react-router"
import { DocsSidebar } from "#/components/DocsSidebar"
import { SidebarProvider, SidebarTrigger } from "#/components/ui/sidebar"

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
})

function DocsLayout() {
  return (
    <SidebarProvider>
      <DocsSidebar />
      <SidebarTrigger className="fixed top-16 left-2 z-60" />
      <Outlet />
    </SidebarProvider>
  )
}
