import axios from 'axios'

export const resolveUrl = async (url: string) => {
  return axios.post(`${import.meta.env.VITE_API_BASE_URL}/resolve-dns`, url);
};