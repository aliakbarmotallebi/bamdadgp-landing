import axios from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const API_URL = process.env.API_BASE_URL

if (!API_URL || !API_URL.startsWith('https://')) {
  throw new Error('API URL is not set or invalid')
}

const CatIdSchema = z.string().regex(/^\d+$/, 'cat_id باید عدد باشد')

export async function GET(Request) {
  try {
    const url = new URL(Request.url)
    const catId = url.searchParams.get('cat_id')

    const parsed = CatIdSchema.safeParse(catId)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'cat_id نامعتبر است.', details: parsed.error.flatten() },
        { status: 400 }
      )
    }
    const response = await axios.get(
      `${API_URL}/products?populate[product_image][fields]=*&fields[0]=product_title&fields[1]=product_price&fields[2]=product_slug&filters[product_category][id]=${encodeURIComponent(
        parsed.data
      )}&pagination[limit]=10`,
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
