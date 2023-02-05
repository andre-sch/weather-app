import { createContext, useState, useContext, useMemo } from "react"
import type { ReactNode, Dispatch, SetStateAction } from "react"

import { SectionLeftMaxSettersContext } from "./SectionLeftMaxProvider"

interface ProviderProps { children: ReactNode }

export const SectionOffsetLeftGetterContext = createContext(0)
export const SectionOffsetLeftSettersContext = createContext({} as {
  setSectionOffsetLeft: Dispatch<SetStateAction<number>>
  limitOffsetLeft: (offsetLeft: number) => number
})

export function SectionOffsetLeftProvider(props: ProviderProps) {
  const [sectionOffsetLeft, setSectionOffsetLeft] = useState(0)
  const { calculateSectionLeftMax } = useContext(SectionLeftMaxSettersContext)

  function limitOffsetLeft(offsetLeft: number) {
    const sectionLeftMin = 0; const sectionLeftMax = calculateSectionLeftMax()

    offsetLeft = offsetLeft < sectionLeftMin ? sectionLeftMin : offsetLeft
    offsetLeft = offsetLeft > sectionLeftMax ? sectionLeftMax : offsetLeft

    return offsetLeft
  }

  const sectionOffsetLeftSetters = useMemo(() => ({
    setSectionOffsetLeft, limitOffsetLeft
  }), [])

  return (
    <SectionOffsetLeftGetterContext.Provider value={sectionOffsetLeft}>
      <SectionOffsetLeftSettersContext.Provider value={sectionOffsetLeftSetters}>
        {props.children}
      </SectionOffsetLeftSettersContext.Provider>
    </SectionOffsetLeftGetterContext.Provider>
  )
}
