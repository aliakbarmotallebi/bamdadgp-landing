import axios from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const API_URL = process.env.API_BASE_URL

if (!API_URL || !API_URL.startsWith('https://')) {
  throw new Error('API URL is not set or invalid')
}

const IdsSchema = z.object({
  Ids: z.array(z.string().min(1)),
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

    const parsed = IdsSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'ورودی نامعتبر است.', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    let filter = parsed.data.Ids.map((id, index) => {
      return `filters[id][$in][${index}]=${id}`
    }).join('&')
    const url = `${API_URL}/products?populate[product_image][fields]=url&${filter}`
    const response = await axios.get(url, { timeout: 4000 })

    return NextResponse.json(response.data.data, { status: 200 })
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
