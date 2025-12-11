import axios from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'
const API_URL = process.env.API_BASE_URL

// جلوگیری از SSRF
if (!API_URL || !API_URL.startsWith('https://')) {
  throw new Error('API URL is not set or invalid')
}

const LoginSchema = z.object({
  identifier: z.string().min(3),
  password: z.string().min(3),
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

    if (!body.data) {
      return NextResponse.json(
        { error: 'ساختار ورودی نامعتبر است.' },
        { status: 400 }
      )
    }

    const parsed = LoginSchema.safeParse(body.data)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'ورودی نامعتبر است.', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const response = await axios.post(`${API_URL}/auth/local`, parsed.data, {
      timeout: 4000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const { jwt, user } = response.data

    const result = NextResponse.json(user, { status: 201 })

    result.cookies.set('token', jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 48,
    })
    return result
  } catch (error) {
    if (error.response) {
      return NextResponse.json(
        {
          error:
            error.response.data?.error?.message ||
            error.response.data?.message ||
            'اطلاعات وارد شده صحیح نیست.',
        },
        { status: error.response.status || 400 }
      )
    }

    if (error.request) {
      return NextResponse.json(
        { error: 'سرور مقصد پاسخ نداد.' },
        { status: 504 }
      )
    }

    return NextResponse.json({ error: 'خطا در سرور.' }, { status: 500 })
  }
}
