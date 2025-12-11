import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const cookie = await cookies()
    const status = cookie.has('token')
    if (!status) {
      return NextResponse.json({ isAuth: status }, { status: 200 })
    }

    return NextResponse.json({ isAuth: status })
  } catch (error) {
    return NextResponse.json(
      { isAuth: false, error: 'مشکلی پیش آمد' },
      { status: 500 }
    )
  }
}
