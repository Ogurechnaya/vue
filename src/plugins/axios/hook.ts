import { AxiosInstance } from "axios"
import { inject } from "vue"
import { AxiosSymbol } from './index'

export default function (): AxiosInstance {
  const axios: AxiosInstance | undefined = inject(AxiosSymbol)
  
  if (axios) {
    return axios
  }
  throw new Error('Axios not provided')
}