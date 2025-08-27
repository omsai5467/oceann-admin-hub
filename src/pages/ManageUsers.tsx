import { useState } from "react"
import { Search, Plus, Edit, Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { EditUserModal } from "@/components/modals/EditUserModal"
import { AccessControlModal } from "@/components/modals/AccessControlModal"

const users = [
  {
    id: 1,
    firstName: "hod",
    email: "hod@yopmail.com",
    phone: "12388478383",
    assignedEmails: "fix@theoceann...",
    userType: ["OceannMail"],
    status: "Active",
    password: "••••••••••",
    role: "HOD"
  },
  {
    id: 2,
    firstName: "manish",
    email: "jeetendra@theoc...",
    phone: "9546076895",
    assignedEmails: "fix@theoceann...",
    userType: ["OceannMail"],
    status: "Active",
    password: "••••••••••",
    role: "HOD"
  },
  {
    id: 3,
    firstName: "arvind",
    email: "xyz1@yopmail.com",
    phone: "7656746767",
    assignedEmails: "fix@theoceann...",
    userType: ["OceannVM", "OceannMail"],
    status: "Active",
    password: "••••••••••",
    role: "admin"
  },
  {
    id: 4,
    firstName: "himanshu Kumar",
    email: "himanshu@theoc...",
    phone: "8975544646",
    assignedEmails: "fix@theoceann...",
    userType: ["OceannMail"],
    status: "Active",
    password: "••••••••••",
    role: "Charterer"
  },
  {
    id: 5,
    firstName: "AMIT SHARMA",
    email: "amitsharma@the...",
    phone: "9546074082",
    assignedEmails: "fix@theoceann...",
    userType: ["OceannMail"],
    status: "Active",
    password: "••••••••••",
    role: "admin"
  },
  {
    id: 6,
    firstName: "Manish",
    email: "manish@theoca...",
    phone: "9006006076",
    assignedEmails: "brokers@theoceann.c...",
    userType: ["OceannMail"],
    status: "Active",
    password: "••••••••••",
    role: "Operation"
  },
  {
    id: 7,
    firstName: "omsai",
    email: "oceann@yopmail...",
    phone: "8327283992",
    assignedEmails: "brokers@theoceann.c...",
    userType: ["OceannVM", "OceannMail"],
    status: "Active",
    password: "••••••••••",
    role: "admin"
  },
  {
    id: 8,
    firstName: "abhinai",
    email: "ios.dev@spekond...",
    phone: "87678920987674",
    assignedEmails: "",
    userType: [],
    status: "Active",
    password: "",
    role: "Charterer"
  }
]

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState("10")

  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getRoleBadgeVariant = (role: string) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return 'default'
      case 'hod':
        return 'secondary'
      case 'charterer':
        return 'outline'
      case 'operation':
        return 'secondary'
      default:
        return 'outline'
    }
  }

  const handleEditUser = (user: any) => {
    setSelectedUser(user)
    setIsEditModalOpen(true)
  }

  const handleModifyAccess = (user: any) => {
    setSelectedUser(user)
    setIsAccessModalOpen(true)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Manage Users</h1>
          <p className="text-muted-foreground">Manage user accounts and permissions</p>
        </div>
        <Button variant="ocean" className="gap-2">
          <Plus className="w-4 h-4" />
          Add New User
        </Button>
      </div>

      {/* Search and Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Rows per page:</span>
              <Select value={rowsPerPage} onValueChange={setRowsPerPage}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-ocean-primary">
                  <TableHead className="text-primary-foreground font-semibold">First Name</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Email Address</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Phone Number</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Assigned Emails</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">User Type</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Status</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Password</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Role</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Modify Access</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{user.firstName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                      <span className="text-success text-sm">{user.assignedEmails}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        {user.userType.map((type, index) => (
                          <Badge 
                            key={index} 
                            variant={type === "OceannMail" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {type}
                          </Badge>
                        ))}
                        {user.userType.length === 0 && (
                          <Badge variant="destructive" className="text-xs">N/A</Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-success text-success-foreground">
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono">{user.password}</TableCell>
                    <TableCell>
                      <Badge variant={getRoleBadgeVariant(user.role)}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleModifyAccess(user)}
                        className="gap-2"
                      >
                        <Settings2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditUser(user)}
                        className="gap-2"
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
          <div className="flex items-center justify-between p-4 border-t border-border">
            <span className="text-sm text-muted-foreground">
              1-8 of 8
            </span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modals */}
      <EditUserModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={selectedUser}
      />
      
      <AccessControlModal 
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
        user={selectedUser}
      />
    </div>
  )
}

export default ManageUsers