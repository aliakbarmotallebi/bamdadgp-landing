import { handleApiResponse } from '@/utils/errorHandler'

const axios = require('axios')
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const registerApi = async form => {
  try {
    const response = await axios.post(`${API_URL}/auth/local/register`, form, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleApiResponse(response, 'auth')
  } catch (error) {}
}

export { registerApi }
