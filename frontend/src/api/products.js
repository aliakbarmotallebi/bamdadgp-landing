import { handleApiResponse } from '@/utils/errorHandler';
const axios = require('axios');
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getProducts = async (limit,page)=>{
    try{
        const response = await axios.get(`${API_URL}/products?fields[0]=id&fields[1]=product_slug&fields[2]=product_title&fields[3]=product_price&populate[product_image][fields]=formats&populate[product_category][fields]=cat_title&pagination[limit]=${limit}&&pagination[start]=${page}`)
        return handleApiResponse(response,'product');
    }catch (error){
        throw error;
    }
}

const getSingleProduct = async (slug)=>{
    try{
        const response = await axios.get(`${API_URL}/products?populate=*&filters[product_slug]=${slug}`)
        return handleApiResponse(response,'product');
    }catch (error){
        throw error;
    }
}

const getSpecesProduct = async(id)=>{
    try{
        const response = await axios.get(`${API_URL}/products?populate[speces][populate]=*&filters[id]=${id}`)
        return handleApiResponse(response,'product')
    }catch(error){
        throw error;
    }
}

export {getProducts,getSingleProduct,getSpecesProduct};