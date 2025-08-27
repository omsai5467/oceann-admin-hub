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
import { Check, Copy } from "lucide-react"

const SmtpConfig = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    { id: 1, title: "Domain Configuration", isActive: true, isCompleted: false },
    { id: 2, title: "Generate Records", isActive: false, isCompleted: false },
    { id: 3, title: "Verify Setup", isActive: false, isCompleted: false },
    { id: 4, title: "Complete", isActive: false, isCompleted: false }
  ]

  const domainData = [
    {
      id: 1,
      smtpDomain: "theoceann.ai",
      dkimRecord: "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQ...",
      dmarcRecord: "v=DMARC1;p=quarantine;rua=mailto:om sai@t...",
      action: "Verified"
    }
  ]

  const handleGenerate = () => {
    console.log("Generate clicked")
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">SMTP Server Setup</h1>
          <p className="text-muted-foreground">Configure your DNS records step by step for proper email delivery.</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold
                  ${step.isActive ? 'bg-ocean-primary' : step.isCompleted ? 'bg-green-500' : 'bg-gray-300'}
                `}>
                  {step.isCompleted ? <Check className="w-6 h-6" /> : step.id}
                </div>
                <div className="mt-2 text-center">
                  <div className="text-sm font-medium">Step {step.id}</div>
                  <div className="text-xs text-muted-foreground">{step.title}</div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="w-16 h-0.5 bg-gray-300 mx-4 mt-[-20px]"></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Step 1: Domain Configuration</h2>
            <Button onClick={handleGenerate} variant="ocean">
              Generate
            </Button>
          </div>

          {/* Domain Configuration Table */}
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader className="bg-ocean-primary">
                <TableRow>
                  <TableHead className="text-white font-medium">ID</TableHead>
                  <TableHead className="text-white font-medium">SMTP DOMAIN</TableHead>
                  <TableHead className="text-white font-medium">DKIM RECORD</TableHead>
                  <TableHead className="text-white font-medium">DMARC RECORD</TableHead>
                  <TableHead className="text-white font-medium">ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {domainData.map((item) => (
                  <TableRow key={item.id} className="bg-green-50">
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell className="font-medium">{item.smtpDomain}</TableCell>
                    <TableCell className="max-w-xs">
                      <div className="flex items-center gap-2">
                        <div className="truncate text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                          {item.dkimRecord}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(item.dkimRecord)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <div className="flex items-center gap-2">
                        <div className="truncate text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                          {item.dmarcRecord}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(item.dmarcRecord)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                        {item.action}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Instructions:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>1. Copy the DKIM record and add it to your DNS as a TXT record</li>
              <li>2. Copy the DMARC record and add it to your DNS as a TXT record</li>
              <li>3. Wait for DNS propagation (usually 15-30 minutes)</li>
              <li>4. Click "Verify Setup" in Step 3 to validate your configuration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmtpConfig