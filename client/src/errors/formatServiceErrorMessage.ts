import { RequestError, ResponseError } from "../services/serviceErrors"

export function formatServiceErrorMessage(error: any) {
  if (error instanceof RequestError)
    return error.message

  if (error instanceof ResponseError)
    return `${error.message} — ${error.status}`

  return 'Uncaught Error'
}
