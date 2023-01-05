import { createContext, useState, useMemo } from "react"
import type { ReactNode, Dispatch, SetStateAction } from "react"

interface ProviderProps { children: ReactNode }
interface IPlacementSetters {
  setHasHiddenContentOnRight: Dispatch<SetStateAction<boolean>>
  setSectionLeftSpacing: Dispatch<SetStateAction<number>>
}

export const SectionPlacementSettersContext = createContext({} as IPlacementSetters)
export const SectionHiddenContentOnRightContext = createContext(false)
export const SectionLeftSpacingContext = createContext(0)

export function SectionPlacementProvider(props: ProviderProps) {
  const [hasHiddenContentOnRight, setHasHiddenContentOnRight] = useState(false)
  const [sectionLeftSpacing, setSectionLeftSpacing] = useState(0)

  const placementSetters = useMemo(() => ({
    setHasHiddenContentOnRight, setSectionLeftSpacing
  }), [])

  return (
    <SectionPlacementSettersContext.Provider value={placementSetters}>
      <SectionHiddenContentOnRightContext.Provider value={hasHiddenContentOnRight}>
        <SectionLeftSpacingContext.Provider value={sectionLeftSpacing}>
          {props.children}
        </SectionLeftSpacingContext.Provider>
      </SectionHiddenContentOnRightContext.Provider>
    </SectionPlacementSettersContext.Provider>
  )
}
