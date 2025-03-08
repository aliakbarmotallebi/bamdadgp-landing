import axios from 'axios'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
const API_URL = process.env.API_BASE_URL

export async function GET(Request) {
  try {
    const cookie = await cookies()
    const token = cookie.get('token')
    const response = await axios.get(`${API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    })
    return NextResponse.json(response.data)
  } catch (error) {
    throw NextResponse.json(
      { error: 'مشکلی در ارتباط با API پیش آمد' },
      { status: 500 }
    )
  }
}
