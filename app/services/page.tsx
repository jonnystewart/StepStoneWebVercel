import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatBot } from "@/components/chat-bot"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Server, CheckCircle, ArrowRight, Code, Globe, FileText } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <span className="text-white">Our </span>
                <span className="gradient-text">Security Services</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Expert cybersecurity advice and assessment tailored specifically for small and medium-sized businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full py-16 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">Your Fractional Cybersecurity Team</h2>
              <p className="text-muted-foreground text-lg">
                At Step Stone Security, we understand that small and medium-sized businesses face the same cybersecurity
                threats as large enterprises, but often lack the resources for a full-time security team. Our fractional
                cybersecurity services provide expert protection at a fraction of the cost.
              </p>
              <p className="text-muted-foreground text-lg">
                We use freely available tools to perform basic assessments, identify potential vulnerabilities, and
                provide clear guidance on whether you need more comprehensive security measures.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full py-20 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Our Core </span>
                <span className="gradient-text">Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions designed for businesses of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-darkblue p-8 rounded-lg border border-muted group hover:border-teal transition-colors">
                <Code className="h-12 w-12 mb-4 text-teal group-hover:text-purple transition-colors" />
                <h3 className="text-xl font-bold mb-2 text-white">Code Review</h3>
                <p className="text-muted-foreground mb-4">
                  Identify security vulnerabilities in your code before they become problems. Our experts analyze your
                  codebase for common security issues.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Insecure coding patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Dependency vulnerabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Authentication flaws</span>
                  </li>
                </ul>
                <Link href="/services/code-review" className="inline-flex items-center text-teal hover:text-purple">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="bg-darkblue p-8 rounded-lg border border-muted group hover:border-teal transition-colors">
                <Server className="h-12 w-12 mb-4 text-teal group-hover:text-purple transition-colors" />
                <h3 className="text-xl font-bold mb-2 text-white">API Security</h3>
                <p className="text-muted-foreground mb-4">
                  Protect your API endpoints from security vulnerabilities and unauthorized access with our
                  comprehensive assessment.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Authentication vulnerabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Authorization flaws</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Data exposure risks</span>
                  </li>
                </ul>
                <Link href="/services/api-security" className="inline-flex items-center text-teal hover:text-purple">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Service 3 */}
              <div className="bg-darkblue p-8 rounded-lg border border-muted group hover:border-teal transition-colors">
                <Globe className="h-12 w-12 mb-4 text-teal group-hover:text-purple transition-colors" />
                <h3 className="text-xl font-bold mb-2 text-white">Web Application Security</h3>
                <p className="text-muted-foreground mb-4">
                  Protect your web applications from common vulnerabilities and attacks with our thorough security
                  assessment.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Cross-site scripting (XSS)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">SQL injection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Authentication flaws</span>
                  </li>
                </ul>
                <Link
                  href="/services/web-application-security"
                  className="inline-flex items-center text-teal hover:text-purple"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Service 4 */}
              <div className="bg-darkblue p-8 rounded-lg border border-muted group hover:border-teal transition-colors">
                <Shield className="h-12 w-12 mb-4 text-teal group-hover:text-purple transition-colors" />
                <h3 className="text-xl font-bold mb-2 text-white">Security Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive evaluation of your organization's security posture to identify vulnerabilities and
                  recommend improvements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Infrastructure security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Network vulnerability scanning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Security policy review</span>
                  </li>
                </ul>
                <Link
                  href="/services/security-assessment"
                  className="inline-flex items-center text-teal hover:text-purple"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Service 5 */}
              <div className="bg-darkblue p-8 rounded-lg border border-muted group hover:border-teal transition-colors">
                <FileText className="h-12 w-12 mb-4 text-teal group-hover:text-purple transition-colors" />
                <h3 className="text-xl font-bold mb-2 text-white">Compliance Guidance</h3>
                <p className="text-muted-foreground mb-4">
                  Navigate complex security regulations with expert guidance tailored to your industry requirements.
                </p>
                <ul className="space-y-2 mb-6">
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
                    <span className="text-muted-foreground">Audit preparation</span>
                  </li>
                </ul>
                <Link href="/services/compliance" className="inline-flex items-center text-teal hover:text-purple">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Service 6 */}
              <div className="bg-darkblue p-8 rounded-lg border border-muted group hover:border-teal transition-colors">
                <Lock className="h-12 w-12 mb-4 text-teal group-hover:text-purple transition-colors" />
                <h3 className="text-xl font-bold mb-2 text-white">Security Training</h3>
                <p className="text-muted-foreground mb-4">
                  Empower your team with the knowledge to recognize and prevent security threats through customized
                  training.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Phishing awareness</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Password best practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Social engineering defense</span>
                  </li>
                </ul>
                <Link
                  href="/services/security-training"
                  className="inline-flex items-center text-teal hover:text-purple"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-20 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Our </span>
                <span className="gradient-text">Process</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                How we work with you to secure your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-darknavy p-8 rounded-lg border border-muted relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-teal to-purple flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Initial Assessment</h3>
                <p className="text-muted-foreground">
                  We begin with a thorough assessment of your current security posture, identifying potential
                  vulnerabilities and areas for improvement.
                </p>
              </div>

              <div className="bg-darknavy p-8 rounded-lg border border-muted relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-teal to-purple flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Vulnerability Testing</h3>
                <p className="text-muted-foreground">
                  Using freely available tools, we perform basic security tests to identify vulnerabilities in your
                  systems, applications, and infrastructure.
                </p>
              </div>

              <div className="bg-darknavy p-8 rounded-lg border border-muted relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-teal to-purple flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Findings & Recommendations</h3>
                <p className="text-muted-foreground">
                  We provide a clear report of our findings, prioritized by risk level, along with practical
                  recommendations for remediation.
                </p>
              </div>

              <div className="bg-darknavy p-8 rounded-lg border border-muted relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-teal to-purple flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  We provide ongoing support and guidance to help you implement our recommendations and continuously
                  improve your security posture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="w-full py-20 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Industries We </span>
                <span className="gradient-text">Serve</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our cybersecurity expertise spans across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-darkblue p-6 rounded-lg border border-muted text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal/20 to-purple/20 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Financial Services</h3>
                <p className="text-muted-foreground">
                  Protecting sensitive financial data and ensuring compliance with industry regulations.
                </p>
              </div>

              <div className="bg-darkblue p-6 rounded-lg border border-muted text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal/20 to-purple/20 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Healthcare</h3>
                <p className="text-muted-foreground">
                  Safeguarding patient data and ensuring HIPAA compliance for healthcare providers.
                </p>
              </div>

              <div className="bg-darkblue p-6 rounded-lg border border-muted text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal/20 to-purple/20 flex items-center justify-center">
                  <Server className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Technology</h3>
                <p className="text-muted-foreground">
                  Securing software products, APIs, and infrastructure for technology companies.
                </p>
              </div>

              <div className="bg-darkblue p-6 rounded-lg border border-muted text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal/20 to-purple/20 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">E-commerce</h3>
                <p className="text-muted-foreground">
                  Protecting online stores and customer data from cyber threats and breaches.
                </p>
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
                  Subscribe to our fractional cybersecurity team and get expert security advice tailored to your
                  business needs.
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

