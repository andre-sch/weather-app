import { AxiosInstance } from "axios"

import { PromiseInterceptor, PromiseHandlers, ResponseErrorHandling } from "./responseErrorHandling"
import { BadGateway, BadRequest, ConnectionError, InternalServerError, NotFound } from "./serviceErrors"

export class AxiosErrorHandling extends ResponseErrorHandling {
  constructor(instance: AxiosInstance) {
    super(new AxiosInterceptor(instance), new AxiosPromiseHandlers())
  }
}

class AxiosInterceptor implements PromiseInterceptor {
  constructor(private instance: AxiosInstance) {}

  public bindHandlers({ onFulfilled, onRejected }: PromiseHandlers) {
    this.instance.interceptors.response.use(onFulfilled, onRejected)
  }
}

class AxiosPromiseHandlers implements PromiseHandlers {
  public onFulfilled = (response: any) => response
  public onRejected = (error: any) => {
    if (error.isAxiosError) {
      if (error.response)
        switch (error.response.status) {
          case 400: error = new BadRequest(); break
          case 404: error = new NotFound(); break
          case 500: error = new InternalServerError(); break
          case 502: error = new BadGateway()
        }
      else error = new ConnectionError()
    }
    console.error(error)
    return Promise.reject(error)
  }
}
