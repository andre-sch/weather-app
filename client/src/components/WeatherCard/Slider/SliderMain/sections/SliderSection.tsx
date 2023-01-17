import { useContext, type ReactNode } from "react"

import { SectionDisplayedIdGetterContext, SectionDisplayedRefContext } from "../../providers/SectionDisplayedProvider"
import { SectionLeftSpacingContext } from "../../providers/SectionPlacementProvider"

interface SliderSectionProps {
  sectionID: 'hourly' | 'daily' | 'details'
  children: ReactNode
}

export function SliderSection({sectionID, children}: SliderSectionProps) {
  const sectionDisplayedID = useContext(SectionDisplayedIdGetterContext)
  const sectionDisplayedRef = useContext(SectionDisplayedRefContext)

  const sectionLeftSpacing = useContext(SectionLeftSpacingContext)

  const isBeingDisplayed = sectionDisplayedID == sectionID
  const elementStyle = {
    transform: `translateX(-${isBeingDisplayed ? sectionLeftSpacing : '0'}px)`
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
