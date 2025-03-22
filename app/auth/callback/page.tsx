"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CallbackPage() {
  const router = useRouter()

  useEffect(() => {
    // In a real implementation, this would process the auth callback
    // For our mock implementation, we'll just redirect to the home page
    router.push("/")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-darknavy">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-white mb-2">Processing...</h2>
        <p className="text-muted-foreground">Please wait while we complete the authentication process.</p>
      </div>
    </div>
  )
}

