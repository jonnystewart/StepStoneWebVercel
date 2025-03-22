import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function UnauthorizedPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] py-12 text-center">
      <div className="mb-6 rounded-full bg-red-500/10 p-4">
        <AlertTriangle className="h-12 w-12 text-red-500" />
      </div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">Access Denied</h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        You don't have permission to access this page. Please contact your administrator if you believe this is an
        error.
      </p>
      <div className="flex gap-4">
        <Button asChild variant="outline">
          <Link href="/">Go to Home</Link>
        </Button>
        <Button asChild className="bg-gradient-to-r from-teal to-purple hover:opacity-90">
          <Link href="/login">Sign In</Link>
        </Button>
      </div>
    </div>
  )
}

