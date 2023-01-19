import { useState, createContext, useContext } from "react"
import type { ReactNode, Dispatch } from "react"

import { RegisteredCityGetterContext } from "./RegisteredCityProvider"

interface ProviderProps { children: ReactNode }

export const DisplayedCityIdGetterContext = createContext('')
export const DisplayedCityIdSetterContext = createContext({} as Dispatch<string>)

export function DisplayedCityIdProvider(props: ProviderProps) {
  const [ firstCity ] = useContext(RegisteredCityGetterContext)
  const [displayedCityId, setDisplayedCityId] = useState(firstCity.location)

  return (
    <DisplayedCityIdGetterContext.Provider value={displayedCityId}>
      <DisplayedCityIdSetterContext.Provider value={setDisplayedCityId}>
        {props.children}
      </DisplayedCityIdSetterContext.Provider>
    </DisplayedCityIdGetterContext.Provider>
  )
}
