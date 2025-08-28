import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const mockPaymentData = [
  {
    id: 1,
    sessionId: "cs_test_a13jWpCzaR...",
    productName: "oceanVm",
    amount: "4220",
    paymentType: "online",
    paymentDate: "18/12/2023"
  },
  {
    id: 2,
    sessionId: "cs_test_a1zaw7Eyri63T...",
    productName: "oceannMail",
    amount: "100",
    paymentType: "online-stripe",
    paymentDate: "26/06/2024"
  },
  {
    id: 3,
    sessionId: "cs_test_a1RPa3hwLLx4...",
    productName: "oceannMail",
    amount: "100",
    paymentType: "online-stripe",
    paymentDate: "26/06/2024"
  },
  {
    id: 4,
    sessionId: "cs_test_a13vJCyE69Du...",
    productName: "oceannMail",
    amount: "100",
    paymentType: "online-stripe",
    paymentDate: "26/06/2024"
  },
  {
    id: 5,
    sessionId: "cs_test_a1B3ok0cAY4Ih...",
    productName: "oceannMail",
    amount: "100",
    paymentType: "online-stripe",
    paymentDate: "26/06/2024"
  },
  {
    id: 6,
    sessionId: "cs_test_a1CdPeczPtELo...",
    productName: "oceannMail",
    amount: "100",
    paymentType: "online-stripe",
    paymentDate: "26/06/2024"
  },
  {
    id: 7,
    sessionId: "cs_test_a1vIK6ZBNCAK...",
    productName: "oceannMail",
    amount: "100",
    paymentType: "online-stripe",
    paymentDate: "26/06/2024"
  },
  {
    id: 8,
    sessionId: "cs_test_a13bG0Dd4oK1...",
    productName: "oceannMail",
    amount: "100",
    paymentType: "online-stripe",
    paymentDate: "26/06/2024"
  },
  {
    id: 9,
    sessionId: "cs_test_a1brNiszpf2dF...",
    productName: "oceannMail",
    amount: "100",
    paymentType: "online-stripe",
    paymentDate: "26/06/2024"
  },
  {
    id: 10,
    sessionId: "cs_test_a1CoSiTVTmtAt...",
    productName: "oceannMail",
    amount: "100",
    paymentType: "online-stripe",
    paymentDate: "26/06/2024"
  }
]

const PaymentHistory = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>🏠</span>
            <span>&gt;</span>
            <span>PAYMENT-HISTORY</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ocean" size="sm">My Portal</Button>
            <Button variant="ocean" size="sm">OceannMail</Button>
            <Button variant="ocean" size="sm">OceannVm</Button>
          </div>
        </div>
      </div>

      {/* Payment History Section */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Payment History</h1>

        {/* Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-ocean-primary">
              <TableRow>
                <TableHead className="text-white font-medium">Session Id</TableHead>
                <TableHead className="text-white font-medium">Product Name</TableHead>
                <TableHead className="text-white font-medium">Amount</TableHead>
                <TableHead className="text-white font-medium">Payment Type</TableHead>
                <TableHead className="text-white font-medium">Payment Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPaymentData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-mono text-sm">{item.sessionId}</TableCell>
                  <TableCell className="font-medium">{item.productName}</TableCell>
                  <TableCell className="font-medium">{item.amount}</TableCell>
                  <TableCell>{item.paymentType}</TableCell>
                  <TableCell>{item.paymentDate}</TableCell>
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
            <span>1-10 of 49</span>
            <Button variant="ghost" size="sm" disabled>{"<"}</Button>
            <Button variant="ghost" size="sm">{">"}</Button>
            <Button variant="ghost" size="sm">{">>"}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentHistory