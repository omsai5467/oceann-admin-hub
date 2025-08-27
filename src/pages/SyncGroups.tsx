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
import { Eye } from "lucide-react"

const mockGroupData = [
  {
    id: 1,
    serialNo: 1,
    groupName: "backendgroupmail",
    groupType: "Unified",
    email: "backendgroupmail@theoc...",
    privacy: "Public",
    conversationEnabled: "Yes"
  },
  {
    id: 2,
    serialNo: 2,
    groupName: "frontend team",
    groupType: "Unified",
    email: "sof@theoceann.ai",
    privacy: "Public",
    conversationEnabled: "Yes"
  },
  {
    id: 3,
    serialNo: 3,
    groupName: "tester",
    groupType: "Unified",
    email: "Manual@Maritimeinfolab...",
    privacy: "Public",
    conversationEnabled: "Yes"
  },
  {
    id: 4,
    serialNo: 4,
    groupName: "QA team",
    groupType: "Unified",
    email: "QAteam@Maritimeinfolab...",
    privacy: "Public",
    conversationEnabled: "Yes"
  },
  {
    id: 5,
    serialNo: 5,
    groupName: "Testers",
    groupType: "Unified",
    email: "teams0833@Maritimeinfol...",
    privacy: "Public",
    conversationEnabled: "Yes"
  },
  {
    id: 6,
    serialNo: 6,
    groupName: "Arvind",
    groupType: "Unified",
    email: "Kumar@Maritimeinfolab.o...",
    privacy: "Public",
    conversationEnabled: "Yes"
  },
  {
    id: 7,
    serialNo: 7,
    groupName: "Admin Team",
    groupType: "Unified",
    email: "Admin1@theoceann.ai",
    privacy: "Public",
    conversationEnabled: "Yes"
  },
  {
    id: 8,
    serialNo: 8,
    groupName: "test",
    groupType: "Unified",
    email: "sKumar@Maritimeinfolab...",
    privacy: "Public",
    conversationEnabled: "Yes"
  },
  {
    id: 9,
    serialNo: 9,
    groupName: "Manish Singh",
    groupType: "Unified",
    email: "qiwue@Maritimeinfolab.o...",
    privacy: "Public",
    conversationEnabled: "Yes"
  },
  {
    id: 10,
    serialNo: 10,
    groupName: "queen iland",
    groupType: "Unified",
    email: "queen33@theoceann.ai",
    privacy: "Public",
    conversationEnabled: "Yes"
  }
]

const SyncGroups = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 10

  const handleSyncGroups = () => {
    // Handle sync groups functionality
    console.log("Sync Groups clicked")
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>🏠</span>
          <span>&gt;</span>
          <span>OUTLOOK GROUPS</span>
        </div>
      </div>

      {/* Sync Groups Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Sync Groups</h1>
          <Button onClick={handleSyncGroups} variant="ocean">
            Sync Groups
          </Button>
        </div>

        {/* Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-ocean-primary">
              <TableRow>
                <TableHead className="text-white font-medium">Serial No.</TableHead>
                <TableHead className="text-white font-medium">Group Name</TableHead>
                <TableHead className="text-white font-medium">Group type</TableHead>
                <TableHead className="text-white font-medium">Email</TableHead>
                <TableHead className="text-white font-medium">Privacy</TableHead>
                <TableHead className="text-white font-medium">Conversation Enabled</TableHead>
                <TableHead className="text-white font-medium">Actions</TableHead>
                <TableHead className="text-white font-medium">Sync Conversation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockGroupData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.serialNo}</TableCell>
                  <TableCell>{item.groupName}</TableCell>
                  <TableCell>{item.groupType}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.privacy}</TableCell>
                  <TableCell>{item.conversationEnabled}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="ocean" size="sm">
                      Sync
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <span>10</span>
          </div>
          <div className="flex items-center gap-2">
            <span>1-10 of 15</span>
            <Button variant="ghost" size="sm" disabled>{"<"}</Button>
            <Button variant="ghost" size="sm">{">"}</Button>
            <Button variant="ghost" size="sm">{">>"}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SyncGroups