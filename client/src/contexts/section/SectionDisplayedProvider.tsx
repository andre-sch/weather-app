import { createContext, useState, useRef } from "react"
import type { ReactNode, RefObject, Dispatch } from "react"

type sectionIDs = 'hourly' | 'daily' | 'details'
interface ProviderProps { children: ReactNode }

export const SectionDisplayedRefContext = createContext({} as RefObject<HTMLDivElement>)

export const SectionDisplayedIdGetterContext = createContext<sectionIDs>('hourly')
export const SectionDisplayedIdSetterContext = createContext({} as Dispatch<sectionIDs>)

export function SectionDisplayedProvider(props: ProviderProps) {
  var sectionDisplayedRef = useRef<HTMLDivElement>(null)
  const [sectionDisplayedID, setSectionDisplayedID] = useState<sectionIDs>('hourly')

  return (
    <SectionDisplayedRefContext.Provider value={sectionDisplayedRef}>
      <SectionDisplayedIdGetterContext.Provider value={sectionDisplayedID}>
        <SectionDisplayedIdSetterContext.Provider value={setSectionDisplayedID}>
          {props.children}
        </SectionDisplayedIdSetterContext.Provider>
      </SectionDisplayedIdGetterContext.Provider>
    </SectionDisplayedRefContext.Provider>
  )
}
