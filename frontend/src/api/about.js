const { handleApiResponse } = require("@/utils/errorHandler");
const axios = require("axios");
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getAboutus = async () => {
  try {
    const response = await axios.get(`${API_URL}/about`);
    return handleApiResponse(response, "product");
  } catch (error) {
    throw error;
  }
};
export { getAboutus };
