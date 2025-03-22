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

