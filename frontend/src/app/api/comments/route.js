import axios from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const API_URL = process.env.API_BASE_URL

// Validate API URL
if (!API_URL || !API_URL.startsWith('https://')) {
  throw new Error('API URL is not set or invalid')
}

const CommentSchema = z.object({
  data: z.object({
    content: z.string().min(1).max(1500),
    author: z.string().min(1).max(100),
    product: z.string().min(1),
  }),
})

export async function POST(Request) {
  try {
    let body
    try {
      body = await Request.json()
    } catch {
      return NextResponse.json(
        { error: 'فرمت درخواست باید JSON باشد.' },
        { status: 400 }
      )
    }

    const parsed = CommentSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'ورودی نامعتبر است.', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const response = await axios.post(
      `${API_URL}/comments`,
      { data: parsed.data.data },
      {
        timeout: 4000,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )
    return NextResponse.json(response.data, { status: 201 })
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
