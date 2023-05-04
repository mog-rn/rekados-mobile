import axios from 'axios'
import { API_URL } from '@env'

const api = axios.create({
  baseURL: `https://recipes-best.onrender.com`,
  withCredentials: true,
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
})

export default api