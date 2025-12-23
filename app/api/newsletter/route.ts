import { NextRequest, NextResponse } from "next/server"
import { sendNewsletterEmail } from "@/lib/email-service"
import { subscribeToNewsletter, getNewsletterSubscriber } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Check if already subscribed
    const existing = await getNewsletterSubscriber(email)
    if (existing && existing.active) {
      return NextResponse.json(
        { message: "Email is already subscribed to newsletter", email },
        { status: 200 },
      )
    }

    // Save subscription to database
    const subscriber = await subscribeToNewsletter(email)

    // Send newsletter subscription confirmation email
    const result = await sendNewsletterEmail(email)

    if (result.success) {
      return NextResponse.json(
        {
          message: "Subscription confirmed! Check your email for details.",
          email,
          subscriberId: subscriber.id,
          timestamp: new Date().toISOString(),
        },
        { status: 200 },
      )
    } else {
      return NextResponse.json(
        { error: "Failed to send confirmation email", details: result.message },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json(
      { error: "Failed to process subscription", details: String(error) },
      { status: 500 },
    )
  }
}
