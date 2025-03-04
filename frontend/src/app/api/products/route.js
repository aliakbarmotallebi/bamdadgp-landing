import axios from 'axios'
import { NextResponse } from 'next/server'
const API_URL = process.env.API_BASE_URL

export async function GET(Request) {
  const url = new URL(Request.url)
  const limit =
    url.searchParams.get('limit') && url.searchParams.get('limit') < 50
      ? url.searchParams.get('limit')
      : 20
  const page = url.searchParams.get('page') || 1
  try {
    const response = await axios.get(
      `${API_URL}/products?fields[0]=id&fields[1]=product_slug&fields[2]=product_title&fields[3]=product_price&populate[product_image][fields]=formats&populate[product_category][fields]=cat_title&pagination[limit]=${limit}&pagination[start]=${page}`
    )
    return NextResponse.json(response.data)
  } catch (error) {
    throw NextResponse.json(
      { error: 'مشکلی در ارتباط با API پیش آمد' },
      { status: 500 }
    )
  }
}
