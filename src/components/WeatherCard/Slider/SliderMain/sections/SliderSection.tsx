import { type ReactNode, useContext } from "react"

import { SectionDisplayedContext } from "../../contexts/SectionDisplayed"
import { SliderSectionContext } from ".."

import type { sectionIDs } from "../.."

interface SliderSectionProps {
  sectionID: sectionIDs
  children: ReactNode
}

export function SliderSection({sectionID, children}: SliderSectionProps) {
  const sectionDisplayed = useContext(SectionDisplayedContext)
  const {sectionDisplayedID, sectionLeftSpacing} = useContext(SliderSectionContext)

  const isBeingDisplayed = sectionDisplayedID == sectionID
  const elementStyle = {
    transform: `translateX(-${isBeingDisplayed ? sectionLeftSpacing : '0'}px)`
  }

  return (
    <section
      ref={isBeingDisplayed ? sectionDisplayed : null}
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
