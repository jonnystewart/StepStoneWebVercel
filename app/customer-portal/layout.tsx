import type React from "react"
import { ProtectedRoute } from "@/components/protected-route"

export default function CustomerPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProtectedRoute requiredRole="customer">{children}</ProtectedRoute>
}

