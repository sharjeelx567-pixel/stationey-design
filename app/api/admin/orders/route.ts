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

    const url = new URL(request.url)
    const status = url.searchParams.get("status")
    const paymentStatus = url.searchParams.get("paymentStatus")
    const paymentMethod = url.searchParams.get("paymentMethod")
    const searchTerm = url.searchParams.get("search")?.toLowerCase()

    let orders = getAllOrders()

    // Filter by status
    if (status) {
      orders = orders.filter((o) => o.status === status)
    }

    // Filter by payment status
    if (paymentStatus) {
      orders = orders.filter((o) => o.paymentStatus === paymentStatus)
    }

    // Filter by payment method
    if (paymentMethod) {
      orders = orders.filter((o) => o.paymentMethod === paymentMethod)
    }

    // Search by order ID, customer name, or phone
    if (searchTerm) {
      orders = orders.filter(
        (o) =>
          o.id.toLowerCase().includes(searchTerm) ||
          o.shippingAddress.name.toLowerCase().includes(searchTerm) ||
          o.shippingAddress.phone.includes(searchTerm),
      )
    }

    // Sort by creation date (newest first)
    orders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return NextResponse.json(
      {
        orders: orders.map((order) => ({
          id: order.id,
          userId: order.userId,
          customerName: order.shippingAddress.name,
          customerPhone: order.shippingAddress.phone,
          customerEmail: order.shippingAddress.address,
          city: order.shippingAddress.city,
          items: order.items,
          itemsCount: order.items.length,
          total: order.total,
          status: order.status,
          paymentStatus: order.paymentStatus,
          paymentMethod: order.paymentMethod,
          isPendingCOD: order.paymentMethod === "cod" && order.paymentStatus === "pending",
          createdAt: order.createdAt,
          updatedAt: order.updatedAt,
        })),
        total: orders.length,
        filters: {
          status,
          paymentStatus,
          paymentMethod,
          searchTerm,
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Get all orders error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
