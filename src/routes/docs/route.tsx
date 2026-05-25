import { createFileRoute, Outlet } from "@tanstack/react-router"
import { DocsSidebar } from "#/components/DocsSidebar"
import { SidebarProvider } from "#/components/ui/sidebar"

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
})

function DocsLayout() {
  return (
    <SidebarProvider>
      <DocsSidebar />
      <Outlet />
    </SidebarProvider>
  )
}
