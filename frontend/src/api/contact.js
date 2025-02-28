import { handleApiResponse } from "@/utils/errorHandler";

const axios = require("axios");
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getContactus = async () => {
  try {
    const response = await axios.get(`${API_URL}/contact`);
    return handleApiResponse(response, "contact");
  } catch (error) {
    throw error;
  }
};

export { getContactus };
