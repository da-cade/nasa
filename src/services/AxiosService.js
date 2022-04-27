import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=sUBgJmQxCsfuhEGNhFn5DIcZU2yrndcVflFTcX5N',
  timeout: 8000
})
