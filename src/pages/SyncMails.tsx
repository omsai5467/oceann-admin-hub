import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Edit, RefreshCw } from "lucide-react"

const mockEmailData = [
  {
    id: 1,
    emailLabel: "OPS",
    email: "ops@theoceann.ai",
    provider: "OUTLOOK",
    label: "CHARTERER",
    reAuthorize: true,
    grantedScopes: "Mail,Read"
  },
  {
    id: 2,
    emailLabel: "Broker",
    email: "brokers@theoceann.com",
    provider: "GOOGLE",
    label: "OPERATION",
    reAuthorize: true,
    grantedScopes: "Mail,Read"
  },
  {
    id: 3,
    emailLabel: "Fix",
    email: "fix@theoceann.ai",
    provider: "OUTLOOK",
    label: "FINANCE_OPERATION",
    reAuthorize: true,
    grantedScopes: "Mail,Read"
  },
  {
    id: 4,
    emailLabel: "",
    email: "mishra@theoceann.in",
    provider: "OUTLOOK",
    label: "N/A",
    reAuthorize: true,
    grantedScopes: "Mail,Read"
  },
  {
    id: 5,
    emailLabel: "",
    email: "sales@theoceann.ai",
    provider: "OUTLOOK",
    label: "N/A",
    reAuthorize: false,
    grantedScopes: "Mail,Read"
  }
]

const SyncMails = () => {
  const [showSyncModal, setShowSyncModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState("")
  const [selectedEmail, setSelectedEmail] = useState<any>(null)

  const handleSyncMail = () => {
    setShowSyncModal(true)
  }

  const handleProviderSubmit = () => {
    setShowSyncModal(false)
    // Here you would handle the provider selection logic
  }

  const handleEditEmail = (email: any) => {
    setSelectedEmail(email)
    setShowEditModal(true)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>🏠</span>
            <span>&gt;</span>
            <span>MAILS</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ocean" size="sm">My Portal</Button>
            <Button variant="ocean" size="sm">OceannMail</Button>
            <Button variant="ocean" size="sm">OceannVm</Button>
          </div>
        </div>
      </div>

      {/* Sync Emails Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Sync Emails</h1>
          <Button onClick={handleSyncMail} variant="ocean">
            Sync Mail
          </Button>
        </div>

        {/* Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-ocean-primary">
              <TableRow>
                <TableHead className="text-white font-medium">Email Label</TableHead>
                <TableHead className="text-white font-medium">Email</TableHead>
                <TableHead className="text-white font-medium">Email Provider</TableHead>
                <TableHead className="text-white font-medium">Label</TableHead>
                <TableHead className="text-white font-medium">Re-Authorize</TableHead>
                <TableHead className="text-white font-medium">Granted Scopes</TableHead>
                <TableHead className="text-white font-medium">Edit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockEmailData.map((item) => (
                <TableRow key={item.id} className={item.reAuthorize ? "bg-red-50" : ""}>
                  <TableCell className="font-medium">{item.emailLabel}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.provider}</TableCell>
                  <TableCell>{item.label}</TableCell>
                  <TableCell>
                    {item.reAuthorize ? (
                      <Badge variant="destructive" className="flex items-center gap-1">
                        <RefreshCw className="w-3 h-3" />
                        Re-Authorize
                      </Badge>
                    ) : (
                      <Badge variant="secondary">Re-Authorize</Badge>
                    )}
                  </TableCell>
                  <TableCell>{item.grantedScopes}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEditEmail(item)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
          <span>Rows per page: 10</span>
          <span>1-5 of 5</span>
          <Button variant="ghost" size="sm" disabled>{"<"}</Button>
          <Button variant="ghost" size="sm" disabled>{">"}</Button>
        </div>
      </div>

      {/* Sync Mails Modal */}
      <Dialog open={showSyncModal} onOpenChange={setShowSyncModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sync Mails</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-3">Choose Provider</h3>
              <RadioGroup value={selectedProvider} onValueChange={setSelectedProvider}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="outlook" id="outlook" />
                  <Label htmlFor="outlook">Outlook</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="google" id="google" />
                  <Label htmlFor="google">Google</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="custom" id="custom" />
                  <Label htmlFor="custom">Custom</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleProviderSubmit} variant="ocean">
                Submit
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Mail Information Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Mail Information</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {/* Authentication Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Authentication Information</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="email">Email :</Label>
                  <Input 
                    id="email" 
                    value={selectedEmail?.email || ""} 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="mailLabel">Mail Label</Label>
                  <Input 
                    id="mailLabel" 
                    value={selectedEmail?.emailLabel || ""} 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <Label htmlFor="chooseLabel">Choose Label ⓘ</Label>
                  <Input 
                    id="chooseLabel" 
                    value="Charterer" 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="timeRange">Select Time range</Label>
                  <Input 
                    id="timeRange" 
                    value="6 Months" 
                    className="mt-1"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Visibility - Visible to Global Tonnage and cargo data</Label>
                  <div className="flex items-center space-x-2">
                    <Switch id="visibility" defaultChecked />
                    <Label htmlFor="visibility">Yes</Label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    If You Enable This Option your Tonnage And cargo Data Will be 
                    Visible to Other Companies.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center space-x-2">
                  <Switch id="isProcess" defaultChecked />
                  <Label htmlFor="isProcess">Yes</Label>
                </div>
                <p className="text-xs text-blue-600 mt-1">
                  By selecting "Is Process" as YES, you are consenting to the utilization 
                  and processing of this email for subsequent parsing purposes.
                </p>
              </div>
              <div className="mt-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" defaultChecked />
                  <Label htmlFor="terms" className="text-sm">
                    Agree to <span className="text-blue-600 underline">Terms & condition</span>
                  </Label>
                </div>
              </div>
            </div>

            {/* Authorized Permission from Outlook */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Authorized Permission from Outlook</h3>
              <div className="grid grid-cols-4 gap-8">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label>Profile</Label>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label>Email Read/Write</Label>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label>Email Shared</Label>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label>Email Send</Label>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label>Notification Read/Write</Label>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label>User Read</Label>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button variant="ocean">Submit</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SyncMails