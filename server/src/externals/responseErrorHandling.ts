export class ExternalServiceError extends Error {}

class ResponseErrorHandling {
  public preset(instance: PromiseInterceptor) {
    instance.bindHandlers(this.onFulfilled, this.onRejected)
  }

  private onFulfilled: SuccessCallback = (response: any) => response
  private onRejected: FailureCallback = () => Promise.reject(new ExternalServiceError())
}

export interface PromiseInterceptor {
  bindHandlers: (
    onFulfilled: SuccessCallback,
    onRejected: FailureCallback
  ) => void
}

export type SuccessCallback = <T>(value: T) => T | Promise<T>
export type FailureCallback = (reason: any) => never | Promise<never>

export const responseErrorHandling = new ResponseErrorHandling()
