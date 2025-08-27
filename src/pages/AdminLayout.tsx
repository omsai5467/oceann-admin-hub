import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AdminSidebar } from "@/components/AdminSidebar"

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <main className="flex-1 flex flex-col">
          {/* Global header with sidebar trigger */}
          <header className="h-14 flex items-center border-b border-border bg-background px-4">
            <SidebarTrigger className="lg:hidden" />
          </header>
          
          {/* Page content */}
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default AdminLayout