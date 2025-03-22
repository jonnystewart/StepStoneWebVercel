import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatBot } from "@/components/chat-bot"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CompliancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <span className="text-white">Compliance </span>
                <span className="gradient-text">Guidance</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Navigate complex security regulations with expert guidance tailored to your industry requirements.
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
                  <h2 className="text-3xl font-bold text-white">Compliance Assessment & Guidance</h2>
                  <p className="text-muted-foreground text-lg">
                    At Step Stone Security, we help small and medium-sized businesses navigate the complex landscape of
                    security compliance requirements. Our experts provide practical guidance to help you understand
                    which regulations apply to your business and how to meet those requirements efficiently.
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-8">Our Approach</h3>
                  <p className="text-muted-foreground text-lg">
                    We take a pragmatic approach to compliance, focusing on the regulations that matter most to your
                    business and industry. Our compliance guidance services include:
                  </p>
                  <ul className="space-y-2 my-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Compliance gap analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Security policy development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Documentation preparation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Audit preparation assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Compliance roadmap development</span>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-white mt-8">Regulations We Cover</h3>
                  <p className="text-muted-foreground text-lg">
                    Our compliance guidance covers a wide range of regulations and standards, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-darkblue p-4 rounded-lg border border-muted">
                      <div className="flex items-center mb-2">
                        <FileText className="h-5 w-5 text-teal mr-2" />
                        <h4 className="font-bold text-white">GDPR</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        General Data Protection Regulation for businesses handling EU citizen data.
                      </p>
                    </div>
                    <div className="bg-darkblue p-4 rounded-lg border border-muted">
                      <div className="flex items-center mb-2">
                        <FileText className="h-5 w-5 text-teal mr-2" />
                        <h4 className="font-bold text-white">PCI DSS</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Payment Card Industry Data Security Standard for businesses processing card payments.
                      </p>
                    </div>
                    <div className="bg-darkblue p-4 rounded-lg border border-muted">
                      <div className="flex items-center mb-2">
                        <FileText className="h-5 w-5 text-teal mr-2" />
                        <h4 className="font-bold text-white">ISO 27001</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        International standard for information security management systems.
                      </p>
                    </div>
                    <div className="bg-darkblue p-4 rounded-lg border border-muted">
                      <div className="flex items-center mb-2">
                        <FileText className="h-5 w-5 text-teal mr-2" />
                        <h4 className="font-bold text-white">HIPAA</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Health Insurance Portability and Accountability Act for healthcare organizations.
                      </p>
                    </div>
                    <div className="bg-darkblue p-4 rounded-lg border border-muted">
                      <div className="flex items-center mb-2">
                        <FileText className="h-5 w-5 text-teal mr-2" />
                        <h4 className="font-bold text-white">SOC 2</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Service Organization Control reports for service providers storing customer data in the cloud.
                      </p>
                    </div>
                    <div className="bg-darkblue p-4 rounded-lg border border-muted">
                      <div className="flex items-center mb-2">
                        <FileText className="h-5 w-5 text-teal mr-2" />
                        <h4 className="font-bold text-white">CCPA/CPRA</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        California Consumer Privacy Act and California Privacy Rights Act for businesses handling
                        California resident data.
                      </p>
                    </div>
                  </div>

                  <div className="bg-darkblue p-6 rounded-lg border border-muted my-8">
                    <div className="flex items-start">
                      <AlertTriangle className="h-6 w-6 text-teal mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-white">Compliance Gap Identification</h4>
                        <p className="text-muted-foreground mt-2">
                          Our assessment will identify gaps in your current compliance posture and provide practical
                          recommendations for addressing them. We'll help you understand which requirements are most
                          critical for your business and develop a prioritized roadmap for achieving compliance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-8">Benefits of Compliance Guidance</h3>
                  <p className="text-muted-foreground text-lg">
                    Working with Step Stone Security for compliance guidance provides several benefits:
                  </p>
                  <ul className="space-y-2 my-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Reduced risk of non-compliance penalties and fines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Improved security posture through compliance requirements
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Enhanced customer trust and confidence</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Competitive advantage in regulated industries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Streamlined audit processes</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/3 space-y-8">
                <div className="bg-darkblue p-6 rounded-lg border border-muted sticky top-24">
                  <h3 className="text-xl font-bold text-white mb-4">Ready to navigate compliance requirements?</h3>
                  <p className="text-muted-foreground mb-6">
                    Subscribe to our fractional cybersecurity team and get expert compliance guidance tailored to your
                    business.
                  </p>
                  <div className="space-y-4">
                    <Link href="/pricing">
                      <Button className="w-full bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white">
                        Subscribe Now
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-muted hover:border-white text-white">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-6 pt-6 border-t border-muted">
                    <h4 className="font-medium text-white mb-2">Our Compliance Guidance includes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Compliance gap analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Security policy development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Documentation preparation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Audit preparation assistance</span>
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
                <h3 className="text-xl font-bold text-white mb-4">Security Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive evaluation of your organization's security posture to identify vulnerabilities.
                </p>
                <Link
                  href="/services/security-assessment"
                  className="inline-flex items-center text-teal hover:text-purple"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-darknavy p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-bold text-white mb-4">Security Training</h3>
                <p className="text-muted-foreground mb-4">
                  Empower your team with the knowledge to recognize and prevent security threats through customized
                  training.
                </p>
                <Link
                  href="/services/security-training"
                  className="inline-flex items-center text-teal hover:text-purple"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-darknavy p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-bold text-white mb-4">Policy Development</h3>
                <p className="text-muted-foreground mb-4">
                  Create comprehensive security policies and procedures tailored to your business needs.
                </p>
                <Link
                  href="/services/policy-development"
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
                <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to achieve compliance?</h2>
                <p className="text-muted-foreground text-lg">
                  Subscribe to our fractional cybersecurity team and get expert compliance guidance tailored to your
                  business.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <Button className="bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white px-8 py-6 text-lg">
                    Subscribe Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-muted hover:border-white text-white px-8 py-6 text-lg">
                    Contact Us
                  </Button>
                </Link>
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

