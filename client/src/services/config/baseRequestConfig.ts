interface requestBaseConfig { baseURL: string }

export const baseConfig: requestBaseConfig = {
  baseURL: import.meta.env.VITE_SERVER_URL
}
