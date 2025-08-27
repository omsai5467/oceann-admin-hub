import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import forgotPasswordIllustration from "@/assets/forgot-password-illustration.jpg"
import logoImage from "@/assets/logo.jpg"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate sending OTP
    setTimeout(() => {
      if (email) {
        toast({
          title: "OTP Sent",
          description: "Please check your email for the verification code",
        })
      } else {
        toast({
          title: "Error",
          description: "Please enter a valid email address",
          variant: "destructive",
        })
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-ocean-subtle">
        <div className="absolute inset-0 bg-gradient-ocean opacity-10"></div>
        <div className="flex items-center justify-center w-full p-12">
          <img 
            src={forgotPasswordIllustration} 
            alt="Forgot password illustration"
            className="max-w-lg w-full h-auto rounded-2xl shadow-elegant"
          />
        </div>
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <img 
                src={logoImage} 
                alt="TheOceann Logo" 
                className="w-16 h-16 rounded-full shadow-elegant"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-ocean-primary">TheOceann</h2>
              <p className="text-muted-foreground mt-2">Maritime is our kingdom</p>
            </div>
          </div>

          {/* Forgot Password Form */}
          <div className="bg-card p-8 rounded-lg border border-border shadow-elegant">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Forgot Password? 🔒</h3>
                <p className="text-muted-foreground text-sm">
                  Enter your email to receive an OTP.
                </p>
              </div>

              <form onSubmit={handleSendOTP} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 h-12"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="ocean"
                  size="lg"
                  className="w-full h-12"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send OTP"}
                </Button>
              </form>

              <div className="text-center">
                <button
                  onClick={() => navigate("/login")}
                  className="inline-flex items-center gap-2 text-ocean-primary hover:text-ocean-secondary text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword