import { NextRequest, NextResponse } from "next/server"
import { getAllOrders, updateOrder } from "@/lib/db"
import { getTokenFromHeaders, verifyToken } from "@/lib/auth-utils"

// Admin middleware - in production, check admin role
function isAdmin(payload: any): boolean {
  // For now, any authenticated user can access admin endpoints
  // In production, add proper role-based access control
  return true
}

export async function GET(request: NextRequest) {
  try {
    const token = getTokenFromHeaders(request.headers)
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const payload = verifyToken(token)
    if (!payload || !isAdmin(payload)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const orders = getAllOrders()

    return NextResponse.json(
      {
        orders: orders.map((order) => ({
          id: order.id,
          userId: order.userId,
          items: order.items,
          total: order.total,
          status: order.status,
          paymentStatus: order.paymentStatus,
          createdAt: order.createdAt,
          updatedAt: order.updatedAt,
        })),
        total: orders.length,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Get all orders error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
