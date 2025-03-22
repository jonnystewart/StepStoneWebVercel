import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatBot } from "@/components/chat-bot"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <span className="text-white">Get in </span>
                <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Have questions about our cybersecurity services? Our team is here to help you secure your business.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options Section */}
        <section className="w-full py-12 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-darkblue p-6 rounded-lg border border-muted">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-teal mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Email Us</h3>
                    <p className="text-muted-foreground">For general inquiries:</p>
                    <a href="mailto:info@stepstonesecurity.com" className="text-teal hover:underline">
                      info@stepstonesecurity.com
                    </a>
                    <p className="text-muted-foreground mt-2">For sales inquiries:</p>
                    <a href="mailto:sales@stepstonesecurity.com" className="text-teal hover:underline">
                      sales@stepstonesecurity.com
                    </a>
                    <p className="text-muted-foreground mt-2">For support:</p>
                    <a href="mailto:support@stepstonesecurity.com" className="text-teal hover:underline">
                      support@stepstonesecurity.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-darkblue p-6 rounded-lg border border-muted">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-teal mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Call Us</h3>
                    <p className="text-muted-foreground">Main Office:</p>
                    <p className="text-white">+44 (0) 123 456 7890</p>
                    <div className="flex items-center mt-2 text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Monday-Friday, 9am-5pm GMT</span>
                    </div>
                    <p className="text-muted-foreground mt-2">Emergency Support:</p>
                    <p className="text-white">+44 (0) 123 456 7899</p>
                    <div className="flex items-center mt-2 text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>24/7 for subscribers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-darkblue p-6 rounded-lg border border-muted">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-teal mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">Headquarters:</p>
                    <address className="not-italic text-white">
                      123 Security Street
                      <br />
                      Suite 101
                      <br />
                      London, EC1A 1BB
                      <br />
                      United Kingdom
                    </address>
                    <div className="flex items-center mt-2 text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>By appointment only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-20 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <div className="bg-darkblue p-8 rounded-lg border border-muted">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Send us a message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium text-muted-foreground">
                          First name
                        </label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                          className="bg-darknavy border-muted focus-visible:ring-teal"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium text-muted-foreground">
                          Last name
                        </label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                          className="bg-darknavy border-muted focus-visible:ring-teal"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-darknavy border-muted focus-visible:ring-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                        Phone (optional)
                      </label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        className="bg-darknavy border-muted focus-visible:ring-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-muted-foreground">
                        Company
                      </label>
                      <Input
                        id="company"
                        placeholder="Enter your company name"
                        className="bg-darknavy border-muted focus-visible:ring-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="inquiry-type" className="text-sm font-medium text-muted-foreground">
                        Inquiry type
                      </label>
                      <Select>
                        <SelectTrigger className="bg-darknavy border-muted focus:ring-teal">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-darkblue border-muted">
                          <SelectItem value="general">General inquiry</SelectItem>
                          <SelectItem value="subscription">Subscription information</SelectItem>
                          <SelectItem value="assessment">Security assessment</SelectItem>
                          <SelectItem value="consultation">Security consultation</SelectItem>
                          <SelectItem value="support">Technical support</SelectItem>
                          <SelectItem value="partnership">Partnership opportunity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        className="min-h-[150px] bg-darknavy border-muted focus-visible:ring-teal"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
              <div className="lg:w-1/3 space-y-8">
                <div className="bg-darkblue p-6 rounded-lg border border-muted">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Response</h3>
                  <p className="text-muted-foreground mb-4">
                    We aim to respond to all inquiries within 24 business hours. For faster service, consider:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MessageSquare className="h-5 w-5 text-teal mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Live Chat</h4>
                        <p className="text-sm text-muted-foreground">
                          Use our chat bot for immediate assistance with common questions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-teal mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Schedule a Call</h4>
                        <p className="text-sm text-muted-foreground">
                          Book a 15-minute consultation with one of our security experts.
                        </p>
                        <Link href="/schedule" className="text-sm text-teal hover:underline mt-1 inline-block">
                          Schedule now →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-darkblue p-6 rounded-lg border border-muted">
                  <h3 className="text-xl font-bold text-white mb-4">Subscribe for Updates</h3>
                  <p className="text-muted-foreground mb-4">
                    Stay informed about the latest cybersecurity threats and best practices.
                  </p>
                  <div className="space-y-4">
                    <Input
                      placeholder="Enter your email"
                      className="bg-darknavy border-muted focus-visible:ring-teal"
                    />
                    <Button className="w-full bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white">
                      Subscribe
                    </Button>
                  </div>
                </div>

                <div className="bg-darkblue p-6 rounded-lg border border-muted">
                  <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with us on social media for security tips and company updates.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com/stepstonesecurity" className="text-muted-foreground hover:text-teal">
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
                        className="h-6 w-6"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="https://twitter.com/stepstonesecurity" className="text-muted-foreground hover:text-teal">
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
                        className="h-6 w-6"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href="https://linkedin.com/company/stepstonesecurity"
                      className="text-muted-foreground hover:text-teal"
                    >
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
                        className="h-6 w-6"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full py-12 bg-darkblue">
          <div className="container px-4 md:px-6">
            <div className="relative w-full h-[400px] bg-gradient-to-br from-teal/20 to-purple/20 rounded-lg overflow-hidden border border-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-teal" />
                <span className="text-white text-xl font-bold ml-2">London Office</span>
              </div>
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 bg-darknavy">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Frequently </span>
                <span className="gradient-text">Asked Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Find quick answers to common questions about our services.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">How quickly can I get started with your services?</h3>
                <p className="text-muted-foreground">
                  We can typically schedule an initial consultation within 48 hours of your subscription. From there,
                  we'll work with you to prioritize security activities based on your business needs.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">What if I have an urgent security concern?</h3>
                <p className="text-muted-foreground">
                  Subscribers receive priority response for urgent security concerns. While we're not an emergency
                  incident response service, we can provide guidance and connect you with specialized resources if
                  needed.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Do you offer remote services?</h3>
                <p className="text-muted-foreground">
                  Yes, our Spot Checks and Standard plans are delivered virtually by default. Our Fractional Team plan
                  is delivered on-site by default, but can be provided virtually by agreement.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">How do I know which plan is right for my business?</h3>
                <p className="text-muted-foreground">
                  We recommend scheduling a free 15-minute consultation call where we can discuss your specific security
                  needs and recommend the most appropriate plan. You can also contact us at sales@stepstonesecurity.com
                  for personalized guidance.
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
                  Subscribe to our fractional cybersecurity team and get expert advice tailored to your business.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <Button className="bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white px-8 py-6 text-lg">
                    Subscribe Now
                  </Button>
                </Link>
                <Button variant="outline" className="border-muted hover:border-white text-white px-8 py-6 text-lg">
                  Contact Us
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

