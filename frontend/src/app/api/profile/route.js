import axios from 'axios'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const API_URL = process.env.API_BASE_URL

if (!API_URL || !API_URL.startsWith('https://')) {
  throw new Error('API URL is not set or invalid')
}

const UpdateUserSchema = z.object({
  id: z.string().min(1),
  username: z.string().optional(),
  email: z.string().email().optional(),
  // فقط فیلدهای قابل آپدیت را اضافه کن
})

export async function GET(Request) {
  try {
    const cookie = await cookies()
    const token = cookie.get('token')

    if (!token?.value) {
      return NextResponse.json(
        { error: 'کاربر لاگین نکرده است' },
        { status: 401 }
      )
    }

    const response = await axios.get(`${API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
      timeout: 4000,
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

export async function PUT(Request) {
  try {
    const body = await Request.json()
    const cookie = await cookies()
    const token = cookie.get('token')

    const parsed = UpdateUserSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'ورودی نامعتبر است', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    if (!token?.value) {
      return NextResponse.json(
        { error: 'کاربر لاگین نکرده است' },
        { status: 401 }
      )
    }

    const response = await axios.put(
      `${API_URL}/users/${parsed.data.id}`,
      parsed.data,
      {
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
        timeout: 4000,
      }
    )
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
