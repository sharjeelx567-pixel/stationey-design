import { NextRequest, NextResponse } from "next/server"
import { createPayment, getPaymentsByOrderId, getOrderById, updateOrder, updatePayment } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, orderId, amount, method, transactionId } = body

    // Validation
    if (!orderId || !amount || !method) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!["card", "bank", "cod"].includes(method)) {
      return NextResponse.json({ error: "Invalid payment method" }, { status: 400 })
    }

    // Check if order exists
    const order = getOrderById(orderId)
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    // Create payment
    const userIdForPayment = userId || order.userId
    const payment = createPayment(orderId, userIdForPayment, amount, method, transactionId)

    // Simulate payment processing
    let paymentStatus: "completed" | "failed" = "completed"
    if (method === "card" && Math.random() > 0.95) {
      // 5% chance of payment failure
      paymentStatus = "failed"
    }

    // Update payment status
    updatePayment(payment.id, { status: paymentStatus })

    // Update order payment status
    if (paymentStatus === "completed") {
      updateOrder(orderId, { paymentStatus: "completed", status: "processing" })
    }

    return NextResponse.json(
      {
        message: "Payment processed",
        payment: {
          id: payment.id,
          orderId,
          amount,
          method,
          status: paymentStatus,
          transactionId,
        },
        orderStatus: paymentStatus === "completed" ? "processing" : "pending",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Payment error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const orderId = url.searchParams.get("orderId")

    if (!orderId) {
      return NextResponse.json({ error: "Order ID is required" }, { status: 400 })
    }

    const payments = getPaymentsByOrderId(orderId)

    return NextResponse.json({ payments }, { status: 200 })
  } catch (error) {
    console.error("Get payments error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
