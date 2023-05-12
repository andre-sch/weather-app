export abstract class RequestError {
  public abstract message: string
}

export class ConnectionError extends RequestError {
  public message = 'Connection Failed'
}

export abstract class ResponseError {
  public abstract message: string
  public abstract status: number
}

export class BadRequest extends ResponseError {
  public message = 'Bad Request'
  public status = 400
}

export class NotFound extends ResponseError {
  public message = 'Not Found'
  public status = 404
}

export class InternalServerError extends ResponseError {
  public message = 'Internal Server Error'
  public status = 500
}

export class BadGateway extends ResponseError {
  public message = 'Bad Gateway'
  public status = 502
}
