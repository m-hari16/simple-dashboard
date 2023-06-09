import axios from "axios";

const BaseUrl = import.meta.env.VITE_BASE_URL

export const getArticle = async (url, query) => {
  const apiCall = await axios.get(`${BaseUrl}${url}?${query}`)
  return apiCall.data
}

export const addArticle = async (url, body) => {
  
}