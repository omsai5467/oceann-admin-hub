import { useState } from "react"
import { Search, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

interface AccessControlModalProps {
  isOpen: boolean
  onClose: () => void
  user: any
}

const menuPermissions = [
  "Email", "Send New Message", "Delete Email", "Reply", "Reply All", "Forward Message", "Can See Message"
]

export function AccessControlModal({ isOpen, onClose, user }: AccessControlModalProps) {
  const [permissions, setPermissions] = useState<{[key: string]: boolean}>({
    "Email": true,
    "Send New Message": true,
    "Delete Email": true,
    "Reply": true,
    "Reply All": true,
    "Forward Message": true,
    "Can See Message": true,
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handlePermissionChange = (permission: string, checked: boolean) => {
    setPermissions(prev => ({
      ...prev,
      [permission]: checked
    }))
  }

  const handleSave = async () => {
    setIsLoading(true)
    
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Access permissions updated successfully",
      })
      setIsLoading(false)
      onClose()
    }, 1000)
  }

  if (!user) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader className="pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-ocean-primary">Control Menu User Wise</DialogTitle>
            <Button variant="ocean" onClick={handleSave} disabled={isLoading} className="gap-2">
              <Save className="w-4 h-4" />
              {isLoading ? "Saving..." : "Save"}
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search Menu Name" className="pl-10" />
          </div>

          {/* Ocean Mail Section */}
          <div className="space-y-4">
            <div className="bg-ocean-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold text-center">
              Ocean Mail
            </div>

            {/* Permissions Table */}
            <div className="overflow-hidden border border-border rounded-lg">
              {/* Header */}
              <div className="bg-ocean-primary text-primary-foreground">
                <div className="grid grid-cols-8 gap-4 p-4 font-semibold text-sm">
                  <div>Email</div>
                  <div>Send New ...</div>
                  <div>Delete Em...</div>
                  <div>Reply</div>
                  <div>Reply All</div>
                  <div>Forward M...</div>
                  <div>Can See M...</div>
                  <div>More</div>
                </div>
              </div>

              {/* User Row */}
              <div className="bg-background border-t border-border">
                <div className="grid grid-cols-8 gap-4 p-4 items-center">
                  <div className="font-medium text-sm">fix@theoc...</div>
                  {menuPermissions.slice(1).map((permission) => (
                    <div key={permission} className="flex justify-center">
                      <input
                        type="checkbox"
                        checked={permissions[permission] || false}
                        onChange={(e) => handlePermissionChange(permission, e.target.checked)}
                        className="w-4 h-4 text-ocean-primary bg-gray-100 border-gray-300 rounded focus:ring-ocean-primary focus:ring-2"
                      />
                    </div>
                  ))}
                  <div className="flex justify-center">
                    <Button variant="ghost" size="sm">
                      ...
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <span>Rows per page: 10</span>
              <span className="mx-4">1-1 of 1</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" disabled>
                  ‹
                </Button>
                <Button variant="ghost" size="sm" disabled>
                  ›
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}