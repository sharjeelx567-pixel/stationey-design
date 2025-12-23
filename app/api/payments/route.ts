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

    // Only COD is supported
    if (method !== "cod") {
      return NextResponse.json({ error: "Only Cash on Delivery payment method is supported" }, { status: 400 })
    }

    // Check if order exists
    const order = getOrderById(orderId)
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    // Create payment with COD status
    const userIdForPayment = userId || order.userId
    const payment = createPayment(orderId, userIdForPayment, amount, method, transactionId)

    // For COD, payment is pending until delivery
    const paymentStatus = "pending"
    const orderStatus = "pending"

    // Update payment status
    updatePayment(payment.id, { status: paymentStatus })

    // Update order payment and status
    updateOrder(orderId, {
      paymentStatus,
      status: orderStatus,
    })

    return NextResponse.json(
      {
        message: "Order placed. Payment will be collected on delivery.",
        payment: {
          id: payment.id,
          orderId,
          amount,
          method,
          status: paymentStatus,
          transactionId,
        },
        orderStatus,
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
