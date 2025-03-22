import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatBot } from "@/components/chat-bot"
import { Shield, Lock, Server, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="space-y-6 lg:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  <span className="text-white">Your </span>
                  <span className="gradient-text">Fractional</span>
                  <span className="text-white"> Cybersecurity </span>
                  <span className="gradient-text">Team</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                  Step Stone Security provides expert cybersecurity advice and assessment for small and medium-sized
                  businesses without the overhead of a full-time security team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/subscribe">
                    <Button className="bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white px-8 py-6 text-lg">
                      Subscribe Now
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="border-muted hover:border-white text-white px-8 py-6 text-lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative w-full h-[400px] bg-gradient-to-br from-teal/20 to-purple/20 rounded-lg overflow-hidden border border-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-teal to-purple"></div>
                  </div>
                  <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Expert Security Advice</span>
                <span className="text-white"> for Your Business</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our team of security experts provides tailored advice and assessments for your specific business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-darkblue p-8 rounded-lg border border-muted">
                <Shield className="h-12 w-12 mb-4 text-teal" />
                <h3 className="text-xl font-bold mb-2 text-white">Security Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Identify vulnerabilities in your websites, applications, and systems with our thorough security
                  assessment.
                </p>
                <Link href="/products/risk-assessment" className="inline-flex items-center text-teal hover:text-purple">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-darkblue p-8 rounded-lg border border-muted">
                <Lock className="h-12 w-12 mb-4 text-teal" />
                <h3 className="text-xl font-bold mb-2 text-white">Code & API Review</h3>
                <p className="text-muted-foreground mb-4">
                  Expert review of your code and APIs to identify security flaws before they become problems.
                </p>
                <Link
                  href="/products/threat-monitoring"
                  className="inline-flex items-center text-teal hover:text-purple"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-darkblue p-8 rounded-lg border border-muted">
                <Server className="h-12 w-12 mb-4 text-teal" />
                <h3 className="text-xl font-bold mb-2 text-white">Compliance Guidance</h3>
                <p className="text-muted-foreground mb-4">
                  Navigate complex security regulations with expert guidance tailored to your industry requirements.
                </p>
                <Link href="/products/compliance" className="inline-flex items-center text-teal hover:text-purple">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Trusted by </span>
                <span className="gradient-text">Growing Businesses</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                See what our customers have to say about our cybersecurity solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-darknavy p-8 rounded-lg border border-muted">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal to-purple mr-4"></div>
                  <div>
                    <h4 className="font-bold text-white">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">CTO, TechStart Inc.</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Step Stone Security has transformed how we approach cybersecurity. Their platform is intuitive and
                  their team is always available to help."
                </p>
              </div>
              <div className="bg-darknavy p-8 rounded-lg border border-muted">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal to-purple mr-4"></div>
                  <div>
                    <h4 className="font-bold text-white">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">CEO, HealthPlus</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As a healthcare provider, security is paramount. Step Stone Security helps us stay compliant and
                  protect our patients' data."
                </p>
              </div>
              <div className="bg-darknavy p-8 rounded-lg border border-muted">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal to-purple mr-4"></div>
                  <div>
                    <h4 className="font-bold text-white">Lisa Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">IT Director, Finance Solutions</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The threat monitoring service has already prevented several potential breaches. Worth every penny for
                  the peace of mind alone."
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
                  Subscribe to our fractional cybersecurity team starting at just 4 hours per month.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/subscribe">
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

