import { createContext } from "react"

interface PositionSetters {
  setHasHiddenContentOnRight: React.Dispatch<React.SetStateAction<boolean>>
  setSectionLeftSpacing: React.Dispatch<React.SetStateAction<number>>
}

export const PositionSettersContext = createContext({} as PositionSetters)
