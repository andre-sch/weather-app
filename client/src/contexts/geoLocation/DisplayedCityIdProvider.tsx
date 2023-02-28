import { useState, useEffect, createContext, useContext } from "react"
import type { ReactNode, Dispatch } from "react"

import { RegisteredCityGetterContext } from "./RegisteredCityProvider"

interface ProviderProps { children: ReactNode }

export const DisplayedCityIdGetterContext = createContext('')
export const DisplayedCityIdSetterContext = createContext({} as Dispatch<string>)

export function DisplayedCityIdProvider(props: ProviderProps) {
  const [displayedCityID, setDisplayedCityID] = useState('')
  const registeredCities = useContext(RegisteredCityGetterContext)

  useEffect(() => {
    const [firstCity] = registeredCities
    if (firstCity) setDisplayedCityID(firstCity.location)
    else setDisplayedCityID('')
  }, [registeredCities])

  return (
    <DisplayedCityIdGetterContext.Provider value={displayedCityID}>
      <DisplayedCityIdSetterContext.Provider value={setDisplayedCityID}>
        {props.children}
      </DisplayedCityIdSetterContext.Provider>
    </DisplayedCityIdGetterContext.Provider>
  )
}
