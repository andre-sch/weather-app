import { createContext, useState } from "react"
import type { Dispatch, ReactNode, ReactElement } from "react"

export const ServiceErrorSetterContext = createContext({} as Dispatch<any>)

type Props = { children: ReactNode, fallback: (error: any) => ReactElement }

export function ServiceErrorBoundary({ children, fallback }: Props) {
  const [serviceError, setServiceError] = useState<any>(null)
  if (serviceError) return fallback(serviceError)

  return <ServiceErrorSetterContext.Provider value={setServiceError} children={children} />
}
