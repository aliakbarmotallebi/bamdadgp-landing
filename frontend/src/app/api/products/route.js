import axios from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'
const API_URL = process.env.API_BASE_URL

if (!API_URL || !API_URL.startsWith('https://')) {
  throw new Error('API URL is not set or invalid')
}

const PaginationSchema = z.object({
  limit: z
    .string()
    .regex(/^\d+$/)
    .transform(Number)
    .transform(val => (val > 0 && val <= 50 ? val : 20)),

  page: z
    .string()
    .regex(/^\d+$/)
    .transform(Number)
    .transform(val => (val > 0 ? val : 1)),
})

export async function GET(Request) {
  try {
    const url = new URL(Request.url)
    const query = {
      limit: url.searchParams.get('limit') || 20,
      page: url.searchParams.get('page') || 1,
    }
    const parsed = PaginationSchema.safeParse(query)
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: 'پارامترهای query نامعتبر هستند',
          details: parsed.error.flatten(),
        },
        { status: 400 }
      )
    }
    const { limit, page } = parsed.data

    const response = await axios.get(
      `${API_URL}/products?fields[0]=id&fields[1]=product_slug&fields[2]=product_title&fields[3]=product_price&populate[product_image][fields]=formats&populate[product_category][fields]=cat_title&pagination[page]=${parseInt(
        page
      )}&pagination[pageSize]=${parseInt(limit)}`,
      { timeout: 4000, headers: { Accept: 'application/json' } }
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
