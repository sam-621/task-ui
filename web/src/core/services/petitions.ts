import { BASE_API_URL } from '@/constants'
import { IResponse } from '@/interfaces'
import axios from 'axios'

const instance = axios.create({
  baseURL: BASE_API_URL,
})

export const serviceGet = <T>(url: string) => instance.get<IResponse<T>>(url)
export const servicePost = <T>(url: string, data: unknown) => instance.post<IResponse<T>>(url, data)
export const servicePut = <T>(url: string, data: unknown) => instance.put<IResponse<T>>(url, data)
export const serviceDelete = <T>(url: string) => instance.delete<IResponse<T>>(url)
