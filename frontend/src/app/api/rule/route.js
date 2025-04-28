import axios from 'axios'
import { NextResponse } from 'next/server'
const API_URL = process.env.API_BASE_URL

export async function GET() {
  try {
    const response = await axios.get(`${API_URL}/rule`)
    return NextResponse.json(response.data)
  } catch (error) {
    throw NextResponse.json(
      { error: 'مشکلی در ارتباط با API پیش آمد' },
      { status: error.status }
    )
  }
}
