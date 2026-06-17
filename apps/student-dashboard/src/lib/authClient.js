import { createAuthClient } from "better-auth/react"

// Create Better Auth React Client pointing to our API server
export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
})
