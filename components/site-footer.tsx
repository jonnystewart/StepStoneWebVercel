import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-darkblue border-t border-muted">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-sm bg-gradient-to-r from-teal to-purple"></div>
              <span className="font-bold text-xl text-white">Step Stone Security</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your fractional cybersecurity team. We provide expert security advice and assessment for small and
              medium-sized businesses without the overhead of a full-time security staff.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/stepstonesecurity" className="text-muted-foreground hover:text-teal">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com/stepstonesecurity" className="text-muted-foreground hover:text-teal">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/stepstonesecurity"
                className="text-muted-foreground hover:text-teal"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://instagram.com/stepstonesecurity" className="text-muted-foreground hover:text-teal">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/security-assessment" className="text-muted-foreground hover:text-teal">
                  Security Assessment
                </Link>
              </li>
              <li>
                <Link href="/services/code-review" className="text-muted-foreground hover:text-teal">
                  Code & API Review
                </Link>
              </li>
              <li>
                <Link href="/services/compliance" className="text-muted-foreground hover:text-teal">
                  Compliance Guidance
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-muted-foreground hover:text-teal">
                  Security Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-teal">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-teal">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-teal">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-teal">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/guides" className="text-muted-foreground hover:text-teal">
                  Security Guides
                </Link>
              </li>
              <li>
                <Link href="/resources/webinars" className="text-muted-foreground hover:text-teal">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/resources/tools" className="text-muted-foreground hover:text-teal">
                  Free Tools
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="text-muted-foreground hover:text-teal">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-muted mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Step Stone Security. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-muted-foreground hover:text-teal text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-teal text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

