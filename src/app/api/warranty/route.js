import axios from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const API_URL = process.env.SELLER_URL

const WarrantySchema = z.object({
  serialNumber: z.string().min(3),
  fullName: z.string().min(3),
  phoneNumber: z.string().min(11),
})

export async function POST(Request) {
  if (!API_URL || !API_URL.startsWith('https://')) {
    return NextResponse.json(
      { error: 'آدرس سرویس گارانتی تنظیم نشده است.' },
      { status: 500 }
    )
  }

  try {
    let body
    try {
      body = await Request.json()
    } catch {
      return NextResponse.json(
        { error: 'فرمت درخواست معتبر نیست (باید JSON باشد).' },
        { status: 400 }
      )
    }

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
        timeout: 8000,
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
            error.response.data?.message ||
            error.response.data?.error ||
            'مشکلی در ارتباط با API پیش آمد',
        },
        { status: error.response.status || 500 }
      )
    }

    if (error.request) {
      return NextResponse.json(
        { error: 'درخواست به سرور ارسال نشد. لطفاً اتصال خود را بررسی کنید.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'خطای غیرمنتظره‌ای پیش آمد. لطفاً دوباره تلاش کنید.' },
      { status: 500 }
    )
  }
}
