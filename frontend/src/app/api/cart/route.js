import axios from 'axios'
import { NextResponse } from 'next/server'
const API_URL = process.env.API_BASE_URL

export async function POST(Request) {
  try {
    const body = await Request.json()
    let filter = body.Ids.map((id, index) => {
      return `filters[id][$in][${index}]=${id}`
    })
    filter = filter.join('&')
    const response = await axios.get(
      `${API_URL}/products?populate[product_image][fields]=url&${filter}`
    )
    return NextResponse.json(response.data.data)
  } catch (error) {
    throw NextResponse.json(
      { error: 'مشکلی در ارتباط با API پیش آمد' },
      { status: 500 }
    )
  }
}
