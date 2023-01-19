import { useContext } from "react"

import { LimitMoveFunctionsContext } from "../../../contexts/section/LimitMoveFunctionsProvider"
import { SectionDisplayedRefContext } from "../../../contexts/section/SectionDisplayedProvider"
import { SectionPlacementSettersContext } from "../../../contexts/section/SectionPlacementProvider"

export function useScroll() {
  const sectionDisplayedRef = useContext(SectionDisplayedRefContext)

  const {getHorizontalBounds, limitSliderMovements} = useContext(LimitMoveFunctionsContext)
  const {setHasHiddenContentOnRight, setSectionLeftSpacing} = useContext(SectionPlacementSettersContext)

  function scrollSectionContent(direction: 'left' | 'right') {
    if (!sectionDisplayedRef.current) return

    const step = sectionDisplayedRef.current.clientWidth / 2.5
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
