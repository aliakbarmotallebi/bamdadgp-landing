import axios from 'axios'
import { NextResponse } from 'next/server'
const API_URL = process.env.API_BASE_URL

export async function POST(Request) {
  try {
    const body = await Request.json()
    console.log(body.data)
    const response = await axios.post(
      `${API_URL}/comments`,
      { data: body.data },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return NextResponse.json(response.data, { status: 201 })
  } catch (error) {
    throw NextResponse.json(
      { error: 'مشکلی در ارتباط با API پیش آمد' },
      { status: 500 }
    )
  }
}
