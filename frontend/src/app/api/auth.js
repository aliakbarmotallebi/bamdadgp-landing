import { handleApiResponse } from '@/utils/errorHandler'
import { cookies } from 'next/headers'

const axios = require('axios')
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const registerApi = async form => {
  try {
    const response = await axios.post(`${API_URL}/auth/local/register`, form, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = handleApiResponse(response, 'auth')
    // if (result.status === 200) {
    //   ;(await cookies()).set({
    //     name: 'token',
    //     value: result.data.jwt,
    //     httpOnly: true,
    //     maxAge: 60 * 60 * 24,
    //     path: '/',
    //   })
    // }
  } catch (error) {}
}

export { registerApi }
