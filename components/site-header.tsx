"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { isAuthenticated, getUser, logout, isStaff, isCustomer } from "@/lib/auth"
import { Avatar } from "@/components/ui/avatar"
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ChevronDown } from "lucide-react"

export function SiteHeader() {
  const pathname = usePathname()
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [isUserStaff, setIsUserStaff] = useState(false)
  const [isUserCustomer, setIsUserCustomer] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuth = await isAuthenticated()
        setAuthenticated(isAuth)

        if (isAuth) {
          const userData = await getUser()
          setUser(userData)

          const staffCheck = await isStaff()
          setIsUserStaff(staffCheck)

          const customerCheck = await isCustomer()
          setIsUserCustomer(customerCheck)
        }
      } catch (error) {
        console.error("Error checking authentication:", error)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [pathname])

  const handleLogout = async () => {
    await logout()
  }

  const getPortalLink = () => {
    if (isUserStaff) {
      return "/staff-portal"
    }
    if (isUserCustomer) {
      return "/customer-portal"
    }
    return "/login"
  }

  const getInitials = (name: string) => {
    if (!name) return "SS"
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted bg-darknavy/95 backdrop-blur supports-[backdrop-filter]:bg-darknavy/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-sm bg-gradient-to-r from-teal to-purple"></div>
          <span className="font-bold text-xl text-white">Step Stone Security</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-white">
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block w-48 p-2 bg-darkblue rounded-md shadow-lg border border-muted">
              <Link
                href="/services/security-assessment"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-muted rounded-md"
              >
                Security Assessment
              </Link>
              <Link
                href="/services/code-review"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-muted rounded-md"
              >
                Code Review
              </Link>
              <Link
                href="/services/api-security"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-muted rounded-md"
              >
                API Security
              </Link>
              <Link
                href="/services/web-application-security"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-muted rounded-md"
              >
                Web Application Security
              </Link>
              <Link
                href="/services/compliance"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-muted rounded-md"
              >
                Compliance
              </Link>
            </div>
          </div>
          <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-white">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-white">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-white">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {authenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    {user?.picture ? (
                      <AvatarImage src={user.picture} alt={user.name || "User"} />
                    ) : (
                      <AvatarFallback className="bg-gradient-to-r from-teal to-purple text-white">
                        {getInitials(user?.name || "")}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-darkblue border-muted">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium text-white">My Account</p>
                    <p className="text-xs text-muted-foreground">{user?.email || ""}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={getPortalLink()} className="cursor-pointer">
                    {isUserStaff ? "Staff Portal" : "Customer Portal"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    Profile Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500" onClick={handleLogout}>
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-white">
              Sign In
            </Link>
          )}
          <Link href="/pricing">
            <Button className="bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white">Subscribe Now</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

