import { useContext } from "react"

import { SectionDisplayedRefContext } from "../providers/SectionDisplayedProvider"
import { SectionHiddenContentOnRightContext, SectionLeftSpacingContext, SectionPlacementSettersContext } from "../providers/SectionPlacementProvider"
import { LimitMoveFunctionsContext } from "../providers/LimitMoveFunctionsProvider"

import './index.css'

export function SliderNav() {
  const sectionDisplayed = useContext(SectionDisplayedRefContext)

  const {getHorizontalBounds, limitSliderMovements} = useContext(LimitMoveFunctionsContext)
  const {setHasHiddenContentOnRight, setSectionLeftSpacing} = useContext(SectionPlacementSettersContext)

  const hasHiddenContentOnRight = useContext(SectionHiddenContentOnRightContext)
  const sectionLeftSpacing =  useContext(SectionLeftSpacingContext)

  function scrollHiddenContent(direction: 'left' | 'right') {
    if (!sectionDisplayed.current) return

    const step = sectionDisplayed.current.clientWidth / 2.5
    const [, leftMax] = getHorizontalBounds()

    setSectionLeftSpacing(previousLeft => {
      var nextLeft
      if (direction == 'right') nextLeft = previousLeft + step
      else nextLeft = previousLeft - step

      if (nextLeft >= leftMax) setTimeout(() => setHasHiddenContentOnRight(false), 650)  // 50ms longer than css transition time
      else setHasHiddenContentOnRight(true)

      return limitSliderMovements(nextLeft)
    })
  }

  return (
    <nav className="horizontal-arrows">
      <button
        disabled={sectionLeftSpacing == 0}
        onClick={() => scrollHiddenContent('left')}>

        <img
          src="/assets/other/thin-arrow.svg"
          alt="See previous weather forecast information"
          style={{transform: 'rotate(180deg)'}} />
      </button>

      <button
        disabled={!hasHiddenContentOnRight}
        onClick={() => scrollHiddenContent('right')}>

        <img
          src="/assets/other/thin-arrow.svg"
          alt="See next weather forecast information" />
      </button>
    </nav>
  )
}
