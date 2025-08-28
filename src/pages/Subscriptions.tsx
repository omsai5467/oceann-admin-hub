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

const mockSubscriptionData = [
  {
    id: 1,
    productName: "oceanVm",
    paymentTime: "03/16/2024",
    subscribedUsers: "100 users",
    subscriptionType: "yearly",
    status: "Active",
    expireDate: "10/31/2025"
  },
  {
    id: 2,
    productName: "oceannMail",
    paymentTime: "07/22/2024",
    subscribedUsers: "200 users",
    subscriptionType: "yearly",
    status: "Active",
    expireDate: "02/06/2025"
  },
  {
    id: 3,
    productName: "oceannMail",
    paymentTime: "12/30/2024",
    subscribedUsers: "333 users",
    subscriptionType: "yearly",
    status: "Active",
    expireDate: "12/30/2025"
  },
  {
    id: 4,
    productName: "oceannMail",
    paymentTime: "12/30/2024",
    subscribedUsers: "2 users",
    subscriptionType: "yearly",
    status: "Active",
    expireDate: "12/30/2025"
  },
  {
    id: 5,
    productName: "oceannMail",
    paymentTime: "12/30/2024",
    subscribedUsers: "2 users",
    subscriptionType: "yearly",
    status: "Active",
    expireDate: "12/30/2025"
  },
  {
    id: 6,
    productName: "oceannMail",
    paymentTime: "12/31/2024",
    subscribedUsers: "2 users",
    subscriptionType: "yearly",
    status: "Active",
    expireDate: "12/31/2025"
  },
  {
    id: 7,
    productName: "oceannMail",
    paymentTime: "12/31/2024",
    subscribedUsers: "2 users",
    subscriptionType: "yearly",
    status: "Active",
    expireDate: "12/31/2025"
  },
  {
    id: 8,
    productName: "oceannMail",
    paymentTime: "12/31/2024",
    subscribedUsers: "2 users",
    subscriptionType: "yearly",
    status: "Active",
    expireDate: "12/31/2025"
  },
  {
    id: 9,
    productName: "oceannMail",
    paymentTime: "12/31/2024",
    subscribedUsers: "2 users",
    subscriptionType: "yearly",
    status: "Active",
    expireDate: "12/31/2025"
  },
  {
    id: 10,
    productName: "oceannMail",
    paymentTime: "12/31/2024",
    subscribedUsers: "2 users",
    subscriptionType: "yearly",
    status: "Active",
    expireDate: "12/31/2025"
  }
]

const Subscriptions = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>🏠</span>
            <span>&gt;</span>
            <span>SUBSCRIPTIONS</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ocean" size="sm">My Portal</Button>
            <Button variant="ocean" size="sm">OceannMail</Button>
            <Button variant="ocean" size="sm">OceannVm</Button>
          </div>
        </div>
      </div>

      {/* Subscriptions Section */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Subscriptions</h1>

        {/* Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-ocean-primary">
              <TableRow>
                <TableHead className="text-white font-medium">Product Name</TableHead>
                <TableHead className="text-white font-medium">Payment Time</TableHead>
                <TableHead className="text-white font-medium">Subscribed Users</TableHead>
                <TableHead className="text-white font-medium">Subscription Type</TableHead>
                <TableHead className="text-white font-medium">Status</TableHead>
                <TableHead className="text-white font-medium">Expire Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSubscriptionData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.productName}</TableCell>
                  <TableCell>{item.paymentTime}</TableCell>
                  <TableCell>{item.subscribedUsers}</TableCell>
                  <TableCell>{item.subscriptionType}</TableCell>
                  <TableCell>
                    <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.expireDate}</TableCell>
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

export default Subscriptions