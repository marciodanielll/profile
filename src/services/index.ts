import axios from 'axios'

export const sendMessage = async (message: string) => {
  const api = axios.create({ baseURL: process.env.REACT_APP_API_URL })
  return api.post('/messages', { message })
}
