"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { login } from "@/lib/auth"
import { AlertCircle } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnTo = searchParams.get("returnTo") || "/"
  const [isStaffLogin, setIsStaffLogin] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [twoFactorCode, setTwoFactorCode] = useState("")
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      if (!showTwoFactor) {
        // First step: validate username and password
        // In a real implementation, this would check credentials without completing login
        if (!username || !password) {
          throw new Error("Username and password are required")
        }

        // Show 2FA input
        setShowTwoFactor(true)
        setLoading(false)
        return
      }

      // Second step: validate 2FA and complete login
      if (!twoFactorCode || twoFactorCode.length !== 6) {
        throw new Error("Please enter a valid 6-digit code")
      }

      // For demo purposes, any 6-digit code is accepted
      const user = await login(username, password, true)

      // Redirect based on user role
      if (user.roles.includes("staff")) {
        router.push("/staff-portal")
      } else {
        router.push("/customer-portal")
      }
    } catch (err) {
      setError(err.message || "An error occurred during login")
      setLoading(false)
    }
  }

  const toggleLoginType = () => {
    setIsStaffLogin(!isStaffLogin)
    setUsername("")
    setPassword("")
    setTwoFactorCode("")
    setShowTwoFactor(false)
    setError("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-darknavy to-darkblue p-4">
      <Card className="w-full max-w-md border-muted bg-darkblue/90 shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-white">
            {isStaffLogin ? "Stepper Login" : "Customer Login"}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {isStaffLogin
              ? "Enter your credentials to access the staff portal"
              : "Enter your credentials to access your security dashboard"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {!showTwoFactor ? (
              // Step 1: Username and Password
              <>
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium text-muted-foreground">
                    Username or Email
                  </label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={isStaffLogin ? "admin" : "customer@example.com"}
                    className="bg-darknavy border-muted"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-muted-foreground">
                      Password
                    </label>
                    <Link href="/forgot-password" className="text-xs text-teal hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-darknavy border-muted"
                    required
                  />
                </div>
              </>
            ) : (
              // Step 2: Two-Factor Authentication
              <div className="space-y-4">
                <div className="rounded-lg bg-muted/20 p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-2">A verification code has been sent to your device</p>
                  <p className="text-xs text-muted-foreground">For demo purposes, any 6-digit code will work</p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="twoFactorCode" className="text-sm font-medium text-muted-foreground">
                    Verification Code
                  </label>
                  <Input
                    id="twoFactorCode"
                    type="text"
                    value={twoFactorCode}
                    onChange={(e) => {
                      // Only allow digits and max 6 characters
                      const value = e.target.value.replace(/\D/g, "").slice(0, 6)
                      setTwoFactorCode(value)
                    }}
                    placeholder="123456"
                    className="bg-darknavy border-muted text-center text-lg tracking-widest"
                    required
                    autoFocus
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="flex items-center gap-2 rounded-md bg-red-500/10 p-3 text-sm text-red-500">
                <AlertCircle className="h-4 w-4" />
                <p>{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-teal to-purple hover:opacity-90"
              disabled={loading || (showTwoFactor && twoFactorCode.length !== 6)}
            >
              {loading ? "Please wait..." : showTwoFactor ? "Verify" : "Continue"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 border-t border-muted pt-4">
          <div className="text-center w-full">
            <button onClick={toggleLoginType} className="text-sm text-teal hover:underline">
              {isStaffLogin ? "Go to Customer Login" : "Go to Staff Portal"}
            </button>
          </div>
          <div className="text-xs text-center text-muted-foreground">
            <p>Default credentials for demo:</p>
            <p className="mt-1">
              {isStaffLogin ? "Username: admin, Password: admin" : "Username: customer, Password: customer"}
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

