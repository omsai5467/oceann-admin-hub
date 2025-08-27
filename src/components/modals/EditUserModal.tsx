import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

interface EditUserModalProps {
  isOpen: boolean
  onClose: () => void
  user: any
}

export function EditUserModal({ isOpen, onClose, user }: EditUserModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    userType: "",
    password: "",
    assignEmail: "",
    status: true
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.firstName || "",
        email: user.email || "",
        role: user.role || "",
        userType: user.userType?.[0] || "",
        password: user.password || "",
        assignEmail: user.assignedEmails || "",
        status: user.status === "Active"
      })
    }
  }, [user])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      toast({
        title: "Success",
        description: "User updated successfully",
      })
      setIsLoading(false)
      onClose()
    }, 1000)
  }

  if (!user) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-ocean-primary">Edit User</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="role">Role</Label>
            <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="HOD">HOD</SelectItem>
                <SelectItem value="Operation">Operation</SelectItem>
                <SelectItem value="Charterer">Charterer</SelectItem>
                <SelectItem value="Broker">Broker</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="userType">User Type</Label>
            <Select value={formData.userType} onValueChange={(value) => setFormData({...formData, userType: value})}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="OceannMail">OceannMail</SelectItem>
                <SelectItem value="OceannVM">OceannVM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="assignEmail">Assign Email</Label>
            <div className="mt-1 flex items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                fix@theoceann.ai
                <button type="button" className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="status">Status</Label>
            <div className="flex items-center gap-2">
              <Switch
                id="status"
                checked={formData.status}
                onCheckedChange={(checked) => setFormData({...formData, status: checked})}
              />
              <span className={`text-sm font-medium ${formData.status ? 'text-success' : 'text-muted-foreground'}`}>
                {formData.status ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={onClose} type="button">
              Cancel
            </Button>
            <Button variant="ocean" type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}