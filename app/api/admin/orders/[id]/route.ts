import { NextRequest, NextResponse } from "next/server"
import { getOrderById, updateOrder } from "@/lib/db"
import { getTokenFromHeaders, verifyToken } from "@/lib/auth-utils"

interface RouteParams {
  params: {
    id: string
  }
}

function isAdmin(payload: any): boolean {
  return true
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const token = getTokenFromHeaders(request.headers)
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const payload = verifyToken(token)
    if (!payload || !isAdmin(payload)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const order = getOrderById(params.id)
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    return NextResponse.json(
      {
        order: {
          id: order.id,
          userId: order.userId,
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
      { status: 200 },
    )
  } catch (error) {
    console.error("Get order error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const token = getTokenFromHeaders(request.headers)
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const payload = verifyToken(token)
    if (!payload || !isAdmin(payload)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const body = await request.json()
    const { status, paymentStatus } = body

    const order = getOrderById(params.id)
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    const validStatuses = ["pending", "processing", "shipped", "delivered", "cancelled"]
    const validPaymentStatuses = ["pending", "completed", "failed"]

    if (status && !validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 })
    }

    if (paymentStatus && !validPaymentStatuses.includes(paymentStatus)) {
      return NextResponse.json({ error: "Invalid payment status" }, { status: 400 })
    }

    const updates: any = {}
    if (status) updates.status = status
    if (paymentStatus) updates.paymentStatus = paymentStatus

    const updatedOrder = updateOrder(params.id, updates)

    return NextResponse.json(
      {
        message: "Order updated successfully",
        order: {
          id: updatedOrder?.id,
          status: updatedOrder?.status,
          paymentStatus: updatedOrder?.paymentStatus,
          updatedAt: updatedOrder?.updatedAt,
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Update order error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
