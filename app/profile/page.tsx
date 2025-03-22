"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Lock, Bell, Shield, CheckCircle } from "lucide-react"
import { ProtectedRoute } from "@/components/protected-route"
import { getUser } from "@/lib/auth"

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser()
        setUser(userData)
      } catch (err) {
        console.error("Error fetching user:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-darknavy">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal to-purple animate-pulse"></div>
          <h1 className="text-2xl font-bold text-white mb-2">Loading...</h1>
          <p className="text-muted-foreground">Please wait while we load your profile.</p>
        </div>
      </div>
    )
  }

  return (
    <ProtectedRoute>
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 py-12 bg-darknavy">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold text-white mb-8">Profile Settings</h1>

            <Tabs defaultValue="account" className="space-y-6">
              <TabsList className="bg-darkblue border-muted">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="space-y-6">
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Account Information</CardTitle>
                    <CardDescription>Update your account details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-teal to-purple flex items-center justify-center mb-4">
                          <User className="h-16 w-16 text-white" />
                        </div>
                        <Button variant="outline" className="border-muted hover:border-white text-white">
                          Change Avatar
                        </Button>
                      </div>
                      <div className="md:w-2/3 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name" className="text-muted-foreground">
                              First name
                            </Label>
                            <Input
                              id="first-name"
                              defaultValue={user?.name?.split(" ")[0] || "John"}
                              className="bg-darknavy border-muted focus-visible:ring-teal"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name" className="text-muted-foreground">
                              Last name
                            </Label>
                            <Input
                              id="last-name"
                              defaultValue={user?.name?.split(" ")[1] || "Doe"}
                              className="bg-darknavy border-muted focus-visible:ring-teal"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-muted-foreground">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            defaultValue={user?.email || "john.doe@example.com"}
                            className="bg-darknavy border-muted focus-visible:ring-teal"
                            disabled
                          />
                          <p className="text-xs text-muted-foreground">
                            Your email is managed by your identity provider.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-muted-foreground">
                            Company
                          </Label>
                          <Input
                            id="company"
                            defaultValue="Example Corp"
                            className="bg-darknavy border-muted focus-visible:ring-teal"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="job-title" className="text-muted-foreground">
                            Job Title
                          </Label>
                          <Input
                            id="job-title"
                            defaultValue="IT Manager"
                            className="bg-darknavy border-muted focus-visible:ring-teal"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white">
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Security Settings</CardTitle>
                    <CardDescription>Manage your account security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-darknavy rounded-lg border border-muted">
                        <div className="flex items-start">
                          <Lock className="h-5 w-5 text-teal mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium text-white">Password</p>
                            <p className="text-sm text-muted-foreground">
                              Change your password or reset it if you've forgotten it.
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-muted hover:border-white text-white">
                          Change Password
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-darknavy rounded-lg border border-muted">
                        <div className="flex items-start">
                          <Shield className="h-5 w-5 text-teal mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium text-white">Two-Factor Authentication</p>
                            <p className="text-sm text-muted-foreground">
                              Add an extra layer of security to your account.
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-muted hover:border-white text-white">
                          Enable 2FA
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-darknavy rounded-lg border border-muted">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-teal mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium text-white">Active Sessions</p>
                            <p className="text-sm text-muted-foreground">
                              Manage your active sessions and sign out from other devices.
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-muted hover:border-white text-white">
                          Manage Sessions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Notification Preferences</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-darknavy rounded-lg border border-muted">
                        <div className="flex items-start">
                          <Bell className="h-5 w-5 text-teal mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium text-white">Security Alerts</p>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications about security issues and vulnerabilities.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-darkblue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal"></div>
                          </label>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-darknavy rounded-lg border border-muted">
                        <div className="flex items-start">
                          <Bell className="h-5 w-5 text-teal mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium text-white">Report Notifications</p>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications when new security reports are available.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-darkblue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal"></div>
                          </label>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-darknavy rounded-lg border border-muted">
                        <div className="flex items-start">
                          <Bell className="h-5 w-5 text-teal mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium text-white">Appointment Reminders</p>
                            <p className="text-sm text-muted-foreground">
                              Receive reminders about upcoming security consultations.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-darkblue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal"></div>
                          </label>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-darknavy rounded-lg border border-muted">
                        <div className="flex items-start">
                          <Bell className="h-5 w-5 text-teal mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium text-white">Marketing Communications</p>
                            <p className="text-sm text-muted-foreground">
                              Receive updates about new services, features, and promotions.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-darkblue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white">
                      Save Preferences
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        <SiteFooter />
      </div>
    </ProtectedRoute>
  )
}

