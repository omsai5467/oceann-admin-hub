import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  User,
  Users,
  Shield,
  Mail,
  Settings,
  BarChart3,
  Calendar,
  FileText,
  CreditCard,
  HeadphonesIcon,
  Globe,
  RefreshCw,
  Database,
  Phone,
  ChevronRight,
  LogOut
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import logoImage from "@/assets/logo.jpg"

const menuItems = [
  { title: "Profile", url: "/admin/profile", icon: User },
  { title: "Manage Users", url: "/admin/users", icon: Users },
  { title: "Access Control", url: "/admin/access-control", icon: Shield },
  { title: "Sync mails", url: "/admin/sync-mails", icon: Mail },
  { title: "Sync group", url: "/admin/sync-group", icon: Users },
  { title: "Sync Contact", url: "/admin/sync-contact", icon: Database },
  { title: "Sync Calendar", url: "/admin/sync-calendar", icon: Calendar },
  { title: "Smtp Config", url: "/admin/smtp-config", icon: Settings },
  { title: "User Subscriptions", url: "/admin/subscriptions", icon: CreditCard },
  { title: "Payment History", url: "/admin/payments", icon: BarChart3 },
  { title: "Customers Support", url: "/admin/support", icon: HeadphonesIcon },
]

export function AdminSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-ocean-light text-ocean-primary font-medium" : "hover:bg-ocean-muted text-muted-foreground hover:text-foreground"

  return (
    <Sidebar
      className={collapsed ? "w-14" : "w-60"}
      collapsible="icon"
    >
      <SidebarContent className="bg-background border-r border-border">
        {/* Logo Section */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="TheOceann Logo" 
              className="w-8 h-8 rounded-full"
            />
            {!collapsed && (
              <div>
                <h2 className="text-ocean-primary font-bold text-lg">TheOceann</h2>
                <p className="text-xs text-muted-foreground">Maritime is our kingdom</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span>{item.title}</span>}
                      {!collapsed && <ChevronRight className="w-4 h-4 ml-auto opacity-50" />}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Administrator Section */}
        <div className="mt-auto p-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
              <LogOut className="w-4 h-4 text-destructive-foreground" />
            </div>
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-sm font-medium">Administrator</span>
                <button className="text-xs text-muted-foreground hover:text-foreground text-left">
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Toggle */}
        <SidebarTrigger className="absolute top-4 -right-3 bg-background border border-border rounded-full w-6 h-6 flex items-center justify-center hover:bg-ocean-muted" />
      </SidebarContent>
    </Sidebar>
  )
}