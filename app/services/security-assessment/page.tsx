import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatBot } from "@/components/chat-bot"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SecurityAssessmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <span className="text-white">Security </span>
                <span className="gradient-text">Assessment</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Comprehensive evaluation of your organization's security posture to identify vulnerabilities and
                recommend improvements.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-20 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3 space-y-8">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white">Basic Security Assessment</h2>
                  <p className="text-muted-foreground text-lg">
                    At Step Stone Security, we use freely available tools to perform a basic assessment of your
                    organization's security posture. This initial review helps us identify potential vulnerabilities and
                    determine if you need more comprehensive security measures.
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-8">Our Approach</h3>
                  <p className="text-muted-foreground text-lg">
                    We utilize industry-standard open-source security scanning tools to analyze your infrastructure,
                    networks, and systems for common security issues such as:
                  </p>
                  <ul className="space-y-2 my-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Network vulnerabilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Weak authentication mechanisms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Insecure configurations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Missing security patches</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Policy and procedure gaps</span>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-white mt-8">What You'll Receive</h3>
                  <p className="text-muted-foreground text-lg">After our assessment, we'll provide you with:</p>
                  <ul className="space-y-2 my-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">A clear report of identified vulnerabilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Prioritized list of security concerns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Recommendations for remediation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Assessment of whether you need further security assistance
                      </span>
                    </li>
                  </ul>

                  <div className="bg-darkblue p-6 rounded-lg border border-muted my-8">
                    <div className="flex items-start">
                      <AlertTriangle className="h-6 w-6 text-teal mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-white">Red Flag Identification</h4>
                        <p className="text-muted-foreground mt-2">
                          Our assessment will clearly identify any critical security issues that require immediate
                          attention. We'll help you understand the severity of each issue and provide guidance on next
                          steps, whether that's a simple fix you can implement or a more comprehensive security review.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-8">Tools We Use</h3>
                  <p className="text-muted-foreground text-lg">
                    Our basic assessments typically utilize freely available security tools such as:
                  </p>
                  <ul className="space-y-2 my-6">
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Nmap for network scanning</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">OpenVAS for vulnerability assessment</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">OWASP ZAP for web application scanning</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Lynis for system auditing</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">CIS Benchmarks for configuration assessment</span>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-white mt-8">Assessment Process</h3>
                  <p className="text-muted-foreground text-lg">
                    Our security assessment process typically follows these steps:
                  </p>

                  <ol className="space-y-4 my-6 list-decimal pl-6">
                    <li className="text-muted-foreground">
                      <span className="text-white font-medium">Initial Consultation:</span> We discuss your business,
                      technology stack, and specific security concerns.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="text-white font-medium">Scope Definition:</span> We define the scope of the
                      assessment based on your needs and priorities.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="text-white font-medium">Assessment Execution:</span> We perform the assessment
                      using our suite of security tools.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="text-white font-medium">Analysis:</span> We analyze the results and identify
                      vulnerabilities and security gaps.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="text-white font-medium">Reporting:</span> We provide a detailed report with
                      findings and recommendations.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="text-white font-medium">Review Meeting:</span> We review the findings with you
                      and answer any questions.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="text-white font-medium">Remediation Guidance:</span> We provide guidance on
                      addressing the identified issues.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="lg:w-1/3 space-y-8">
                <div className="bg-darkblue p-6 rounded-lg border border-muted sticky top-24">
                  <h3 className="text-xl font-bold text-white mb-4">Ready to assess your security?</h3>
                  <p className="text-muted-foreground mb-6">
                    Subscribe to our fractional cybersecurity team and get expert security assessment and advice.
                  </p>
                  <div className="space-y-4">
                    <Link href="/pricing">
                      <Button className="w-full bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white">
                        Subscribe Now
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full border-muted hover:border-white text-white" asChild>
                      <a href="mailto:sales@stepstonesecurity.com">Contact Sales</a>
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-muted">
                    <h4 className="font-medium text-white mb-2">Our Security Assessment includes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Network vulnerability scanning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Configuration review</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Security policy assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Plain-language explanation of findings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="w-full py-20 bg-darkblue">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white mb-12">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-darknavy p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-bold text-white mb-4">Code Review</h3>
                <p className="text-muted-foreground mb-4">
                  Identify security vulnerabilities in your code before they become problems.
                </p>
                <Link href="/services/code-review" className="inline-flex items-center text-teal hover:text-purple">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-darknavy p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-bold text-white mb-4">API Security</h3>
                <p className="text-muted-foreground mb-4">
                  Protect your API endpoints from security vulnerabilities and unauthorized access.
                </p>
                <Link href="/services/api-security" className="inline-flex items-center text-teal hover:text-purple">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-darknavy p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-bold text-white mb-4">Web Application Security</h3>
                <p className="text-muted-foreground mb-4">
                  Protect your web applications from common vulnerabilities and attacks.
                </p>
                <Link
                  href="/services/web-application-security"
                  className="inline-flex items-center text-teal hover:text-purple"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-teal/20 to-purple/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to secure your business?</h2>
                <p className="text-muted-foreground text-lg">
                  Subscribe to our fractional cybersecurity team and get expert security assessment and advice.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <Button className="bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white px-8 py-6 text-lg">
                    Subscribe Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-muted hover:border-white text-white px-8 py-6 text-lg"
                  asChild
                >
                  <a href="mailto:sales@stepstonesecurity.com">Contact Sales</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ChatBot />
    </div>
  )
}

