import { createFileRoute, Outlet } from "@tanstack/react-router"
import { DocsSidebar } from "#/components/DocsSidebar"
import { SidebarProvider, SidebarTrigger } from "#/components/ui/sidebar"

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
})

function DocsLayout() {
  return (
    <SidebarProvider>
      <DocsSidebar collapsible="icon" />
      {/* HACK: This is manually positioned inside the header. It works fine, but it's fragile. */}
      <SidebarTrigger className="fixed inset-s-2 top-8 z-60 -translate-y-1/2" />
      <Outlet />
    </SidebarProvider>
  )
}
