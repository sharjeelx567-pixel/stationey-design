import { NextRequest, NextResponse } from "next/server"
import { sendOrderConfirmationEmail } from "@/lib/email-service"
import type { Order } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { order, userEmail } = body

    if (!order) {
      return NextResponse.json({ error: "Order data is required" }, { status: 400 })
    }

    // Send emails using SMTP
    const result = await sendOrderConfirmationEmail(userEmail, order)

    if (result.success) {
      return NextResponse.json(
        {
          message: "Order confirmation emails sent successfully",
          emailSent: true,
          orderConfirmation: {
            orderId: order.id,
            timestamp: new Date().toISOString(),
            adminEmail: "shahidx345@gmail.com",
            customerEmail: userEmail || "Not provided",
          },
        },
        { status: 200 },
      )
    } else {
      return NextResponse.json(
        { error: "Failed to send emails", details: result.message },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Email processing error:", error)
    return NextResponse.json(
      { error: "Failed to process email", details: String(error) },
      { status: 500 },
    )
  }
}
