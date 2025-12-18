import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    // Validation
    if (!email || !name) {
      return NextResponse.json({ error: "Email and name are required" }, { status: 400 })
    }

    // In production, save to database
    const user = {
      id: `user_${Date.now()}`,
      email,
      name,
    }

    return NextResponse.json(
      {
        message: "User registered successfully",
        user,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
