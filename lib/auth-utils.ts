import jwt from "jsonwebtoken"
import type { User } from "./db"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production"

export interface TokenPayload {
  userId: string
  email: string
  iat: number
  exp: number
}

export function createToken(user: User): string {
  const payload = {
    userId: user.id,
    email: user.email,
  }

  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" })
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    return decoded as TokenPayload
  } catch {
    return null
  }
}

export function getTokenFromHeaders(headers: Headers): string | null {
  const authHeader = headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null
  }
  return authHeader.substring(7)
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePassword(password: string): boolean {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)
}
