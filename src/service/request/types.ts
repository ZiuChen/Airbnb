import { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface Interceptors<T = AxiosResponse> {
  requestInterceptor?: (res: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor: (res: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch: (err: any) => any
  responseInterceptor: (res: T) => T
  responseInterceptorCatch: (err: any) => any
}

// 创建axios实例时传入的配置 (使用的InternalAxiosRequestConfig)
export interface AAxiosRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: Interceptors<T>
}

// 发起请求时传入的配置 (使用的AxiosRequestConfig)
export interface ARequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
}
