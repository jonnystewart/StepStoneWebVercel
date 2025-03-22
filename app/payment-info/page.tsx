import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, DollarSign, Building, ShieldCheck, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PaymentInfoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 py-12 bg-darknavy">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">Payment Processing Information</h1>

            <Card className="bg-darkblue border-muted mb-8">
              <CardHeader>
                <CardTitle className="text-white">How Our Payment System Works</CardTitle>
                <CardDescription>Understanding the payment flow for Step Stone Security subscriptions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CreditCard className="h-6 w-6 text-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Secure Payment Processing</h3>
                      <p className="text-muted-foreground">
                        Step Stone Security uses Stripe for all payment processing. Stripe is a PCI-DSS Level 1
                        certified payment processor, which is the highest level of certification available in the
                        payments industry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <ShieldCheck className="h-6 w-6 text-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Data Security</h3>
                      <p className="text-muted-foreground">
                        Your payment information never touches our servers. When you enter your credit card details, the
                        information is sent directly to Stripe through a secure connection. We only receive a token that
                        represents your payment method.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <DollarSign className="h-6 w-6 text-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Billing Process</h3>
                      <p className="text-muted-foreground">
                        When you subscribe to one of our plans, your card will be charged immediately for the first
                        billing period (monthly or yearly). For recurring payments, your card will be automatically
                        charged at the beginning of each new billing period.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Building className="h-6 w-6 text-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Fund Disbursement</h3>
                      <p className="text-muted-foreground">
                        Payments are processed by Stripe and deposited directly into our company bank account.
                        Typically, funds are available within 2 business days of the transaction. You'll receive an
                        email receipt for each payment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-darknavy p-6 rounded-lg border border-muted">
                  <h3 className="text-lg font-medium text-white mb-3">Setting Up Your Own Payment System</h3>
                  <p className="text-muted-foreground mb-4">
                    To set up this payment system for your business, you would need to:
                  </p>
                  <ol className="space-y-2 text-muted-foreground list-decimal pl-5">
                    <li>
                      Create a Stripe account at{" "}
                      <a
                        href="https://stripe.com"
                        className="text-teal hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        stripe.com
                      </a>
                    </li>
                    <li>Complete the Stripe onboarding process, including connecting your bank account</li>
                    <li>Obtain your API keys from the Stripe dashboard</li>
                    <li>
                      Integrate Stripe using their official libraries (we recommend Stripe Elements for the frontend and
                      Stripe API for the backend)
                    </li>
                    <li>Set up webhooks to handle events like successful payments, failed payments, etc.</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Link href="/pricing">
                <Button variant="outline" className="border-muted hover:border-white text-white">
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  Back to Pricing
                </Button>
              </Link>
              <Link href="/subscribe">
                <Button className="bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white">
                  Subscribe Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

