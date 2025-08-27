import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const mockContactData = [
  {
    id: 1,
    serialNo: 1,
    name: "Omsai Nachhu",
    companyName: "Theoceann",
    email: "omsai@theoceann.ai",
    phoneNo: "+91 91823-38900"
  },
  {
    id: 2,
    serialNo: 2,
    name: "Jeetendra Mishra",
    companyName: "Name",
    email: "jeetendra@theoceann.ai",
    phoneNo: "+91 70079-03263"
  },
  {
    id: 3,
    serialNo: 3,
    name: "vidhi shaa",
    companyName: "vidKKc",
    email: "vidhi",
    phoneNo: "+IN 0000000000"
  },
  {
    id: 4,
    serialNo: 4,
    name: "madhu pathak",
    companyName: "The oceann",
    email: "arun@theoceann.ai",
    phoneNo: "+91 88772-34669"
  },
  {
    id: 5,
    serialNo: 5,
    name: "OM SAI Nacchu",
    companyName: "Theoceann.ai",
    email: "omsai@theoceann.ai",
    phoneNo: "+91 70079-03263"
  },
  {
    id: 6,
    serialNo: 6,
    name: "Arvind Kumar",
    companyName: "Spacex",
    email: "Arvind@theoceann.ai",
    phoneNo: "+91 83298-74821"
  },
  {
    id: 7,
    serialNo: 7,
    name: "Madhu Sahani",
    companyName: "The ocean OM",
    email: "madhu@theoceann.ai",
    phoneNo: "+1 (887) 723-4880"
  },
  {
    id: 8,
    serialNo: 8,
    name: "Qwerty Last",
    companyName: "Qwerty",
    email: "qwerty@gmail.com",
    phoneNo: "+91 3423234222"
  },
  {
    id: 9,
    serialNo: 9,
    name: "Jeetendra Mishra",
    companyName: "theoceann.ainm",
    email: "jeetendra@theoceann.ai",
    phoneNo: "+213 1111111"
  },
  {
    id: 10,
    serialNo: 10,
    name: "Help",
    companyName: "theoceann.ai",
    email: "help@theoceann.ai",
    phoneNo: "7007903263"
  }
]

const SyncContact = () => {
  const [selectedMail, setSelectedMail] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 10

  const handleSyncContact = () => {
    // Handle sync contact functionality
    console.log("Sync Contact clicked")
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>🏠</span>
          <span>&gt;</span>
          <span>SYNC CONTACT</span>
        </div>
      </div>

      {/* Sync Contact Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Sync Contact</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Select Mail</span>
              <Select value={selectedMail} onValueChange={setSelectedMail}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Gmail">Gmail</SelectItem>
                  <SelectItem value="Outlook">Outlook</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleSyncContact} variant="ocean">
              Sync Contact
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-ocean-primary">
              <TableRow>
                <TableHead className="text-white font-medium">Serial No.</TableHead>
                <TableHead className="text-white font-medium">Name</TableHead>
                <TableHead className="text-white font-medium">Company Name</TableHead>
                <TableHead className="text-white font-medium">Email</TableHead>
                <TableHead className="text-white font-medium">Phone No</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockContactData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.serialNo}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.companyName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phoneNo}</TableCell>
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
            <span>1-10 of 16</span>
            <Button variant="ghost" size="sm" disabled>{"<"}</Button>
            <Button variant="ghost" size="sm">{">"}</Button>
            <Button variant="ghost" size="sm">{">>"}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SyncContact