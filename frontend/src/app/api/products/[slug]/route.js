import axios from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const API_URL = process.env.API_BASE_URL

if (!API_URL || !API_URL.startsWith('https://')) {
  throw new Error('API URL is not set or invalid')
}

const SlugSchema = z.string().min(1).max(1000)

export async function GET(Request, { params }) {
  try {
    const urlSlug = (await params).slug
    const parsed = SlugSchema.safeParse(urlSlug)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'slug نامعتبر است.', details: parsed.error.flatten() },
        { status: 400 }
      )
    }
    const response = await axios.get(
      `${API_URL}/products?populate[product_image][fields][0]=formats&populate[product_image][fields][1]=url&populate[speces][populate]=*&populate[product_category][fields][1]=cat_title&populate[comments][fields][2]=*&filters[product_slug]=${encodeURIComponent(
        parsed.data
      )}&populate[comments][filters][comment_status]=publish`,
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
