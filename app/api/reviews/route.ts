import { NextRequest, NextResponse } from "next/server"
import { createReview, getReviewsByProductId } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, productId, rating, comment } = body

    // Validation
    if (!productId || !rating || !comment) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (typeof rating !== "number" || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5" }, { status: 400 })
    }

    if (comment.trim().length < 10) {
      return NextResponse.json({ error: "Comment must be at least 10 characters" }, { status: 400 })
    }

    // Create review
    const userIdForReview = userId || `guest_${Date.now()}`
    const review = await createReview(productId, userIdForReview, rating, comment)

    return NextResponse.json(
      {
        message: "Review created successfully",
        review: {
          id: review.id,
          productId: review.productId,
          rating: review.rating,
          comment: review.comment,
          createdAt: review.createdAt,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Review creation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const productId = url.searchParams.get("productId")

    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
    }

    const reviews = await getReviewsByProductId(productId)

    return NextResponse.json(
      {
        reviews: reviews.map((review) => ({
          id: review.id,
          rating: review.rating,
          comment: review.comment,
          createdAt: review.createdAt,
        })),
        average: reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0,
        count: reviews.length,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Get reviews error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
