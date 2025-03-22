"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { isAuthenticated, hasRole } from "@/lib/auth"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: string
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuth = await isAuthenticated()

        if (!isAuth) {
          router.push(`/login?returnTo=${encodeURIComponent(window.location.pathname)}`)
          return
        }

        if (requiredRole) {
          const hasRequiredRole = await hasRole(requiredRole)

          if (!hasRequiredRole) {
            router.push("/unauthorized")
            return
          }
        }

        setIsAuthorized(true)
      } catch (error) {
        console.error("Authentication error:", error)
        router.push("/login")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router, requiredRole])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-teal"></div>
      </div>
    )
  }

  return isAuthorized ? <>{children}</> : null
}

