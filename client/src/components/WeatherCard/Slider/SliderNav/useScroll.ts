import { useContext } from "react"

import { LimitMoveFunctionsContext } from "../providers/LimitMoveFunctionsProvider"
import { SectionDisplayedRefContext } from "../providers/SectionDisplayedProvider"
import { SectionPlacementSettersContext } from "../providers/SectionPlacementProvider"

export function useScroll() {
  const sectionDisplayed = useContext(SectionDisplayedRefContext)

  const {getHorizontalBounds, limitSliderMovements} = useContext(LimitMoveFunctionsContext)
  const {setHasHiddenContentOnRight, setSectionLeftSpacing} = useContext(SectionPlacementSettersContext)

  function scrollSectionContent(direction: 'left' | 'right') {
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

  return scrollSectionContent
}
