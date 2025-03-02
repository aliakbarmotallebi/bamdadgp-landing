import axios from 'axios'
import { NextResponse } from 'next/server'
const API_URL = process.env.API_BASE_URL

export async function GET(Request, { params }) {
  const urlSlug = (await params).slug
  try {
    const response = await axios.get(
      `${API_URL}/products?populate[product_image][fields][0]=formats&populate[product_image][fields][1]=url&populate[speces][populate]=*&populate[product_category][fields][1]=cat_title&populate[comments][fields][2]=*&filters[product_slug]=${urlSlug}&populate[comments][filters][comment_status]=publish`
    )
    return NextResponse.json(response.data)
  } catch (error) {
    throw NextResponse.json(
      { error: 'مشکلی در ارتباط با API پیش آمد' },
      { status: 500 }
    )
  }
}
