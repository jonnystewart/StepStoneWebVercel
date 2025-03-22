"use client"

import { useState, useEffect } from "react"
import { users, type User } from "./mock-data"

// Mock authentication state
let isAuthenticatedState = false
let currentUser: User | null = null

// Mock login function
export const login = async (username: string, password: string, isTwoFactorValid = true) => {
  // Find user
  const user = users.find((u) => (u.username === username || u.email === username) && u.password === password)

  if (!user) {
    throw new Error("Invalid username or password")
  }

  if (!isTwoFactorValid) {
    throw new Error("Invalid two-factor code")
  }

  // Set authenticated state
  isAuthenticatedState = true
  currentUser = user

  // Store in localStorage for persistence
  if (typeof window !== "undefined") {
    localStorage.setItem("isAuthenticated", "true")
    localStorage.setItem("currentUser", JSON.stringify(user))
  }

  return user
}

// Mock logout function
export const logout = async () => {
  isAuthenticatedState = false
  currentUser = null

  // Clear localStorage
  if (typeof window !== "undefined") {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("currentUser")
  }

  // Redirect to home page
  if (typeof window !== "undefined") {
    window.location.href = "/"
  }
}

// Check if user is authenticated
export const isAuthenticated = async () => {
  // If running in browser, check localStorage
  if (typeof window !== "undefined") {
    const storedAuth = localStorage.getItem("isAuthenticated")
    const storedUser = localStorage.getItem("currentUser")

    if (storedAuth === "true" && storedUser) {
      isAuthenticatedState = true
      currentUser = JSON.parse(storedUser)
    }
  }

  return isAuthenticatedState
}

// Get user information
export const getUser = async () => {
  if (!isAuthenticatedState) {
    return null
  }

  return currentUser
}

// Check if user has a specific role
export const hasRole = async (role: string) => {
  if (!isAuthenticatedState || !currentUser) {
    return false
  }

  return currentUser.roles.includes(role)
}

// Check if user is staff
export const isStaff = async () => {
  return await hasRole("staff")
}

// Check if user is customer
export const isCustomer = async () => {
  return await hasRole("customer")
}

// Hook for authentication state
export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await isAuthenticated()
      setAuthenticated(isAuth)

      if (isAuth) {
        const userData = await getUser()
        setUser(userData)
      }

      setLoading(false)
    }

    checkAuth()
  }, [])

  return { authenticated, user, loading }
}

