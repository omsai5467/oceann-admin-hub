import { useState } from "react"
import { Search, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

const userRoles = ["Admin", "Operation", "Broker", "HOD", "Finance", "Supplier", "Port Agent", "Charterer"]

const oceannVmMenus = [
  "Chartering", "chat-bot", "Operation", "Finance", "Oceann Zero", "Oceann Mail", "Setting"
]

const oceannMailMenus = [
  "Dashboard", "Compose", "Mails", "Templates", "My Data Insight", "Market Insight", "Global Trade Flow", "Baltic Exchange", "Port Congestion"
]

const mobileAppModules = [
  { name: "Operation", modules: ["GLOBAL-CARGO-TONNAGE-DATA", "Intelligent-Tools", "MARKET-INSIGHT", "DASHBOARD", "NET-PASS-TOOLS", "EMAILS", "VOYAGE-ESTIMATE"] },
  { name: "Broker", modules: ["Intelligent-Tools", "DASHBOARD"] },
  { name: "HOD", modules: [] },
  { name: "Finance", modules: ["MARKET-INSIGHT", "DASHBOARD", "NET-PASS-TOOLS", "VOYAGE-ESTIMATE", "GLOBAL-CARGO-TONNAGE-DATA", "Intelligent-Tools"] },
  { name: "Supplier", modules: ["Intelligent-Tools"] },
  { name: "Port Agent", modules: ["MARKET-INSIGHT"] },
  { name: "admin", modules: ["MARKET-INSIGHT"] },
  { name: "Charterer", modules: ["Intelligent-Tools", "EMAILS", "VOYAGE-ESTIMATE", "GLOBAL-CARGO-TONNAGE-DATA", "MARKET-INSIGHT", "DASHBOARD", "NET-PASS-TOOLS"] }
]

const AccessControl = () => {
  const [activeTab, setActiveTab] = useState("oceann-vm")
  const [searchTerm, setSearchTerm] = useState("")
  const [permissions, setPermissions] = useState<{[key: string]: {[key: string]: boolean}}>({})
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handlePermissionChange = (menu: string, role: string, checked: boolean) => {
    setPermissions(prev => ({
      ...prev,
      [menu]: {
        ...prev[menu],
        [role]: checked
      }
    }))
  }

  const getPermission = (menu: string, role: string) => {
    return permissions[menu]?.[role] || false
  }

  const handleSaveControls = async () => {
    setIsLoading(true)
    
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Access controls updated successfully",
      })
      setIsLoading(false)
    }, 1000)
  }

  const renderPermissionTable = (menus: string[], title: string) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-ocean-primary">{title}</CardTitle>
        <Button variant="ocean" onClick={handleSaveControls} disabled={isLoading} className="gap-2">
          <Save className="w-4 h-4" />
          {isLoading ? "Saving..." : "Save Controls"}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-ocean-primary text-primary-foreground">
                  <th className="p-3 text-left font-semibold">User Role Type</th>
                  <th className="p-3 text-left font-semibold">Menu</th>
                  {userRoles.map(role => (
                    <th key={role} className="p-3 text-center font-semibold min-w-[100px]">{role}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {menus.filter(menu => 
                  menu.toLowerCase().includes(searchTerm.toLowerCase())
                ).map((menu, index) => (
                  <tr key={menu} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="p-3">
                      <span className="text-sm text-muted-foreground">›</span>
                    </td>
                    <td className="p-3 font-medium">{menu}</td>
                    {userRoles.map(role => (
                      <td key={role} className="p-3 text-center">
                        <input
                          type="checkbox"
                          checked={getPermission(menu, role)}
                          onChange={(e) => handlePermissionChange(menu, role, e.target.checked)}
                          className="w-4 h-4 text-ocean-primary bg-gray-100 border-gray-300 rounded focus:ring-ocean-primary focus:ring-2"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderMobileAppTable = () => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-ocean-primary">Mobile App Access Control</CardTitle>
        <Button variant="ocean" onClick={handleSaveControls} disabled={isLoading} className="gap-2">
          <Save className="w-4 h-4" />
          {isLoading ? "Saving..." : "Save Controls"}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-ocean-primary text-primary-foreground">
                  <th className="p-3 text-left font-semibold">User Role Type</th>
                  <th className="p-3 text-left font-semibold">Role Name</th>
                  <th className="p-3 text-left font-semibold">Assigned Modules</th>
                </tr>
              </thead>
              <tbody>
                {mobileAppModules.filter(item => 
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                ).map((item, index) => (
                  <tr key={item.name} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="p-3">
                      <span className="text-sm text-muted-foreground">›</span>
                    </td>
                    <td className="p-3 font-medium">{item.name}</td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {item.modules.map(module => (
                          <span 
                            key={module}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-ocean-light text-ocean-primary border border-ocean-primary/20"
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Access Control</h1>
        <p className="text-muted-foreground">Manage user permissions and access controls</p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="oceann-vm">OceannVm Menu</TabsTrigger>
          <TabsTrigger value="oceann-mail">OceannMail Menu</TabsTrigger>
          <TabsTrigger value="mobile-app">Mobile App Access Control</TabsTrigger>
        </TabsList>

        <TabsContent value="oceann-vm" className="mt-6">
          {renderPermissionTable(oceannVmMenus, "OceannVm Menu Access Control")}
        </TabsContent>

        <TabsContent value="oceann-mail" className="mt-6">
          {renderPermissionTable(oceannMailMenus, "OceannMail Menu Access Control")}
        </TabsContent>

        <TabsContent value="mobile-app" className="mt-6">
          {renderMobileAppTable()}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AccessControl