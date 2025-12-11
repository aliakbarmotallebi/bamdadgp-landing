import axios from 'axios'
import { NextResponse } from 'next/server'
const API_URL = process.env.API_BASE_URL

// Validate ENV to prevent SSRF
if (!API_URL || !API_URL.startsWith('https://')) {
  throw new Error('API URL is not set or invalid')
}

export async function GET() {
  try {
    const response = await axios.get(`${API_URL}/about`, {
      timeout: 4000,
    })
    return NextResponse.json(response.data, { status: 200 })
  } catch (error) {
    if (error.response) {
      return NextResponse.json(
        { error: error.response.data?.message || 'خطایی رخ داد' },
        { status: error.response.status }
      )
    }

    if (error.request) {
      return NextResponse.json(
        { error: 'سرور پاسخ نداد یا در دسترس نیست.' },
        { status: 504 }
      )
    }

    return NextResponse.json(
      { error: 'خطای داخلی سرور رخ داد.' },
      { status: 500 }
    )
  }
}
