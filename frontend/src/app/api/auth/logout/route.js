import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(Request) {
  try {
    const cookie = await cookies()
    cookie.set('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 0, // حذف کوکی
    })
    return NextResponse.json({ logout: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { logout: false, error: 'مشکلی پیش آمد' },
      { status: 500 }
    )
  }
}
