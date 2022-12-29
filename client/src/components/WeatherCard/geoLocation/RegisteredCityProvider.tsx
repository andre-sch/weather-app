import { useState, createContext } from "react"
import type { ReactNode, Dispatch } from "react"

import { defaultCities, type registeredCity } from "./defaultCities"

interface ProviderProps { children: ReactNode }

export const RegisteredCityGetterContext = createContext([] as registeredCity[])
export const RegisteredCitySetterContext = createContext({} as Dispatch<registeredCity[]>)

export function RegisteredCityProvider(props: ProviderProps) {
  const [registeredCities, setRegisteredCities] = useState(defaultCities)

  return (
    <RegisteredCityGetterContext.Provider value={registeredCities}>
      <RegisteredCitySetterContext.Provider value={setRegisteredCities}>
        {props.children}
      </RegisteredCitySetterContext.Provider>
    </RegisteredCityGetterContext.Provider>
  )
}
