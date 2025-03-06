import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(Request) {
  try {
    const cookie = await cookies()
    cookie.delete('token')
    return NextResponse.json({ logout: true })
  } catch (error) {
    return NextResponse.json({ logout: false, error })
  }
}
