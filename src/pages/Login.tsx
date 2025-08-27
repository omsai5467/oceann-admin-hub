import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import loginIllustration from "@/assets/login-illustration.jpg"
import logoImage from "@/assets/logo.jpg"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      if (email && password) {
        toast({
          title: "Login successful",
          description: "Welcome to TheOceann Admin Portal",
        })
        navigate("/admin/profile")
      } else {
        toast({
          title: "Login failed",
          description: "Please enter valid credentials",
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
            src={loginIllustration} 
            alt="Login illustration"
            className="max-w-lg w-full h-auto rounded-2xl shadow-elegant"
          />
        </div>
      </div>

      {/* Right Side - Login Form */}
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
              <h3 className="text-xl font-semibold mt-4 text-foreground">THEOCEANN SASS PORTAL</h3>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="oceann@yopmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-muted-foreground">Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-ocean-primary hover:text-ocean-secondary text-sm font-medium"
              >
                Forgot Password?
              </button>
            </div>

            <Button
              type="submit"
              variant="ocean"
              size="lg"
              className="w-full h-12"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Login"}
            </Button>

            {/* Social Login Options */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-3 border border-border rounded-lg hover:bg-muted cursor-pointer">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">JK</span>
                </div>
                <span className="text-sm">Sign in as Jeetendra</span>
                <span className="text-xs text-muted-foreground ml-auto">jeetendra.theoceann@...</span>
              </div>

              <Button
                variant="outline"
                className="w-full h-12 gap-2"
                type="button"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign in with Microsoft
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              Incase of concern, please contact mail at{" "}
              <a href="mailto:business@theoceann.com" className="text-ocean-primary hover:underline">
                business@theoceann.com
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login