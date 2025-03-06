import axios from 'axios'
import { NextResponse } from 'next/server'
const API_URL = process.env.API_BASE_URL

export async function POST(Request) {
  try {
    const body = await Request.json()
    const response = await axios.post(`${API_URL}/auth/local`, body.data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const { jwt, user } = response.data

    const result = NextResponse.json(user, { status: 201 })

    result.cookies.set('token', jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60,
    })
    return result
  } catch (error) {
    return NextResponse.json(
      { error: 'مشکلی در ارتباط با API پیش آمد' },
      { status: 500 }
    )
  }
}
