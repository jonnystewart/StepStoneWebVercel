"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatBot } from "@/components/chat-bot"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, Clock, Shield, Users, Calendar } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <span className="text-white">Simple, </span>
                <span className="gradient-text">Flexible Pricing</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Choose the right level of cybersecurity support for your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-20 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Spot Checks Plan */}
              <div className="bg-darkblue rounded-lg border border-muted overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-teal" />
                    <h3 className="text-lg font-medium text-white">Spot Checks</h3>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold text-white">£45</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">£500/year (save £40) +VAT</p>
                  <p className="mt-4 text-muted-foreground">
                    Quarterly check-ins to keep your business updated on cybersecurity best practices.
                  </p>
                </div>
                <div className="border-t border-muted p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">1-hour consultancy once every 3 months</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Advice on current state of technology</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Overview of changes to your business</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Updated cybersecurity advice</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">One-page summary after each consultation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Virtual delivery</span>
                    </li>
                  </ul>
                  <div className="mt-6 space-y-3">
                    <Link href="/subscribe?plan=spot-checks">
                      <Button className="w-full bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white">
                        Subscribe Now
                      </Button>
                    </Link>
                    <Link href="/services/fractional-team">
                      <Button variant="outline" className="w-full border-muted hover:border-white text-white">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Standard Plan */}
              <div className="bg-darkblue rounded-lg border-2 border-teal/50 overflow-hidden relative transform scale-105 z-10">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-teal to-purple text-white text-xs font-bold px-3 py-1">
                  MOST POPULAR
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-teal" />
                    <h3 className="text-lg font-medium text-white">Standard</h3>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold text-white">£120</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">£1,300/year (save £140) +VAT</p>
                  <p className="mt-4 text-muted-foreground">
                    Monthly consultations with active vulnerability checks for your digital assets.
                  </p>
                </div>
                <div className="border-t border-muted p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">1-hour consultation every month</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Everything in Spot Checks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Active vulnerability checks for your website</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Web application security assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Tailored cybersecurity advice for your business</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Virtual delivery</span>
                    </li>
                  </ul>
                  <div className="mt-6 space-y-3">
                    <Link href="/subscribe?plan=standard">
                      <Button className="w-full bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white">
                        Subscribe Now
                      </Button>
                    </Link>
                    <Link href="/services/fractional-team">
                      <Button variant="outline" className="w-full border-muted hover:border-white text-white">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Fractional Team Plan */}
              <div className="bg-darkblue rounded-lg border border-muted overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-teal" />
                    <h3 className="text-lg font-medium text-white">Fractional Team</h3>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold text-white">£1,000</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">£11,500/year (save £500) +VAT</p>
                  <p className="mt-4 text-muted-foreground">
                    Your dedicated cybersecurity team, available on-site when you need them.
                  </p>
                </div>
                <div className="border-t border-muted p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">4 hours per month of dedicated security support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">On-site cybersecurity testing of your systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Prioritization of findings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Remediation advice and optional implementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">On-site advice and training for management and team</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Delivered on-site by default, virtual by agreement</span>
                    </li>
                  </ul>
                  <div className="mt-6 space-y-3">
                    <Link href="/subscribe?plan=fractional-team">
                      <Button className="w-full bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white">
                        Subscribe Now
                      </Button>
                    </Link>
                    <Link href="/services/fractional-team">
                      <Button variant="outline" className="w-full border-muted hover:border-white text-white">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 text-muted-foreground">
              <p>Additional hours available. Contact sales for pricing above these levels.</p>
            </div>
          </div>
        </section>

        {/* Plan Comparison */}
        <section className="w-full py-20 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Plan </span>
                <span className="gradient-text">Comparison</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Find the right level of security support for your business needs.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-muted">
                    <th className="py-4 px-6 text-left text-white">Feature</th>
                    <th className="py-4 px-6 text-center text-white">Spot Checks</th>
                    <th className="py-4 px-6 text-center text-teal">Standard</th>
                    <th className="py-4 px-6 text-center text-white">Fractional Team</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted">
                    <td className="py-4 px-6 text-muted-foreground">Monthly Price (ex. VAT)</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">£45</td>
                    <td className="py-4 px-6 text-center text-teal">£120</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">£1,000</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-4 px-6 text-muted-foreground">Hours of Service</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">1hr quarterly</td>
                    <td className="py-4 px-6 text-center text-teal">1hr monthly</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">4hrs monthly</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-4 px-6 text-muted-foreground">Delivery Method</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">Virtual</td>
                    <td className="py-4 px-6 text-center text-teal">Virtual</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">On-site (Virtual optional)</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-4 px-6 text-muted-foreground">Vulnerability Checks</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">—</td>
                    <td className="py-4 px-6 text-center text-teal">✓</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">✓</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-4 px-6 text-muted-foreground">Written Summary</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">One page</td>
                    <td className="py-4 px-6 text-center text-teal">Detailed report</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">Comprehensive</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-4 px-6 text-muted-foreground">On-site Training</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">—</td>
                    <td className="py-4 px-6 text-center text-teal">—</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">✓</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-4 px-6 text-muted-foreground">Remediation Implementation</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">—</td>
                    <td className="py-4 px-6 text-center text-teal">—</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">Optional</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-20 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">How It </span>
                <span className="gradient-text">Works</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our approach gives you expert security advice tailored to your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-darkblue p-8 rounded-lg border border-muted relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-teal to-purple flex items-center justify-center text-white font-bold">
                  1
                </div>
                <Clock className="h-12 w-12 mb-4 text-teal" />
                <h3 className="text-xl font-bold mb-2 text-white">Choose Your Plan</h3>
                <p className="text-muted-foreground">
                  Select the plan that fits your business needs, from quarterly check-ins to a dedicated security team.
                </p>
              </div>

              <div className="bg-darkblue p-8 rounded-lg border border-muted relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-teal to-purple flex items-center justify-center text-white font-bold">
                  2
                </div>
                <Calendar className="h-12 w-12 mb-4 text-teal" />
                <h3 className="text-xl font-bold mb-2 text-white">Schedule Appointment</h3>
                <p className="text-muted-foreground">
                  Book your first appointment at a time that works for you, Monday-Saturday between 8am-7pm UK time.
                </p>
              </div>

              <div className="bg-darkblue p-8 rounded-lg border border-muted relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-teal to-purple flex items-center justify-center text-white font-bold">
                  3
                </div>
                <AlertTriangle className="h-12 w-12 mb-4 text-teal" />
                <h3 className="text-xl font-bold mb-2 text-white">Security Assessment</h3>
                <p className="text-muted-foreground">
                  Our experts will assess your security posture and identify potential vulnerabilities based on your
                  plan.
                </p>
              </div>

              <div className="bg-darkblue p-8 rounded-lg border border-muted relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-teal to-purple flex items-center justify-center text-white font-bold">
                  4
                </div>
                <Shield className="h-12 w-12 mb-4 text-teal" />
                <h3 className="text-xl font-bold mb-2 text-white">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Receive regular consultations and written summaries to help improve your security posture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Frequently </span>
                <span className="gradient-text">Asked Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Find answers to common questions about our pricing and services.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">What's included in the virtual consultation?</h3>
                <p className="text-muted-foreground">
                  Our virtual consultations include discussions about your current security posture, technology updates,
                  business changes, and tailored cybersecurity advice for your specific situation.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">How do the vulnerability checks work?</h3>
                <p className="text-muted-foreground">
                  We use freely available tools to perform basic assessments of your websites and web applications,
                  identifying potential vulnerabilities and providing recommendations for addressing them.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Can I upgrade my plan later?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade your plan at any time. We'll prorate the difference and apply it to your next
                  billing cycle.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">What's the difference between the plans?</h3>
                <p className="text-muted-foreground">
                  Spot Checks provides quarterly consultations with basic advice, Standard adds monthly consultations
                  and active vulnerability checks, and Fractional Team offers on-site support with comprehensive
                  services.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Can I purchase additional hours?</h3>
                <p className="text-muted-foreground">
                  Yes, additional hours are available for all plans. Contact our sales team at
                  sales@stepstonesecurity.com for pricing and availability.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">What if I need help between scheduled consultations?</h3>
                <p className="text-muted-foreground">
                  You can reach out via email for additional support. Fractional Team clients receive priority response
                  times for urgent issues.
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
                  Choose the plan that's right for your business and get expert cybersecurity advice tailored to your
                  needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                >
                  <Button className="bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white px-8 py-6 text-lg">
                    Subscribe Now
                  </Button>
                </Link>
                <Button variant="outline" asChild>
                  <a
                    href="mailto:sales@stepstonesecurity.com"
                    className="border-muted hover:border-white text-white px-8 py-6 text-lg"
                  >
                    Contact Sales
                  </a>
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

