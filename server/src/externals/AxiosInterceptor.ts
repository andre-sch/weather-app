import type { AxiosInstance } from "axios"
import type { PromiseInterceptor, SuccessCallback, FailureCallback } from "./responseErrorHandling"

export class AxiosInterceptor implements PromiseInterceptor {
  constructor(private instance: AxiosInstance) {}

  public bindHandlers(onFulfilled: SuccessCallback, onRejected: FailureCallback) {
    this.instance.interceptors.response.use(onFulfilled, onRejected)
  }
}
