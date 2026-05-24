import { createFileRoute, Outlet } from "@tanstack/react-router"
import { DocsSidebar } from "#/components/DocsSidebar"
import { SidebarProvider } from "#/components/ui/sidebar"

export const Route = createFileRoute("/docs")({
  component: DocsLayoutComponent,
})

function DocsLayoutComponent() {
  return (
    <SidebarProvider>
      <DocsSidebar />
      <Outlet />
    </SidebarProvider>
  )
}
