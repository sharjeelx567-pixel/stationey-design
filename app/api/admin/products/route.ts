import { NextRequest, NextResponse } from "next/server"
import { getTokenFromHeaders, verifyToken } from "@/lib/auth-utils"
import { products } from "@/lib/products"
import type { Product } from "@/lib/products"

function isAdmin(payload: any): boolean {
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

    return NextResponse.json(
      {
        products,
        total: products.length,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Get products error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
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
    const { name, description, price, category, categorySlug, images, inStock, features } = body

    // Validation
    if (!name || !description || !price || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newProduct: Product = {
      id: `product_${Date.now()}`,
      name,
      description,
      price,
      category,
      categorySlug: categorySlug || category.toLowerCase().replace(/\s+/g, "-"),
      images: images || [],
      inStock: inStock !== false,
      rating: 0,
      reviewCount: 0,
      features: features || [],
    }

    products.push(newProduct)

    return NextResponse.json(
      {
        message: "Product created successfully",
        product: newProduct,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Create product error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
