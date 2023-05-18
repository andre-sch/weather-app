import { useState, useEffect, createContext } from "react"
import type { ReactNode, Dispatch, SetStateAction } from "react"

import { defaultCities, type ICityRegistry } from "./defaultCities"

interface ProviderProps { children: ReactNode }

export const RegisteredCityGetterContext = createContext([] as ICityRegistry[])
export const RegisteredCitySetterContext = createContext({} as Dispatch<SetStateAction<ICityRegistry[]>>)

export function RegisteredCityProvider(props: ProviderProps) {
  const [registeredCities, setRegisteredCities] = useState(getStoredRegisteredCities() || defaultCities)
  useEffect(storeRegisteredCities, [registeredCities])

  return (
    <RegisteredCityGetterContext.Provider value={registeredCities}>
      <RegisteredCitySetterContext.Provider value={setRegisteredCities}>
        {props.children}
      </RegisteredCitySetterContext.Provider>
    </RegisteredCityGetterContext.Provider>
  )

  function getStoredRegisteredCities() {
    const rawStorage = localStorage.getItem('registered-cities')
    return !rawStorage ? undefined : JSON.parse(rawStorage) as ICityRegistry[]
  }

  function storeRegisteredCities() {
    localStorage.setItem('registered-cities', JSON.stringify(registeredCities))
  }
}
