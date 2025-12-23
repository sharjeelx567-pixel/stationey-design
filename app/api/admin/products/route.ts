import { NextRequest, NextResponse } from "next/server"

// Admin panel has been disabled for this application
// All functionality is now handled through the public API

export async function GET(request: NextRequest) {
  return NextResponse.json(
    { error: "Admin panel has been disabled. Please use the public API endpoints." },
    { status: 403 },
  )
}

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { error: "Admin panel has been disabled. Please use the public API endpoints." },
    { status: 403 },
  )
}

export async function PATCH(request: NextRequest) {
  return NextResponse.json(
    { error: "Admin panel has been disabled. Please use the public API endpoints." },
    { status: 403 },
  )
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json(
    { error: "Admin panel has been disabled. Please use the public API endpoints." },
    { status: 403 },
  )
}
