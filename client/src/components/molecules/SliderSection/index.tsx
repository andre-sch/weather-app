import { useContext, type ReactNode } from "react"

import { SectionDisplayedIdGetterContext, SectionDisplayedRefContext } from "../../../contexts/section/SectionDisplayedProvider"
import { SectionOffsetLeftGetterContext } from "../../../contexts/section/SectionOffsetLeftProvider"

import "./index.css"

interface SliderSectionProps {
  sectionID: 'hourly' | 'daily' | 'details'
  children: ReactNode
}

export function SliderSection({sectionID, children}: SliderSectionProps) {
  const sectionDisplayedID = useContext(SectionDisplayedIdGetterContext)
  const sectionDisplayedRef = useContext(SectionDisplayedRefContext)

  const sectionOffsetLeft = useContext(SectionOffsetLeftGetterContext)

  const isBeingDisplayed = sectionDisplayedID == sectionID
  const elementStyle = {
    transform: `translateX(-${isBeingDisplayed ? sectionOffsetLeft : '0'}px)`
  }

  return (
    <section
      ref={isBeingDisplayed ? sectionDisplayedRef : null}
      style={elementStyle}
      className={
        `${sectionID != 'details' ? 'forecast ' : ''}` +
        `${sectionID} ${isBeingDisplayed ? 'show' : ''}`
      }
    >
      {children}
    </section>
  )
}
