import { NextRequest, NextResponse } from "next/server"
import { getOrdersByUserId } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const { userId } = params

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const orders = await getOrdersByUserId(userId)

    return NextResponse.json(
      {
        message: "Orders retrieved successfully",
        orders,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error fetching orders:", error)
    return NextResponse.json(
      { error: "Failed to fetch orders", details: String(error) },
      { status: 500 },
    )
  }
}
