import { AxiosRequestConfig } from "axios"

interface requestBaseConfig extends AxiosRequestConfig {
  params: { apiKey?: string, format: 'json' }
}

export interface locationMergeConfig extends AxiosRequestConfig {
  params: { type?: string, text: string }
}

export const baseConfig: requestBaseConfig = {
  baseURL: 'https://api.geoapify.com/v1',
  params: {
    apiKey: process.env.EXTERNAL_LOCATION_API_KEY,
    format: 'json'
  }
}
