import { createContext, useState, useContext, useMemo } from "react"
import type { Dispatch, ReactNode } from "react"

import { SectionDisplayedRefContext } from "./SectionDisplayedProvider"

export const SectionLeftMaxGetterContext = createContext(0)
export const SectionLeftMaxSettersContext = createContext({} as {
  setSectionLeftMax: Dispatch<number>
  calculateSectionLeftMax: () => number
})

type ProviderProps = { children: ReactNode }

export function SectionLeftMaxProvider(props: ProviderProps) {
  const [sectionLeftMax, setSectionLeftMax] = useState(0)
  const sectionDisplayedRef = useContext(SectionDisplayedRefContext)

  function calculateSectionLeftMax(): number {
    if (!sectionDisplayedRef.current) return 0
    else return Math.floor(
      sectionDisplayedRef.current.scrollWidth -
      sectionDisplayedRef.current.clientWidth
    )
  }

  const sectionLeftMaxSetters = useMemo(() => ({
    setSectionLeftMax, calculateSectionLeftMax
  }), [])

  return (
    <SectionLeftMaxGetterContext.Provider value={sectionLeftMax}>
      <SectionLeftMaxSettersContext.Provider value={sectionLeftMaxSetters}>
        {props.children}
      </SectionLeftMaxSettersContext.Provider>
    </SectionLeftMaxGetterContext.Provider>
  )
}
