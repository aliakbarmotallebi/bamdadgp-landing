import axios from 'axios'
import { NextResponse } from 'next/server'
const API_URL = process.env.API_BASE_URL

export async function GET(Request) {
  const url = new URL(Request.url)
  const catId = url.searchParams.get('cat_id')
  try {
    const response = await axios.get(
      `${API_URL}/products?populate[product_image][fields]=*&fields[0]=product_title&fields[1]=product_price&filters[product_category][id]=${catId}&pagination[limit]=10`
    )
    return NextResponse.json(response.data)
  } catch (error) {
    throw NextResponse.json(
      { error: 'مشکلی در ارتباط با API پیش آمد' },
      { status: 500 }
    )
  }
}
