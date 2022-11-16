import { createContext } from 'react'

type SectionDisplayedType = React.RefObject<HTMLDivElement>

export const SectionDisplayedContext = createContext({} as SectionDisplayedType)
