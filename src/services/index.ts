import axios from 'axios'

export const sendMessage = async (message: string) => {
  const api = axios.create({ baseURL: 'https://simples-api.onrender.com/' })
  return api.post('/messages', { message })
}
