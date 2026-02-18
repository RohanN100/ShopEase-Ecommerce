import axios from "axios"

const BASE_URL = "https://api.escuelajs.co/api/v1"

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getProductsByCategory = async (categoryId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products/?categoryId=${categoryId}`
    )
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`)
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}
    