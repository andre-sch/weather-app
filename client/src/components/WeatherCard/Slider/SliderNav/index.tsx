import { useContext } from "react"

import { SectionDisplayedContext } from "../contexts/SectionDisplayed"
import { PositionSettersContext } from "../contexts/PositionSetters"
import { LimitMoveContext } from "../contexts/LimitMoveProvider"

import thinArrow from "../../../../assets/other/thin-arrow.svg"

import './index.css'

interface SliderNavProps {
  hasHiddenContentOnRight: boolean
  sectionLeftSpacing: number
}

export function SliderNav(props: SliderNavProps) {
  const {hasHiddenContentOnRight, sectionLeftSpacing} = props
  const sectionDisplayed = useContext(SectionDisplayedContext)

  const {getHorizontalBounds, limitSliderMovements} = useContext(LimitMoveContext)
  const {setHasHiddenContentOnRight, setSectionLeftSpacing} = useContext(PositionSettersContext)

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
          src={thinArrow}
          alt="See previous weather forecast information"
          style={{transform: 'rotate(180deg)'}} />
      </button>

      <button
        disabled={!hasHiddenContentOnRight}
        onClick={() => scrollHiddenContent('right')}>

        <img
          src={thinArrow}
          alt="See next weather forecast information" />
      </button>
    </nav>
  )
}
