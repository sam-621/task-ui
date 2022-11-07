import axios from 'axios'
import { BASE_API_URL } from '../constants/constants.constants'

const instance = axios.create({
  baseURL: BASE_API_URL,
})

export const serviceGet = <T>(url: string) => instance.get<T>(url)
export const servicePost = <T>(url: string) => instance.post<T>(url)
export const servicePut = <T>(url: string) => instance.put<T>(url)
export const serviceDelete = <T>(url: string) => instance.delete<T>(url)
