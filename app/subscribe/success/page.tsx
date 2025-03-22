import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function SubscribeSuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 py-20 bg-darknavy">
        <div className="container px-4 md:px-6">
          <Card className="max-w-2xl mx-auto bg-darkblue border-muted">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle className="text-2xl text-white">Appointment Scheduled!</CardTitle>
              <CardDescription className="text-muted-foreground">
                Thank you for scheduling your appointment with Step Stone Security.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-darknavy p-6 rounded-lg border border-muted">
                <h3 className="text-lg font-medium text-white mb-2">Next Steps</h3>
                <p className="text-muted-foreground mb-4">
                  Step Stone Security will contact you within 2 working days to confirm your appointment.
                </p>
                <p className="text-muted-foreground">
                  If you have any questions, please contact us at{" "}
                  <a href="mailto:sales@stepstonesecurity.com" className="text-teal hover:underline">
                    sales@stepstonesecurity.com
                  </a>
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/" className="w-full">
                <Button className="w-full bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white">
                  Return to Home
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

