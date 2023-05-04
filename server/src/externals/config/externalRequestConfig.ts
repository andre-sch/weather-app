export interface RequestConfig<MainConfig, AdditionalConfig> {
  baseConfig: MainConfig
  mergeConfig: (...args: any) => AdditionalConfig
}
