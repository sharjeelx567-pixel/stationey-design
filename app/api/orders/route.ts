import { NextRequest, NextResponse } from "next/server"
import { createOrder, getOrdersByUserId, getAllOrders } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, items, total, shippingAddress, paymentMethod } = body

    // Validation
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Order must contain at least one item" }, { status: 400 })
    }

    if (!total || typeof total !== "number" || total <= 0) {
      return NextResponse.json({ error: "Invalid total amount" }, { status: 400 })
    }

    if (!shippingAddress) {
      return NextResponse.json({ error: "Shipping address is required" }, { status: 400 })
    }

    if (!["card", "bank", "cod"].includes(paymentMethod)) {
      return NextResponse.json({ error: "Invalid payment method" }, { status: 400 })
    }

    // Create order
    const userIdForOrder = userId || `guest_${Date.now()}`
    const order = await createOrder(userIdForOrder, items, total, shippingAddress, paymentMethod)

    return NextResponse.json(
      {
        message: "Order created successfully",
        order: {
          id: order.id,
          items: order.items,
          total: order.total,
          status: order.status,
          paymentStatus: order.paymentStatus,
          paymentMethod: order.paymentMethod,
          shippingAddress: order.shippingAddress,
          createdAt: order.createdAt,
          updatedAt: order.updatedAt,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Order creation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const userId = url.searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "userId parameter is required" }, { status: 400 })
    }

    // Get user orders
    const orders = await getOrdersByUserId(userId)

    return NextResponse.json(
      {
        orders: orders.map((order) => ({
          id: order.id,
          items: order.items,
          total: order.total,
          status: order.status,
          paymentStatus: order.paymentStatus,
          paymentMethod: order.paymentMethod,
          shippingAddress: order.shippingAddress,
          createdAt: order.createdAt,
          updatedAt: order.updatedAt,
        })),
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Get orders error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
