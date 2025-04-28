import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(Request) {
  try {
    const body = await Request.json()

    const response = await axios.post(
      'https://seller.bamdadgp.com/api/warranty/verify',
      {
        serialNumber: body.serialNumber,
        fullName: body.fullName,
        phoneNumber: body.phoneNumber,
      },
      {
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
        { error: error.response.data.message || 'مشکلی در ارتباط با API پیش آمد' },
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
