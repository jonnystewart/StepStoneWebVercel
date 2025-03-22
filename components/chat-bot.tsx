"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { MessageSquare, Send, X } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  role: "user" | "assistant"
  content: string
}

// Mock responses for demo purposes
const mockResponses = [
  "Step Stone Security offers cybersecurity services tailored for small and medium-sized businesses.",
  "Our fractional cybersecurity team can help assess your current security posture and recommend improvements.",
  "We provide code reviews, API security assessments, and web application security testing.",
  "Our pricing plans include Spot Checks, Standard, and Fractional Team options to fit your budget and needs.",
  "You can schedule a consultation through our website or by contacting sales@stepstonesecurity.com.",
  "We recommend starting with a basic security assessment to identify potential vulnerabilities in your systems.",
  "Our team of experts has experience across various industries and security frameworks.",
  "For more specific information about your security needs, I recommend scheduling a call with our team.",
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your Step Stone Security assistant. How can I help with your cybersecurity questions today? I can provide information about our fractional cybersecurity team services.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate API delay
    setTimeout(() => {
      try {
        // Get a random response from the mock responses
        const randomIndex = Math.floor(Math.random() * mockResponses.length)
        const mockResponse = mockResponses[randomIndex]

        // Add assistant message
        setMessages((prev) => [...prev, { role: "assistant", content: mockResponse }])
      } catch (error) {
        console.error("Error generating response:", error)
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I apologize, but I encountered an error. Please try again or contact our support team for assistance.",
          },
        ])
      } finally {
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-4 right-4 p-4 rounded-full bg-gradient-to-r from-teal to-purple text-white shadow-lg hover:opacity-90 transition-all z-50",
          isOpen && "hidden",
        )}
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-4 right-4 w-full max-w-md z-50 transition-all duration-300 ease-in-out transform",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none",
        )}
      >
        <Card className="border border-muted bg-darkblue shadow-xl">
          <CardHeader className="bg-gradient-to-r from-teal to-purple p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Security Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 h-[350px] overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg p-3",
                      message.role === "user"
                        ? "bg-gradient-to-r from-teal to-purple text-white"
                        : "bg-muted text-foreground",
                    )}
                  >
                    {message.role === "assistant" && (
                      <div className="flex items-center mb-1">
                        <Avatar className="h-6 w-6 mr-2 bg-gradient-to-r from-teal to-purple">
                          <div className="text-xs font-bold text-white">SS</div>
                        </Avatar>
                        <span className="text-xs font-medium">Step Stone Security</span>
                      </div>
                    )}
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-muted text-foreground">
                    <div className="flex items-center mb-1">
                      <Avatar className="h-6 w-6 mr-2 bg-gradient-to-r from-teal to-purple">
                        <div className="text-xs font-bold text-white">SS</div>
                      </Avatar>
                      <span className="text-xs font-medium">Step Stone Security</span>
                    </div>
                    <p className="text-sm">Thinking...</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t border-muted">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                placeholder="Type your security question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 bg-darknavy border-muted focus-visible:ring-teal"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-teal to-purple hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

