import { handleApiResponse } from '@/utils/errorHandler';
const axios = require('axios');
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getProducts = async (limit,page)=>{
    try{
        const response = await axios.get(`${API_URL}/products?fields[0]=id&fields[1]=product_title&fields[2]=product_price&populate[product_image][fields]=formats&populate[product_category][fields]=cat_title&pagination[limit]=${limit}&&pagination[start]=${page}`)
        return handleApiResponse(response,'product');
    }catch (error){
        throw error;
    }
}

export {getProducts};