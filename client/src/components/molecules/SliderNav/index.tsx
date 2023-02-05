import { useContext } from "react"

import { SectionDisplayedRefContext } from "../../../contexts/section/SectionDisplayedProvider"

import { SectionLeftMaxGetterContext } from "../../../contexts/section/SectionLeftMaxProvider"
import { SectionOffsetLeftGetterContext, SectionOffsetLeftSettersContext } from "../../../contexts/section/SectionOffsetLeftProvider"

import './index.css'

export function SliderNav() {
  const scrollSectionContent = useScroll()

  const sectionLeftMax = useContext(SectionLeftMaxGetterContext)
  const sectionOffsetLeft = useContext(SectionOffsetLeftGetterContext)

  return (
    <nav className="horizontal-arrows">
      <button
        disabled={sectionOffsetLeft == 0}
        onClick={() => scrollSectionContent('left')}>

        <img
          src="/assets/other/thin-arrow.svg"
          alt="See previous weather forecast information"
          style={{transform: 'rotate(180deg)'}} />
      </button>

      <button
        disabled={sectionLeftMax == 0 ? true : sectionOffsetLeft == sectionLeftMax}
        onClick={() => scrollSectionContent('right')}>

        <img
          src="/assets/other/thin-arrow.svg"
          alt="See next weather forecast information" />
      </button>
    </nav>
  )
}

function useScroll() {
  const sectionDisplayedRef = useContext(SectionDisplayedRefContext)
  const { setSectionOffsetLeft, limitOffsetLeft } = useContext(SectionOffsetLeftSettersContext)

  return function scrollSectionContent(direction: 'left' | 'right') {
    if (!sectionDisplayedRef.current) return

    var scrollOffset = sectionDisplayedRef.current.clientWidth / 2.5
    if (direction == 'left') scrollOffset = - scrollOffset

    setSectionOffsetLeft(previousLeft => limitOffsetLeft(previousLeft + scrollOffset))
  }
}
