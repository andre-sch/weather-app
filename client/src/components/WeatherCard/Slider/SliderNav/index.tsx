import { useContext } from "react"

import { SectionHiddenContentOnRightContext, SectionLeftSpacingContext } from "../providers/SectionPlacementProvider"
import { useScroll } from "./useScroll"

import './index.css'

export function SliderNav() {
  const scrollSectionContent = useScroll()

  const sectionLeftSpacing = useContext(SectionLeftSpacingContext)
  const hasHiddenContentOnRight = useContext(SectionHiddenContentOnRightContext)

  return (
    <nav className="horizontal-arrows">
      <button
        disabled={sectionLeftSpacing == 0}
        onClick={() => scrollSectionContent('left')}>

        <img
          src="/assets/other/thin-arrow.svg"
          alt="See previous weather forecast information"
          style={{transform: 'rotate(180deg)'}} />
      </button>

      <button
        disabled={!hasHiddenContentOnRight}
        onClick={() => scrollSectionContent('right')}>

        <img
          src="/assets/other/thin-arrow.svg"
          alt="See next weather forecast information" />
      </button>
    </nav>
  )
}
