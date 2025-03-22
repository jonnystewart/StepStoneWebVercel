import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatBot } from "@/components/chat-bot"
import { Button } from "@/components/ui/button"
import { Shield, Users, Award, Lightbulb, Target, Zap, Heart, Clock } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
                  <span className="text-white">About </span>
                  <span className="gradient-text">Step Stone Security</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                  We're on a mission to make expert cybersecurity advice accessible to small and medium-sized businesses
                  without the overhead of a full-time security team.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="relative w-full h-[400px] bg-gradient-to-br from-teal/20 to-purple/20 rounded-lg overflow-hidden border border-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="h-32 w-32 text-teal" />
                  </div>
                  <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="w-full py-20 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Our </span>
                <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                At Step Stone Security, our mission is to democratize cybersecurity expertise, making it accessible and
                affordable for businesses of all sizes. We believe that every organization deserves robust security
                protection, regardless of their size or budget.
              </p>
              <p className="text-muted-foreground text-lg">
                Through our fractional cybersecurity team model, we provide expert security advice, vulnerability
                assessments, and practical recommendations that help businesses identify and address security risks
                before they become problems.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-20 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2">
                <div className="relative w-full h-[400px] bg-gradient-to-br from-teal/20 to-purple/20 rounded-lg overflow-hidden border border-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-teal to-purple"></div>
                  </div>
                  <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                </div>
              </div>
              <div className="space-y-6 lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-white">Our </span>
                  <span className="gradient-text">Story</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Step Stone Security was founded in 2018 by a team of cybersecurity experts who recognized a critical
                  gap in the market: small and medium-sized businesses were being left vulnerable to cyber threats
                  because they couldn't afford full-time security staff.
                </p>
                <p className="text-muted-foreground text-lg">
                  We set out to change that by creating a fractional cybersecurity team model that makes expert security
                  advice accessible and affordable for businesses of all sizes. Today, we protect thousands of
                  businesses across various industries, helping them identify vulnerabilities and implement practical
                  security measures.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our approach is straightforward: we use freely available tools to perform basic assessments, identify
                  potential vulnerabilities, and provide clear guidance on whether you need more comprehensive security
                  measures. We believe in transparency, practicality, and building long-term relationships with our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="w-full py-20 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Our </span>
                <span className="gradient-text">Values</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                These core principles guide everything we do at Step Stone Security.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-darkblue p-8 rounded-lg border border-muted">
                <Shield className="h-12 w-12 mb-4 text-teal" />
                <h3 className="text-xl font-bold mb-2 text-white">Security First</h3>
                <p className="text-muted-foreground">
                  We never compromise on security. Our solutions are built with the highest standards to protect your
                  business from evolving cyber threats.
                </p>
              </div>
              <div className="bg-darkblue p-8 rounded-lg border border-muted">
                <Users className="h-12 w-12 mb-4 text-purple" />
                <h3 className="text-xl font-bold mb-2 text-white">Customer Focus</h3>
                <p className="text-muted-foreground">
                  We put our customers at the center of everything we do, ensuring our solutions meet their unique needs
                  and business objectives.
                </p>
              </div>
              <div className="bg-darkblue p-8 rounded-lg border border-muted">
                <Award className="h-12 w-12 mb-4 text-teal" />
                <h3 className="text-xl font-bold mb-2 text-white">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in all aspects of our business, from security assessments to customer support
                  and ongoing guidance.
                </p>
              </div>
              <div className="bg-darkblue p-8 rounded-lg border border-muted">
                <Lightbulb className="h-12 w-12 mb-4 text-purple" />
                <h3 className="text-xl font-bold mb-2 text-white">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously innovate to stay ahead of evolving cyber threats and provide cutting-edge solutions
                  that address the latest security challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-20 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Why Choose </span>
                <span className="gradient-text">Step Stone Security</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                What sets us apart from other cybersecurity providers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-darknavy p-8 rounded-lg border border-muted">
                <div className="flex items-start">
                  <Target className="h-12 w-12 mr-4 text-teal" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Tailored for SMBs</h3>
                    <p className="text-muted-foreground">
                      Our services are specifically designed for small and medium-sized businesses, with pricing and
                      solutions that fit your budget and needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-darknavy p-8 rounded-lg border border-muted">
                <div className="flex items-start">
                  <Zap className="h-12 w-12 mr-4 text-purple" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Practical Approach</h3>
                    <p className="text-muted-foreground">
                      We focus on practical, actionable security measures that provide real protection without
                      unnecessary complexity or expense.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-darknavy p-8 rounded-lg border border-muted">
                <div className="flex items-start">
                  <Heart className="h-12 w-12 mr-4 text-teal" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Relationship-Focused</h3>
                    <p className="text-muted-foreground">
                      We build long-term relationships with our clients, becoming a trusted partner in their
                      cybersecurity journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-darknavy p-8 rounded-lg border border-muted">
                <div className="flex items-start">
                  <Clock className="h-12 w-12 mr-4 text-purple" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Flexible Engagement</h3>
                    <p className="text-muted-foreground">
                      Our subscription model allows you to access expert security advice when you need it, without the
                      overhead of a full-time security team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-20 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Meet Our </span>
                <span className="gradient-text">Leadership Team</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our team of experts brings decades of experience in cybersecurity, technology, and business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-darkblue p-6 rounded-lg border border-muted">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal to-purple"></div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">Jonny Stewart</h3>
                  <p className="text-teal mb-2">CEO & Founder</p>
                  <p className="text-muted-foreground text-sm">
                    A veteran of the cybersecurity industry residing in the UK. Jonny has led security teams at Fortune
                    500 companies and brings a wealth of knowledge in building effective security programs for
                    businesses of all sizes.
                  </p>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="bg-darkblue p-6 rounded-lg border border-muted">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal to-purple"></div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">Michael Chen</h3>
                  <p className="text-teal mb-2">CTO & Co-Founder</p>
                  <p className="text-muted-foreground text-sm">
                    Security researcher and engineer with expertise in threat detection and incident response. Michael
                    has discovered multiple zero-day vulnerabilities and developed innovative security solutions
                    throughout his career.
                  </p>
                </div>
              </div>
              {/* Team Member 3 */}
              <div className="bg-darkblue p-6 rounded-lg border border-muted">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal to-purple"></div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">David Rodriguez</h3>
                  <p className="text-teal mb-2">VP of Product</p>
                  <p className="text-muted-foreground text-sm">
                    Product leader with a background in building security solutions for regulated industries. David
                    specializes in translating complex security concepts into practical, user-friendly solutions for
                    businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">What Our </span>
                <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Hear from businesses that have transformed their security posture with Step Stone Security.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-darknavy p-8 rounded-lg border border-muted">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal to-purple mr-4"></div>
                  <div>
                    <h4 className="font-bold text-white">Emily Thompson</h4>
                    <p className="text-sm text-muted-foreground">CTO, FinTech Innovations</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Step Stone Security has been an invaluable partner for our growing fintech company. Their fractional
                  security team model gives us access to expertise we couldn't otherwise afford, and their practical
                  recommendations have significantly improved our security posture."
                </p>
              </div>
              <div className="bg-darknavy p-8 rounded-lg border border-muted">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal to-purple mr-4"></div>
                  <div>
                    <h4 className="font-bold text-white">James Wilson</h4>
                    <p className="text-sm text-muted-foreground">IT Director, MedTech Solutions</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As a healthcare technology provider, security is paramount. Step Stone Security helps us stay
                  compliant with regulations while ensuring our patient data remains protected. Their team is
                  knowledgeable, responsive, and genuinely cares about our success."
                </p>
              </div>
              <div className="bg-darknavy p-8 rounded-lg border border-muted">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal to-purple mr-4"></div>
                  <div>
                    <h4 className="font-bold text-white">Sophia Martinez</h4>
                    <p className="text-sm text-muted-foreground">CEO, E-commerce Experts</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "After experiencing a security incident with our previous provider, we switched to Step Stone
                  Security. Their thorough assessment identified vulnerabilities we weren't aware of, and their ongoing
                  support has given us peace of mind that our customer data is secure."
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
                <h2 className="text-3xl md:text-4xl font-bold text-white">Join our mission to secure SMBs</h2>
                <p className="text-muted-foreground text-lg">
                  Subscribe to our fractional cybersecurity team and get expert advice tailored to your business.
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

