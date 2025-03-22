"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Users, FileText, Calendar, Upload, Settings, PlusCircle, Clock } from "lucide-react"
import { getUser } from "@/lib/auth"
import { getAppointmentsByStaffId } from "@/lib/mock-data"

export default function StaffPortalPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser()
        setUser(userData)

        // If we have a user, fetch their appointments
        if (userData) {
          // In a real app, we would fetch this data from an API
          // For now, we'll use our mock data
          const staffAppointments = getAppointmentsByStaffId(userData.id)

          // You could set these to state if needed
          // setAppointments(staffAppointments)
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
              <span className="font-bold text-xl text-white">Stepper Portal</span>
            </div>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            <Link href="/staff-portal" className="flex items-center space-x-3 px-3 py-2 rounded-md bg-muted text-white">
              <BarChart3 className="h-5 w-5 text-teal" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/staff-portal/customers"
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-muted-foreground hover:text-white hover:bg-muted/50"
            >
              <Users className="h-5 w-5" />
              <span>Customers</span>
            </Link>
            <Link
              href="/staff-portal/reports"
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-muted-foreground hover:text-white hover:bg-muted/50"
            >
              <FileText className="h-5 w-5" />
              <span>Reports</span>
            </Link>
            <Link
              href="/staff-portal/appointments"
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-muted-foreground hover:text-white hover:bg-muted/50"
            >
              <Calendar className="h-5 w-5" />
              <span>Appointments</span>
            </Link>
            <Link
              href="/staff-portal/uploads"
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-muted-foreground hover:text-white hover:bg-muted/50"
            >
              <Upload className="h-5 w-5" />
              <span>Uploads</span>
            </Link>
            <Link
              href="/staff-portal/settings"
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-muted-foreground hover:text-white hover:bg-muted/50"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
          <div className="p-4 border-t border-muted">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-teal to-purple flex items-center justify-center">
                <span className="text-white font-bold">{user?.name?.charAt(0) || "A"}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">{user?.name || "Admin User"}</p>
                <p className="text-xs text-muted-foreground">Stepper</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="md:ml-64 flex-1">
          <header className="bg-darkblue border-b border-muted p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <div className="flex items-center space-x-4">
                <Button className="bg-gradient-to-r from-teal to-purple hover:opacity-90">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  New Report
                </Button>
              </div>
            </div>
          </header>

          <main className="p-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-darkblue border-muted">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">Active Customers</p>
                      <h3 className="text-3xl font-bold text-white mt-1">24</h3>
                    </div>
                    <div className="h-12 w-12 bg-teal/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-teal" />
                    </div>
                  </div>
                  <p className="text-xs text-green-500 mt-4 flex items-center">
                    <span className="inline-block mr-1">↑</span> 12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-darkblue border-muted">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">Pending Reports</p>
                      <h3 className="text-3xl font-bold text-white mt-1">7</h3>
                    </div>
                    <div className="h-12 w-12 bg-purple/10 rounded-full flex items-center justify-center">
                      <FileText className="h-6 w-6 text-purple" />
                    </div>
                  </div>
                  <p className="text-xs text-yellow-500 mt-4 flex items-center">
                    <span className="inline-block mr-1">↑</span> 3 due this week
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-darkblue border-muted">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">Upcoming Appointments</p>
                      <h3 className="text-3xl font-bold text-white mt-1">12</h3>
                    </div>
                    <div className="h-12 w-12 bg-teal/10 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-teal" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 flex items-center">
                    <span className="inline-block mr-1">•</span> 4 today
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-darkblue border-muted">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">Hours Logged</p>
                      <h3 className="text-3xl font-bold text-white mt-1">87</h3>
                    </div>
                    <div className="h-12 w-12 bg-purple/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-purple" />
                    </div>
                  </div>
                  <p className="text-xs text-green-500 mt-4 flex items-center">
                    <span className="inline-block mr-1">↑</span> 8% from last week
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="upcoming" className="space-y-6">
              <TabsList className="bg-darkblue border-muted grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="recent">Recent Activity</TabsTrigger>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-6">
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Upcoming Appointments</CardTitle>
                    <CardDescription>Your schedule for the next few days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                        <div>
                          <p className="font-medium text-white">Security Assessment - Acme Corp</p>
                          <p className="text-sm text-muted-foreground">Initial consultation</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">Today, 2:00 PM</p>
                          <p className="text-xs text-muted-foreground">1 hour</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                        <div>
                          <p className="font-medium text-white">Code Review - TechStart Inc</p>
                          <p className="text-sm text-muted-foreground">Follow-up meeting</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">Tomorrow, 10:00 AM</p>
                          <p className="text-xs text-muted-foreground">45 minutes</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                        <div>
                          <p className="font-medium text-white">API Security - Global Finance</p>
                          <p className="text-sm text-muted-foreground">Findings presentation</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">Wed, 3:30 PM</p>
                          <p className="text-xs text-muted-foreground">1.5 hours</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-muted text-muted-foreground hover:text-white">
                      View All Appointments
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="recent" className="space-y-6">
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Activity</CardTitle>
                    <CardDescription>Your latest actions and updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-muted rounded-md">
                        <div className="h-10 w-10 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <FileText className="h-5 w-5 text-teal" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Report Submitted</p>
                          <p className="text-sm text-muted-foreground">
                            You submitted the security assessment report for DataSafe Solutions
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-muted rounded-md">
                        <div className="h-10 w-10 bg-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Upload className="h-5 w-5 text-purple" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Files Uploaded</p>
                          <p className="text-sm text-muted-foreground">You uploaded 3 scan results for WebTech Inc</p>
                          <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-muted rounded-md">
                        <div className="h-10 w-10 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="h-5 w-5 text-teal" />
                        </div>
                        <div>
                          <p className="font-medium text-white">New Customer</p>
                          <p className="text-sm text-muted-foreground">CloudSecure Ltd was added as a new customer</p>
                          <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-muted text-muted-foreground hover:text-white">
                      View All Activity
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="tasks" className="space-y-6">
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Pending Tasks</CardTitle>
                    <CardDescription>Tasks that require your attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 bg-red-500/10 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-red-500">!</span>
                          </div>
                          <div>
                            <p className="font-medium text-white">Complete Security Report</p>
                            <p className="text-sm text-muted-foreground">For TechStart Inc</p>
                          </div>
                        </div>
                        <p className="text-xs text-red-500">Due Today</p>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 bg-yellow-500/10 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-yellow-500">!</span>
                          </div>
                          <div>
                            <p className="font-medium text-white">Review API Scan Results</p>
                            <p className="text-sm text-muted-foreground">For Global Finance</p>
                          </div>
                        </div>
                        <p className="text-xs text-yellow-500">Due in 2 days</p>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 bg-muted-foreground/10 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-muted-foreground">3</span>
                          </div>
                          <div>
                            <p className="font-medium text-white">Schedule Follow-up Call</p>
                            <p className="text-sm text-muted-foreground">With DataSafe Solutions</p>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">Due in 5 days</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-muted text-muted-foreground hover:text-white">
                      View All Tasks
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

