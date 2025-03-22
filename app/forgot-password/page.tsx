"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Validate email
      if (!email || !email.includes("@")) {
        throw new Error("Please enter a valid email address")
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message
      setIsSubmitted(true)
    } catch (err) {
      setError(err.message || "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-darknavy to-darkblue p-4">
      <Card className="w-full max-w-md border-muted bg-darkblue/90 shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-white">Reset Password</CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your email address and we'll send you a link to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-darknavy border-muted"
                  required
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 rounded-md bg-red-500/10 p-3 text-sm text-red-500">
                  <AlertCircle className="h-4 w-4" />
                  <p>{error}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal to-purple hover:opacity-90"
                disabled={loading}
              >
                {loading ? "Please wait..." : "Send Reset Link"}
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2 rounded-md bg-green-500/10 p-4 text-sm text-green-500">
                <CheckCircle2 className="h-5 w-5" />
                <p>Password reset link sent! Check your email inbox.</p>
              </div>
              <p className="text-sm text-muted-foreground">
                If you don't see the email, please check your spam folder or try again.
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center border-t border-muted pt-4">
          <Button asChild variant="link" className="text-teal">
            <Link href="/login" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Login
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

