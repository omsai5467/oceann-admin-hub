import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const CustomerSupport = () => {
  const [priorityLevel, setPriorityLevel] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Support ticket submitted:", { priorityLevel, subject, message })
    // Handle form submission
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>🏠</span>
            <span>&gt;</span>
            <span>CUSTOMER-SUPPORT</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ocean" size="sm">My Portal</Button>
            <Button variant="ocean" size="sm">OceannMail</Button>
            <Button variant="ocean" size="sm">OceannVm</Button>
          </div>
        </div>
      </div>

      {/* Customer Support Section */}
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Customer Support</h1>

        {/* Support Form */}
        <div className="max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Priority Level and Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="priority">Select Priority Level</Label>
                <Select value={priorityLevel} onValueChange={setPriorityLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Enter Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Write your concern..."
                className="min-h-[200px] resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div>
              <Button type="submit" variant="ocean" size="lg">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerSupport