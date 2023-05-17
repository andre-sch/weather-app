import type { ReactNode } from "react"

import { RequestError, ResponseError } from "../services/serviceErrors"
import { formatServiceErrorMessage } from "./formatServiceErrorMessage"
import { ServiceErrorBoundary } from "./serviceErrorBoundary"

import { ErrorCard } from "../components/atoms/ErrorCard"

export function WeatherServiceErrorBoundary(props: { children: ReactNode }) {
  return (
    <ServiceErrorBoundary
      children={props.children}
      fallback={error =>
        <ErrorCard
          errorMessage={formatServiceErrorMessage(error)}
          description={getWeatherErrorDescription(error)} />
      }
    />
  )
}

function getWeatherErrorDescription(error: any) {
  if (error instanceof RequestError)
    return 'Could not load weather data.\nServer is shutdown.'

  if (error instanceof ResponseError)
    return 'Could not load weather data.\nServer responded with'

  return 'Application is\nnot working properly.'
}
