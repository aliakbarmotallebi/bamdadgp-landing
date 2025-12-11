import axios from 'axios'
import { NextResponse } from 'next/server'
const API_URL = process.env.API_BASE_URL

if (!API_URL || !API_URL.startsWith('https://')) {
  throw new Error('API URL is not set or invalid')
}

export async function GET() {
  try {
    const response = await axios.get(`${API_URL}/contact`, {
      timeout: 4000,
      headers: {
        Accept: 'application/json',
      },
    })
    return NextResponse.json(response.data, { status: 200 })
  } catch (error) {
    if (error.response) {
      return NextResponse.json(
        { error: error.response.data?.message || 'مشکلی رخ داد' },
        { status: error.response.status || 400 }
      )
    }

    if (error.request) {
      return NextResponse.json(
        { error: 'سرور مقصد پاسخ نداد.' },
        { status: 504 }
      )
    }

    return NextResponse.json({ error: 'خطای داخلی سرور.' }, { status: 500 })
  }
}
