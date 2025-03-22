// Mock data store for the application
// This replaces database storage with in-memory storage

// Types
export interface User {
  id: string
  email: string
  username: string
  password: string
  name: string
  roles: string[]
  picture: string
}

export interface Report {
  id: string
  title: string
  date: string
  summary: string
  findings: Finding[]
  customerId: string
}

export interface Finding {
  id: string
  title: string
  description: string
  severity: "high" | "medium" | "low"
  status: "open" | "in-progress" | "resolved"
}

export interface Appointment {
  id: string
  title: string
  description: string
  date: string
  time: string
  duration: number // in minutes
  customerId: string
  staffId: string
}

// Mock data
export const users: User[] = [
  {
    id: "1",
    email: "admin@stepstonesecurity.com",
    username: "admin",
    password: "admin",
    name: "Admin User",
    roles: ["staff"],
    picture: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "2",
    email: "customer@example.com",
    username: "customer",
    password: "customer",
    name: "Demo Customer",
    roles: ["customer"],
    picture: "/placeholder.svg?height=50&width=50",
  },
]

export const reports: Report[] = [
  {
    id: "1",
    title: "Web Application Security Assessment",
    date: "2025-03-15",
    summary:
      "Comprehensive security assessment of the web application identifying vulnerabilities and recommending improvements.",
    findings: [
      {
        id: "f1",
        title: "Insecure Authentication Mechanism",
        description:
          "The application's authentication system does not implement proper session management, allowing potential session hijacking attacks.",
        severity: "high",
        status: "open",
      },
      {
        id: "f2",
        title: "SQL Injection Vulnerability",
        description:
          "The search functionality in the admin dashboard is vulnerable to SQL injection attacks, potentially allowing unauthorized access to the database.",
        severity: "high",
        status: "open",
      },
      {
        id: "f3",
        title: "Cross-Site Scripting (XSS)",
        description:
          "The comment section allows users to input HTML that is rendered without proper sanitization, enabling XSS attacks.",
        severity: "medium",
        status: "in-progress",
      },
    ],
    customerId: "2",
  },
  {
    id: "2",
    title: "API Security Review",
    date: "2025-04-02",
    summary: "Review of API security measures and identification of potential vulnerabilities.",
    findings: [
      {
        id: "f4",
        title: "Insecure Direct Object References",
        description: "The application uses predictable resource identifiers without proper authorization checks.",
        severity: "medium",
        status: "open",
      },
      {
        id: "f5",
        title: "Missing Rate Limiting",
        description:
          "API endpoints do not implement rate limiting, making them vulnerable to brute force and DoS attacks.",
        severity: "medium",
        status: "open",
      },
    ],
    customerId: "2",
  },
]

export const appointments: Appointment[] = [
  {
    id: "1",
    title: "Security Assessment Review",
    description: "Review of the recent security assessment findings and recommendations.",
    date: "2025-05-15",
    time: "10:00",
    duration: 60,
    customerId: "2",
    staffId: "1",
  },
  {
    id: "2",
    title: "Vulnerability Remediation Planning",
    description: "Planning session for addressing identified vulnerabilities.",
    date: "2025-06-05",
    time: "14:30",
    duration: 90,
    customerId: "2",
    staffId: "1",
  },
]

// Mock file storage URLs
export const mockFileUrls = {
  reports: {
    "1": "https://mock-s3-bucket.example.com/reports/web-application-security-assessment.pdf",
    "2": "https://mock-s3-bucket.example.com/reports/api-security-review.pdf",
  },
  findings: {
    f1: "https://mock-s3-bucket.example.com/findings/insecure-authentication.pdf",
    f2: "https://mock-s3-bucket.example.com/findings/sql-injection.pdf",
    f3: "https://mock-s3-bucket.example.com/findings/xss.pdf",
    f4: "https://mock-s3-bucket.example.com/findings/insecure-direct-object-references.pdf",
    f5: "https://mock-s3-bucket.example.com/findings/missing-rate-limiting.pdf",
  },
}

// Helper functions to interact with the mock data
export function getReportById(id: string): Report | undefined {
  return reports.find((report) => report.id === id)
}

export function getReportsByCustomerId(customerId: string): Report[] {
  return reports.filter((report) => report.customerId === customerId)
}

export function getAppointmentsByCustomerId(customerId: string): Appointment[] {
  return appointments.filter((appointment) => appointment.customerId === customerId)
}

export function getAppointmentsByStaffId(staffId: string): Appointment[] {
  return appointments.filter((appointment) => appointment.staffId === staffId)
}

export function getUserById(id: string): User | undefined {
  return users.find((user) => user.id === id)
}

export function getUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email === email)
}

export function getUserByUsername(username: string): User | undefined {
  return users.find((user) => user.username === username)
}

export const getUser = async () => {
  // If running in browser, check localStorage
  if (typeof window !== "undefined") {
    const storedAuth = localStorage.getItem("isAuthenticated")
    const storedUser = localStorage.getItem("currentUser")

    if (storedAuth === "true" && storedUser) {
      return JSON.parse(storedUser)
    }
  }

  return null
}

