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

    const response = await fetch(`${API_URL}/warranty/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        serialNumber: data.data.serialNumber,
        fullName: data.data.fullName,
        phoneNumber: data.data.phoneNumber,
      }),
      signal: AbortSignal.timeout(8000),
      cache: 'no-store',
    })

    const payload = await response.json().catch(() => null)

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            payload?.message ||
            payload?.error ||
            'مشکلی در ارتباط با API پیش آمد',
        },
        { status: response.status || 500 }
      )
    }

    return NextResponse.json(payload, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'درخواست به سرور ارسال نشد. لطفاً اتصال خود را بررسی کنید.' },
      { status: 500 }
    )
  }
}
