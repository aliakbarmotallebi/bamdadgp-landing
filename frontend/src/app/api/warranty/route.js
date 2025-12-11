import axios from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'
const API_URL = process.env.SELLER_URL

const WarrantySchema = z.object({
  serialNumber: z.string().min(3),
  fullName: z.string().min(3),
  phoneNumber: z.string().min(11),
})

// Validate ENV to prevent SSRF
if (!API_URL || !API_URL.startsWith('https://')) {
  throw new Error('API URL is not set or invalid')
}

export async function POST(Request) {
  try {
    let body
    // 1) Validate JSON body
    try {
      body = await Request.json()
    } catch {
      return NextResponse.json(
        { error: 'فرمت درخواست معتبر نیست (باید JSON باشد).' },
        { status: 400 }
      )
    }

    // 2) Validate input
    const data = WarrantySchema.safeParse(body)
    if (!data.success) {
      return NextResponse.json(
        { error: 'ورودی نامعتبر است', details: data.error.flatten() },
        { status: 400 }
      )
    }

    const response = await axios.post(
      `${API_URL}/warranty/verify`,
      {
        serialNumber: body.serialNumber,
        fullName: body.fullName,
        phoneNumber: body.phoneNumber,
      },
      {
        timeout: 4000,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )
    return NextResponse.json(response.data, { status: 200 })
  } catch (error) {
    if (error.response) {
      return NextResponse.json(
        {
          error:
            error.response.data.message || 'مشکلی در ارتباط با API پیش آمد',
        },
        { status: error.response.status || 500 }
      )
    } else if (error.request) {
      return NextResponse.json(
        { error: 'درخواست به سرور ارسال نشد. لطفاً اتصال خود را بررسی کنید.' },
        { status: 500 }
      )
    } else {
      return NextResponse.json(
        { error: 'خطای غیرمنتظره‌ای پیش آمد. لطفاً دوباره تلاش کنید.' },
        { status: 500 }
      )
    }
  }
}
