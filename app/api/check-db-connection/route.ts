import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Since we're not using a database anymore, we'll just return a success message
    return NextResponse.json({
      status: "success",
      message: "No database connection required",
      mockDataStore: {
        status: "active",
        info: "Using in-memory data store instead of database",
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Error checking mock data store",
        error: error.message,
      },
      { status: 500 },
    )
  }
}

