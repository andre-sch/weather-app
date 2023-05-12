import type { ReactNode } from "react"

import { ServiceErrorBoundary } from "./serviceErrorBoundary"
import { formatServiceErrorMessage } from "./formatServiceErrorMessage"

export function LocationServiceErrorBoundary(props: { children: ReactNode }) {
  return (
    <ServiceErrorBoundary
      children={props.children}
      fallback={error =>
        <span className="error-message">
          {formatServiceErrorMessage(error)}
        </span>
      }
    />
  )
}
