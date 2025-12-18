import { NextRequest, NextResponse } from "next/server"
import { getTokenFromHeaders, verifyToken } from "@/lib/auth-utils"
import { products } from "@/lib/products"

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

    const product = products.find((p) => p.id === params.id)
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ product }, { status: 200 })
  } catch (error) {
    console.error("Get product error:", error)
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
    const product = products.find((p) => p.id === params.id)

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    // Update product fields
    if (body.name) product.name = body.name
    if (body.description) product.description = body.description
    if (body.price) product.price = body.price
    if (body.inStock !== undefined) product.inStock = body.inStock
    if (body.images) product.images = body.images
    if (body.features) product.features = body.features

    return NextResponse.json(
      {
        message: "Product updated successfully",
        product,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Update product error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const token = getTokenFromHeaders(request.headers)
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const payload = verifyToken(token)
    if (!payload || !isAdmin(payload)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const index = products.findIndex((p) => p.id === params.id)
    if (index === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    products.splice(index, 1)

    return NextResponse.json(
      {
        message: "Product deleted successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Delete product error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
