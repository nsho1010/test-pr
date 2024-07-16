import { revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  console.log(request)
  const tag = request.nextUrl.searchParams.get("tag")

  if (!tag)
    return NextResponse.json({ message: "No tag provided" }, { status: 400 })

  revalidateTag(tag)

  return NextResponse.json({ revalidated: true, now: Date.now() })
}

