"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle, CreditCard, InfoIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"

export default function SubscribePage() {
  const searchParams = useSearchParams()
  const [selectedPlan, setSelectedPlan] = useState("")
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
    country: "United Kingdom",
    billingType: "monthly",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const plan = searchParams.get("plan")
    if (plan) {
      setSelectedPlan(plan)
    }
  }, [searchParams])

  const plans = [
    {
      id: "spot-checks",
      name: "Spot Checks",
      description: "Quarterly check-ins to keep your business updated on cybersecurity best practices.",
      monthlyPrice: "£45",
      yearlyPrice: "£500",
      features: [
        "1-hour consultancy once every 3 months",
        "Advice on current state of technology",
        "Overview of changes to your business",
        "Updated cybersecurity advice",
        "One-page summary after each consultation",
        "Virtual delivery",
      ],
    },
    {
      id: "standard",
      name: "Standard",
      description: "Monthly consultations with active vulnerability checks for your digital assets.",
      monthlyPrice: "£120",
      yearlyPrice: "£1,300",
      features: [
        "1-hour consultation every month",
        "Everything in Spot Checks",
        "Active vulnerability checks for your website",
        "Web application security assessment",
        "Tailored cybersecurity advice for your business",
        "Virtual delivery",
      ],
    },
    {
      id: "fractional-team",
      name: "Fractional Team",
      description: "Your dedicated cybersecurity team, available on-site when you need them.",
      monthlyPrice: "£1,000",
      yearlyPrice: "£11,500",
      features: [
        "4 hours per month of dedicated security support",
        "On-site cybersecurity testing of your systems",
        "Prioritization of findings",
        "Remediation advice and optional implementation",
        "On-site advice and training for management and team",
        "Delivered on-site by default, virtual by agreement",
      ],
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId)
  }

  const handleBillingTypeChange = (value) => {
    setFormData((prev) => ({ ...prev, billingType: value }))
  }

  const handleNextStep = () => {
    if (step === 1 && !selectedPlan) {
      setError("Please select a plan to continue.")
      return
    }

    if (step === 2) {
      // Validate form
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
        setError("Please fill in all required fields.")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email address.")
        return
      }
    }

    setError("")
    setStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // This would be replaced with actual Stripe integration
      // For now, we'll simulate a successful payment

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Send confirmation email to sales
      // This would be handled by a server action in a real implementation
      console.log("Sending confirmation email to sales@stepstonesecurity.com", {
        plan: plans.find((p) => p.id === selectedPlan),
        customer: formData,
        billingType: formData.billingType,
      })

      setIsSuccess(true)
    } catch (err) {
      setError("There was an error processing your payment. Please try again or contact support.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getSelectedPlanPrice = () => {
    const plan = plans.find((p) => p.id === selectedPlan)
    if (!plan) return { monthly: "£0", yearly: "£0" }

    return {
      monthly: plan.monthlyPrice,
      yearly: plan.yearlyPrice,
    }
  }

  if (isSuccess) {
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
                <CardTitle className="text-2xl text-white">Subscription Successful!</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Thank you for subscribing to Step Stone Security.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-darknavy p-6 rounded-lg border border-muted">
                  <h3 className="text-lg font-medium text-white mb-2">Next Steps</h3>
                  <p className="text-muted-foreground mb-4">
                    We've sent a confirmation email to your inbox. Step Stone Security will contact you within 2 working
                    days to confirm your first appointment.
                  </p>
                  <p className="text-muted-foreground">
                    If you have any questions, please contact us at{" "}
                    <a href="mailto:sales@stepstonesecurity.com" className="text-teal hover:underline">
                      sales@stepstonesecurity.com
                    </a>
                  </p>
                </div>

                <div className="bg-darknavy p-6 rounded-lg border border-muted">
                  <h3 className="text-lg font-medium text-white mb-2">Your Subscription Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Plan:</span>
                      <span className="text-white font-medium">{plans.find((p) => p.id === selectedPlan)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Billing:</span>
                      <span className="text-white font-medium">
                        {formData.billingType === "monthly" ? "Monthly" : "Yearly"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="text-white font-medium">
                        {formData.billingType === "monthly"
                          ? getSelectedPlanPrice().monthly
                          : getSelectedPlanPrice().yearly}{" "}
                        +VAT
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white"
                  onClick={() => (window.location.href = "/")}
                >
                  Return to Home
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 py-20 bg-darknavy">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-white mb-2">Subscribe to Step Stone Security</h1>
              <div className="flex items-center space-x-4">
                <div className={`flex items-center ${step >= 1 ? "text-teal" : "text-muted-foreground"}`}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal to-purple flex items-center justify-center text-white font-bold mr-2">
                    1
                  </div>
                  <span>Select Plan</span>
                </div>
                <div className={`h-0.5 w-10 ${step >= 2 ? "bg-teal" : "bg-muted"}`}></div>
                <div className={`flex items-center ${step >= 2 ? "text-teal" : "text-muted-foreground"}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2 ${step >= 2 ? "bg-gradient-to-r from-teal to-purple text-white" : "bg-muted text-muted-foreground"}`}
                  >
                    2
                  </div>
                  <span>Your Details</span>
                </div>
                <div className={`h-0.5 w-10 ${step >= 3 ? "bg-teal" : "bg-muted"}`}></div>
                <div className={`flex items-center ${step >= 3 ? "text-teal" : "text-muted-foreground"}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2 ${step >= 3 ? "bg-gradient-to-r from-teal to-purple text-white" : "bg-muted text-muted-foreground"}`}
                  >
                    3
                  </div>
                  <span>Payment</span>
                </div>
              </div>
            </div>

            {error && (
              <Alert variant="destructive" className="mb-6 bg-red-900/20 border-red-900 text-red-300">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Choose Your Plan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {plans.map((plan) => (
                    <Card
                      key={plan.id}
                      className={`bg-darkblue border-2 cursor-pointer transition-all ${
                        selectedPlan === plan.id ? "border-teal" : "border-muted hover:border-muted-foreground"
                      }`}
                      onClick={() => handlePlanSelect(plan.id)}
                    >
                      <CardHeader>
                        <CardTitle className="text-white">{plan.name}</CardTitle>
                        <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Tabs defaultValue="monthly" className="w-full">
                          <TabsList className="grid w-full grid-cols-2 bg-darknavy">
                            <TabsTrigger value="monthly">Monthly</TabsTrigger>
                            <TabsTrigger value="yearly">Yearly (Save)</TabsTrigger>
                          </TabsList>
                          <TabsContent value="monthly" className="mt-4">
                            <div className="text-3xl font-bold text-white mb-1">
                              {plan.monthlyPrice}
                              <span className="text-sm font-normal text-muted-foreground">/month</span>
                            </div>
                            <p className="text-sm text-muted-foreground">+VAT</p>
                          </TabsContent>
                          <TabsContent value="yearly" className="mt-4">
                            <div className="text-3xl font-bold text-white mb-1">
                              {plan.yearlyPrice}
                              <span className="text-sm font-normal text-muted-foreground">/year</span>
                            </div>
                            <p className="text-sm text-muted-foreground">+VAT</p>
                          </TabsContent>
                        </Tabs>
                        <div className="mt-6 space-y-2">
                          {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        {selectedPlan === plan.id && (
                          <div className="w-full text-center text-teal font-medium">Selected</div>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-end mt-8">
                  <Button
                    className="bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white"
                    onClick={handleNextStep}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Your Details</h2>
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Contact Information</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Please provide your contact details for your subscription.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-muted-foreground">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="bg-darknavy border-muted focus-visible:ring-teal"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-muted-foreground">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="bg-darknavy border-muted focus-visible:ring-teal"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-muted-foreground">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-darknavy border-muted focus-visible:ring-teal"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-muted-foreground">
                          Company Name *
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-darknavy border-muted focus-visible:ring-teal"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-muted-foreground">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-darknavy border-muted focus-visible:ring-teal"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-muted-foreground">
                          Address
                        </Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="bg-darknavy border-muted focus-visible:ring-teal"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="city" className="text-muted-foreground">
                            City
                          </Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="bg-darknavy border-muted focus-visible:ring-teal"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postcode" className="text-muted-foreground">
                            Postcode
                          </Label>
                          <Input
                            id="postcode"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleInputChange}
                            className="bg-darknavy border-muted focus-visible:ring-teal"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-muted-foreground">
                          Country
                        </Label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="bg-darknavy border-muted focus-visible:ring-teal"
                        />
                      </div>
                    </form>
                  </CardContent>
                </Card>
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    className="border-muted hover:border-white text-white"
                    onClick={handlePrevStep}
                  >
                    Back
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white"
                    onClick={handleNextStep}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Payment Details</h2>
                <Card className="bg-darkblue border-muted">
                  <CardHeader>
                    <CardTitle className="text-white">Subscription Summary</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Review your subscription details before payment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-darknavy p-4 rounded-lg border border-muted">
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">Plan:</span>
                        <span className="text-white font-medium">{plans.find((p) => p.id === selectedPlan)?.name}</span>
                      </div>
                      <div className="border-t border-muted my-2"></div>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white">Billing Frequency:</span>
                          <RadioGroup
                            defaultValue={formData.billingType}
                            onValueChange={handleBillingTypeChange}
                            className="flex space-x-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="monthly" id="monthly" />
                              <Label htmlFor="monthly" className="text-muted-foreground">
                                Monthly
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yearly" id="yearly" />
                              <Label htmlFor="yearly" className="text-muted-foreground">
                                Yearly (Save)
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                      <div className="border-t border-muted my-4"></div>
                      <div className="flex justify-between text-lg font-medium">
                        <span className="text-white">Total:</span>
                        <span className="text-teal">
                          {formData.billingType === "monthly"
                            ? getSelectedPlanPrice().monthly
                            : getSelectedPlanPrice().yearly}{" "}
                          +VAT
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-5 w-5 text-teal" />
                        <h3 className="text-lg font-medium text-white">Payment Method</h3>
                      </div>
                      <div className="flex justify-end mb-4">
                        <Link href="/payment-info" className="text-xs text-teal hover:underline">
                          How does payment processing work?
                        </Link>
                      </div>

                      {/* This would be replaced with an actual Stripe Elements form */}
                      <div className="bg-darknavy p-4 rounded-lg border border-muted">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardName" className="text-muted-foreground">
                              Name on Card
                            </Label>
                            <Input
                              id="cardName"
                              placeholder="John Smith"
                              className="bg-darkblue border-muted focus-visible:ring-teal"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber" className="text-muted-foreground">
                              Card Number
                            </Label>
                            <Input
                              id="cardNumber"
                              placeholder="4242 4242 4242 4242"
                              className="bg-darkblue border-muted focus-visible:ring-teal"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiry" className="text-muted-foreground">
                                Expiry Date
                              </Label>
                              <Input
                                id="expiry"
                                placeholder="MM/YY"
                                className="bg-darkblue border-muted focus-visible:ring-teal"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvc" className="text-muted-foreground">
                                CVC
                              </Label>
                              <Input
                                id="cvc"
                                placeholder="123"
                                className="bg-darkblue border-muted focus-visible:ring-teal"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-darknavy p-4 rounded-lg border border-muted mt-4">
                      <h4 className="text-sm font-medium text-white mb-2 flex items-center">
                        <InfoIcon className="h-4 w-4 mr-2" />
                        About Payment Processing
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        In a production environment, this would be a secure Stripe payment form. Payments would be
                        processed through Stripe and deposited directly to your connected bank account.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex-col space-y-4">
                    <Button
                      className="w-full bg-gradient-to-r from-teal to-purple hover:opacity-90 text-white"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Complete Subscription"}
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      By completing your subscription, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </CardFooter>
                </Card>
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    className="border-muted hover:border-white text-white"
                    onClick={handlePrevStep}
                    disabled={isSubmitting}
                  >
                    Back
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

