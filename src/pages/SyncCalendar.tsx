import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SyncCalendar = () => {
  const [selectedMail, setSelectedMail] = useState("All")
  const [currentDate, setCurrentDate] = useState(new Date(2025, 7)) // August 2025
  const [selectedEvent, setSelectedEvent] = useState("No event for the day")

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      const prevMonth = new Date(year, month - 1, 0)
      const dayNum = prevMonth.getDate() - startingDayOfWeek + i + 1
      days.push({ day: dayNum, isCurrentMonth: false, isPrevMonth: true })
    }

    // Add days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === 27 && month === 7 // Highlighting 27th as today based on image
      days.push({ day, isCurrentMonth: true, isToday })
    }

    // Add empty cells for days after the last day of the month
    const remainingCells = 42 - days.length // 6 rows × 7 days
    for (let day = 1; day <= remainingCells; day++) {
      days.push({ day, isCurrentMonth: false, isNextMonth: true })
    }

    return days
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const handleSyncCalendar = () => {
    console.log("Sync Calendar clicked")
  }

  const days = getDaysInMonth(currentDate)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>🏠</span>
          <span>&gt;</span>
          <span>SYNC CALENDAR</span>
        </div>
      </div>

      {/* Sync Calendar Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Sync Calendar</h1>
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
            <Button onClick={handleSyncCalendar} variant="ocean">
              Sync Calendar
            </Button>
          </div>
        </div>

        {/* Calendar Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Today</Button>
            <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
              Back
            </Button>
            <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
              Next
            </Button>
          </div>
          <h2 className="text-xl font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="text-sm text-muted-foreground">
            {selectedEvent}
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="border rounded-lg overflow-hidden bg-white">
          {/* Calendar Header */}
          <div className="grid grid-cols-7 bg-gray-100">
            {daysOfWeek.map((day) => (
              <div key={day} className="p-3 text-center font-medium text-gray-700 border-r border-gray-200 last:border-r-0">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Body */}
          <div className="grid grid-cols-7">
            {days.map((dayInfo, index) => (
              <div
                key={index}
                className={`
                  min-h-[100px] p-2 border-r border-b border-gray-200 last:border-r-0
                  ${!dayInfo.isCurrentMonth ? 'bg-gray-50 text-gray-400' : 'bg-white'}
                  ${dayInfo.isToday ? 'bg-blue-50' : ''}
                  hover:bg-gray-50 cursor-pointer
                `}
              >
                <div className={`
                  text-sm font-medium mb-1
                  ${dayInfo.isToday ? 'text-blue-600' : ''}
                `}>
                  {dayInfo.day}
                </div>
                {/* Event indicator for today */}
                {dayInfo.isToday && (
                  <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    Today
                    <div className="text-xs">Point in Time Event</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SyncCalendar