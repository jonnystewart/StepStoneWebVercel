import type React from "react"
import { ProtectedRoute } from "@/components/protected-route"

export default function StaffPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProtectedRoute requiredRole="staff">{children}</ProtectedRoute>
}

