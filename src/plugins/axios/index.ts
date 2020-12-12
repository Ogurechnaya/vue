import { App } from "vue"
import Axios from 'axios'

export const AxiosSymbol = Symbol('axios')

export default function (app: App) {
  const axios = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  })

  app.provide(AxiosSymbol, axios)
}