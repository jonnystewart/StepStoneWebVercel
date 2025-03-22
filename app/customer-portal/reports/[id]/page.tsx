"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, AlertTriangle, CheckCircle, Info } from "lucide-react"
import { ProtectedRoute } from "@/components/protected-route"
import { getReportById, type Report, mockFileUrls } from "@/lib/mock-data"

export default function ReportDetailPage({ params }: { params: { id: string } }) {
  const [report, setReport] = useState<Report | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch report data from our mock data store
    const fetchReport = () => {
      const reportData = getReportById(params.id)
      setReport(reportData || null)
      setLoading(false)
    }

    fetchReport()
  }, [params.id])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-teal"></div>
      </div>
    )
  }

  if (!report) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Report Not Found</h1>
          <p className="text-muted-foreground">The report you're looking for doesn't exist or you don't have access.</p>
          <Link href="/customer-portal" className="text-teal hover:underline mt-4 inline-block">
            Return to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <ProtectedRoute requiredRole="customer">
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 py-12 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="mb-6">
              <Link href="/customer-portal" className="text-teal hover:underline flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-2"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                Back to Dashboard
              </Link>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white">{report.title}</h1>
                <p className="text-muted-foreground">
                  Completed on{" "}
                  {new Date(report.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <Button
                className="bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white"
                onClick={() => window.open(mockFileUrls.reports[report.id], "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>

            <Tabs defaultValue="summary" className="space-y-6">
              <TabsList className="bg-darkblue border-muted">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="findings">Findings</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="space-y-6">
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Executive Summary</CardTitle>
                    <CardDescription>Overview of the security assessment</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{report.summary}</p>
                    <p className="text-muted-foreground">
                      Our assessment identified {report.findings.filter((f) => f.severity === "high").length} high-risk,{" "}
                      {report.findings.filter((f) => f.severity === "medium").length} medium-risk, and{" "}
                      {report.findings.filter((f) => f.severity === "low").length} low-risk vulnerabilities. The
                      high-risk issues are related to authentication mechanisms and input validation, which could
                      potentially lead to unauthorized access or data exposure if exploited.
                    </p>
                    <p className="text-muted-foreground">
                      This report provides detailed findings and actionable recommendations to address these
                      vulnerabilities and improve your overall security posture.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Assessment Scope</CardTitle>
                    <CardDescription>Systems and components evaluated</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>Main web application (app.example.com)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>User authentication system</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>Payment processing integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>Admin dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>API endpoints</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Risk Summary</CardTitle>
                    <CardDescription>Overview of identified vulnerabilities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-darknavy p-4 rounded-lg border border-red-500/30">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-white">High Risk</h3>
                          <span className="text-red-500 font-bold">
                            {report.findings.filter((f) => f.severity === "high").length}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Critical vulnerabilities requiring immediate attention
                        </p>
                      </div>
                      <div className="bg-darknavy p-4 rounded-lg border border-orange-500/30">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-white">Medium Risk</h3>
                          <span className="text-orange-500 font-bold">
                            {report.findings.filter((f) => f.severity === "medium").length}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">Important issues that should be addressed soon</p>
                      </div>
                      <div className="bg-darknavy p-4 rounded-lg border border-yellow-500/30">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-white">Low Risk</h3>
                          <span className="text-yellow-500 font-bold">
                            {report.findings.filter((f) => f.severity === "low").length}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">Minor issues that should be fixed when possible</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="findings" className="space-y-6">
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">High Risk Findings</CardTitle>
                    <CardDescription>Critical vulnerabilities requiring immediate attention</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {report.findings
                      .filter((f) => f.severity === "high")
                      .map((finding) => (
                        <div key={finding.id} className="bg-darknavy p-4 rounded-lg border border-red-500/30">
                          <div className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h3 className="font-medium text-white mb-1">{finding.title}</h3>
                              <p className="text-muted-foreground text-sm mb-3">{finding.description}</p>
                              <div className="bg-darkblue p-3 rounded border border-muted mb-3">
                                <h4 className="text-sm font-medium text-white mb-1">Technical Details:</h4>
                                <p className="text-xs text-muted-foreground">{finding.technicalDetails}</p>
                              </div>
                              <div className="flex items-center">
                                <span className="text-xs font-medium text-white mr-2">Impact:</span>
                                <span className="text-xs text-red-500">High</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>

                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Medium Risk Findings</CardTitle>
                    <CardDescription>Important issues that should be addressed soon</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {report.findings
                      .filter((f) => f.severity === "medium")
                      .map((finding) => (
                        <div key={finding.id} className="bg-darknavy p-4 rounded-lg border border-orange-500/30">
                          <div className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h3 className="font-medium text-white mb-1">{finding.title}</h3>
                              <p className="text-muted-foreground text-sm mb-3">{finding.description}</p>
                              <div className="bg-darkblue p-3 rounded border border-muted mb-3">
                                <h4 className="text-sm font-medium text-white mb-1">Technical Details:</h4>
                                <p className="text-xs text-muted-foreground">{finding.technicalDetails}</p>
                              </div>
                              <div className="flex items-center">
                                <span className="text-xs font-medium text-white mr-2">Impact:</span>
                                <span className="text-xs text-orange-500">Medium</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="recommendations" className="space-y-6">
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Remediation Plan</CardTitle>
                    <CardDescription>Recommended actions to address identified vulnerabilities</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-darknavy p-4 rounded-lg">
                      <h3 className="font-medium text-white mb-3">High Priority Actions</h3>
                      <ul className="space-y-4">
                        {report.recommendations
                          .filter((r) => r.priority === "high")
                          .map((recommendation, index) => (
                            <li key={recommendation.id} className="flex items-start">
                              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                <span className="text-xs font-bold text-red-500">{index + 1}</span>
                              </div>
                              <div>
                                <p className="font-medium text-white">{recommendation.title}</p>
                                <p className="text-sm text-muted-foreground">{recommendation.description}</p>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className="bg-darknavy p-4 rounded-lg">
                      <h3 className="font-medium text-white mb-3">Medium Priority Actions</h3>
                      <ul className="space-y-4">
                        {report.recommendations
                          .filter((r) => r.priority === "medium")
                          .map((recommendation, index) => (
                            <li key={recommendation.id} className="flex items-start">
                              <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                <span className="text-xs font-bold text-orange-500">
                                  {index + 1 + report.recommendations.filter((r) => r.priority === "high").length}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium text-white">{recommendation.title}</p>
                                <p className="text-sm text-muted-foreground">{recommendation.description}</p>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className="bg-darknavy p-4 rounded-lg">
                      <h3 className="font-medium text-white mb-3">Additional Recommendations</h3>
                      <ul className="space-y-4">
                        {report.recommendations
                          .filter((r) => r.priority === "low")
                          .map((recommendation) => (
                            <li key={recommendation.id} className="flex items-start">
                              <Info className="h-5 w-5 text-teal mr-3 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-white">{recommendation.title}</p>
                                <p className="text-sm text-muted-foreground">{recommendation.description}</p>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </CardContent>
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

