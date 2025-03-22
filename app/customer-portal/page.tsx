"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getUser } from "@/lib/auth-mock"
import { ShieldCheck, FileText, Calendar, CreditCard, AlertTriangle, CheckCircle2, Clock } from "lucide-react"
import { getReportsByCustomerId, getAppointmentsByCustomerId } from "@/lib/mock-data"

export default function CustomerPortalPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser()
        setUser(userData)

        // If we have a user, fetch their reports and appointments
        if (userData) {
          // In a real app, we would fetch this data from an API
          // For now, we'll use our mock data
          const userReports = getReportsByCustomerId(userData.id)
          const userAppointments = getAppointmentsByCustomerId(userData.id)

          // You could set these to state if needed
          // setReports(userReports)
          // setAppointments(userAppointments)
        }
      } catch (err) {
        console.error("Error fetching user data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-darknavy">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal to-purple animate-pulse"></div>
          <h1 className="text-2xl font-bold text-white mb-2">Loading...</h1>
          <p className="text-muted-foreground">Please wait while we load your dashboard.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-darknavy">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col bg-darkblue border-r border-muted h-screen fixed">
          <div className="p-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-sm bg-gradient-to-r from-teal to-purple"></div>
              <span className="font-bold text-xl text-white">Customer Portal</span>
            </div>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            <Link
              href="/customer-portal"
              className="flex items-center space-x-3 px-3 py-2 rounded-md bg-muted text-white"
            >
              <ShieldCheck className="h-5 w-5 text-teal" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/customer-portal/reports"
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-muted-foreground hover:text-white hover:bg-muted/50"
            >
              <FileText className="h-5 w-5" />
              <span>Security Reports</span>
            </Link>
            <Link
              href="/customer-portal/appointments"
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-muted-foreground hover:text-white hover:bg-muted/50"
            >
              <Calendar className="h-5 w-5" />
              <span>Appointments</span>
            </Link>
            <Link
              href="/customer-portal/subscription"
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-muted-foreground hover:text-white hover:bg-muted/50"
            >
              <CreditCard className="h-5 w-5" />
              <span>Subscription</span>
            </Link>
          </nav>
          <div className="p-4 border-t border-muted">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-teal to-purple flex items-center justify-center">
                <span className="text-white font-bold">{user?.name?.charAt(0) || "C"}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">{user?.name || "Demo Customer"}</p>
                <p className="text-xs text-muted-foreground">Standard Plan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="md:ml-64 flex-1">
          <header className="bg-darkblue border-b border-muted p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Security Dashboard</h1>
              <div className="flex items-center space-x-4">
                <Button className="bg-gradient-to-r from-teal to-purple hover:opacity-90">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
              </div>
            </div>
          </header>

          <main className="p-6">
            {/* Security Status */}
            <Card className="bg-darkblue border-muted mb-8">
              <CardHeader>
                <CardTitle className="text-white">Security Status</CardTitle>
                <CardDescription>Your current security posture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 p-6 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-white">Overall Status</h3>
                      <div className="h-10 w-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">Your security posture needs attention in a few areas.</p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">Web Application</span>
                          <span className="text-sm text-yellow-500">Needs Attention</span>
                        </div>
                        <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">API Security</span>
                          <span className="text-sm text-green-500">Good</span>
                        </div>
                        <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">Code Security</span>
                          <span className="text-sm text-red-500">Critical</span>
                        </div>
                        <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 rounded-full" style={{ width: "35%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-6 bg-muted rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-4">Recent Findings</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <AlertTriangle className="h-3 w-3 text-red-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">SQL Injection Vulnerability</p>
                          <p className="text-xs text-muted-foreground">Found in login form</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <AlertTriangle className="h-3 w-3 text-yellow-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Outdated Dependencies</p>
                          <p className="text-xs text-muted-foreground">3 packages need updates</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="h-3 w-3 text-green-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">HTTPS Properly Configured</p>
                          <p className="text-xs text-muted-foreground">TLS 1.3 with strong ciphers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-muted text-muted-foreground hover:text-white">
                  View Full Security Report
                </Button>
              </CardFooter>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="reports" className="space-y-6">
              <TabsList className="bg-darkblue border-muted grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="subscription">Subscription</TabsTrigger>
              </TabsList>

              <TabsContent value="reports" className="space-y-6">
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Reports</CardTitle>
                    <CardDescription>Security assessments and findings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                        <div>
                          <p className="font-medium text-white">Web Application Security Assessment</p>
                          <p className="text-sm text-muted-foreground">3 critical, 5 medium, 2 low findings</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">May 15, 2023</p>
                          <Link href="/customer-portal/reports/1" className="text-xs text-teal hover:underline">
                            View Report
                          </Link>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                        <div>
                          <p className="font-medium text-white">API Security Review</p>
                          <p className="text-sm text-muted-foreground">1 critical, 3 medium findings</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">April 2, 2023</p>
                          <Link href="/customer-portal/reports/2" className="text-xs text-teal hover:underline">
                            View Report
                          </Link>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                        <div>
                          <p className="font-medium text-white">Code Review - Authentication Module</p>
                          <p className="text-sm text-muted-foreground">2 critical, 4 medium, 6 low findings</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">March 10, 2023</p>
                          <Link href="/customer-portal/reports/3" className="text-xs text-teal hover:underline">
                            View Report
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-muted text-muted-foreground hover:text-white">
                      View All Reports
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="appointments" className="space-y-6">
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Upcoming Appointments</CardTitle>
                    <CardDescription>Scheduled consultations with our security team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                        <div>
                          <p className="font-medium text-white">Security Assessment Review</p>
                          <p className="text-sm text-muted-foreground">With John Smith</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">Tomorrow, 10:00 AM</p>
                          <div className="flex items-center justify-end gap-2 mt-1">
                            <Button variant="outline" size="sm" className="h-7 px-2 text-xs border-muted">
                              Reschedule
                            </Button>
                            <Button variant="outline" size="sm" className="h-7 px-2 text-xs border-muted">
                              Join
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                        <div>
                          <p className="font-medium text-white">Vulnerability Remediation Planning</p>
                          <p className="text-sm text-muted-foreground">With Sarah Johnson</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">June 5, 2023, 2:30 PM</p>
                          <div className="flex items-center justify-end gap-2 mt-1">
                            <Button variant="outline" size="sm" className="h-7 px-2 text-xs border-muted">
                              Reschedule
                            </Button>
                            <Button variant="outline" size="sm" className="h-7 px-2 text-xs border-muted">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="border-muted text-muted-foreground hover:text-white">
                      View Past Appointments
                    </Button>
                    <Button className="bg-gradient-to-r from-teal to-purple hover:opacity-90">
                      Book New Appointment
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="subscription" className="space-y-6">
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Your Subscription</CardTitle>
                    <CardDescription>Current plan and usage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-6 rounded-lg mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">Standard Plan</h3>
                          <p className="text-sm text-muted-foreground">Billed monthly</p>
                        </div>
                        <div className="bg-gradient-to-r from-teal to-purple text-white px-3 py-1 rounded-full text-xs font-medium">
                          Active
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Next billing date</span>
                          <span className="text-sm text-white">June 15, 2023</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Monthly fee</span>
                          <span className="text-sm text-white">$499.00</span>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-muted">
                        <h4 className="text-sm font-medium text-white mb-2 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Hours Usage
                        </h4>
                        <div className="space-y-2">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-muted-foreground">8 hours used of 12 hours</span>
                              <span className="text-xs text-white">67%</span>
                            </div>
                            <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                              <div className="h-full bg-teal rounded-full" style={{ width: "67%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                        <div>
                          <p className="font-medium text-white">Upgrade to Premium</p>
                          <p className="text-sm text-muted-foreground">
                            Get 24 hours of expert security advice per month
                          </p>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-teal to-purple hover:opacity-90">
                          Upgrade
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                        <div>
                          <p className="font-medium text-white">Add Extra Hours</p>
                          <p className="text-sm text-muted-foreground">Purchase additional consultation hours</p>
                        </div>
                        <Button size="sm" variant="outline" className="border-muted text-white">
                          Add Hours
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      className="border-muted text-red-500 hover:text-red-400 hover:bg-red-500/10"
                    >
                      Cancel Subscription
                    </Button>
                    <Button variant="outline" className="border-muted text-muted-foreground hover:text-white">
                      Billing History
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

