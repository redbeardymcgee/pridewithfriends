import { createFileRoute, Outlet } from "@tanstack/react-router"
import { DocsSidebar } from "#/components/DocsSidebar"
import { SidebarProvider, SidebarTrigger } from "#/components/ui/sidebar"

export const Route = createFileRoute("/docs")({
  component: DocsLayoutComponent,
})

function DocsLayoutComponent() {
  return (
    <SidebarProvider>
      <DocsSidebar />
      {/* FIXME: This needs to scroll with the content */}
      <SidebarTrigger />
      <div>
        <Outlet />
      </div>
    </SidebarProvider>
  )
}
