export class ResponseErrorHandling {
  constructor (
    private promiseInterceptor: PromiseInterceptor,
    private promiseHandlers: PromiseHandlers
  ) {}

  public preset() { this.promiseInterceptor.bindHandlers(this.promiseHandlers) }
}

export interface PromiseInterceptor {
  bindHandlers: (promiseHandlers: PromiseHandlers) => void
}

export interface PromiseHandlers {
  onFulfilled: SuccessCallback
  onRejected: FailureCallback
}

type SuccessCallback = <T>(value: T) => T | Promise<T>
type FailureCallback = (reason: any) => never | Promise<never>
