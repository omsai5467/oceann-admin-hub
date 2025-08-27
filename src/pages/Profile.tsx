import { useState } from "react"
import { Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  // Personal Information State
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Amar",
    lastName: "kumar",
    email: "oceann@yopmail.com",
    phone: "Enter name Phone Number",
    country: "India"
  })

  // Company Information State
  const [companyInfo, setCompanyInfo] = useState({
    companyName: "thor",
    vatNumber: "123456789098765432",
    companyType: "Charterer",
    professionalEmail: "oceann@yopmail.com",
    employeeCount: "Enter Company Employee Number",
    companyDomain: "theoceann"
  })

  const handlePersonalUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Personal information updated successfully",
      })
      setIsLoading(false)
      setIsEditing(false)
    }, 1000)
  }

  const handleCompanyUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Company information updated successfully",
      })
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Company Profile</h1>
          <p className="text-muted-foreground">Manage your profile information</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-warning/10 border border-warning/20 rounded-lg px-4 py-2">
            <span className="text-warning text-sm font-medium">
              Your OceannMail subscription expired on 06-02-2025
            </span>
          </div>
          <div className="flex gap-2">
            <Button variant="ocean-outline" size="sm">User Manual</Button>
            <Button variant="ocean" size="sm">My Portal</Button>
            <Button variant="info" size="sm">OceannMail</Button>
            <Button variant="ocean" size="sm">OceannVm</Button>
          </div>
        </div>
      </div>

      {/* Personal Information Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-foreground">Personal Information</CardTitle>
          <Button
            variant={isEditing ? "outline" : "ghost"}
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit className="w-4 h-4" />
            {isEditing ? "Cancel" : "Edit"}
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePersonalUpdate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="firstName">Name</Label>
                <Input
                  id="firstName"
                  value={personalInfo.firstName}
                  onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={personalInfo.lastName}
                  onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={personalInfo.email}
                  onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={personalInfo.phone}
                  onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={personalInfo.country}
                  onChange={(e) => setPersonalInfo({...personalInfo, country: e.target.value})}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
            </div>
            {isEditing && (
              <div className="flex justify-end">
                <Button type="submit" variant="ocean" disabled={isLoading}>
                  {isLoading ? "Updating..." : "Update"}
                </Button>
              </div>
            )}
          </form>
        </CardContent>
      </Card>

      {/* Company Information Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Company Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCompanyUpdate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={companyInfo.companyName}
                  onChange={(e) => setCompanyInfo({...companyInfo, companyName: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="vatNumber">VAT Number</Label>
                <Input
                  id="vatNumber"
                  value={companyInfo.vatNumber}
                  onChange={(e) => setCompanyInfo({...companyInfo, vatNumber: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="companyType">Company Type</Label>
                <Input
                  id="companyType"
                  value={companyInfo.companyType}
                  onChange={(e) => setCompanyInfo({...companyInfo, companyType: e.target.value})}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="professionalEmail">Professional mail</Label>
                <Input
                  id="professionalEmail"
                  value={companyInfo.professionalEmail}
                  onChange={(e) => setCompanyInfo({...companyInfo, professionalEmail: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="employeeCount">Number of employee</Label>
                <Input
                  id="employeeCount"
                  value={companyInfo.employeeCount}
                  onChange={(e) => setCompanyInfo({...companyInfo, employeeCount: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="companyDomain">Company Domain</Label>
                <Input
                  id="companyDomain"
                  value={companyInfo.companyDomain}
                  onChange={(e) => setCompanyInfo({...companyInfo, companyDomain: e.target.value})}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" variant="ocean" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile