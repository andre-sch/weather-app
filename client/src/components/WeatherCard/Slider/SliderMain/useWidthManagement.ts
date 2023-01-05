import { useEffect, useContext } from "react"

import { SectionDisplayedIdGetterContext, SectionDisplayedRefContext } from "../providers/SectionDisplayedProvider"
import { SectionLeftSpacingContext, SectionPlacementSettersContext } from "../providers/SectionPlacementProvider"
import { LimitMoveFunctionsContext } from "../providers/LimitMoveFunctionsProvider"

interface bindingEndpoints { bind: () => void, unbind: () => void }

export function useWidthManagement(cursorTrackingEndpoints: bindingEndpoints) {
  const sectionDisplayed = useContext(SectionDisplayedRefContext)
  const sectionDisplayedID = useContext(SectionDisplayedIdGetterContext)

  const {getHorizontalBounds, limitSliderMovements} = useContext(LimitMoveFunctionsContext)
  const {setHasHiddenContentOnRight, setSectionLeftSpacing} = useContext(SectionPlacementSettersContext)
  const sectionLeftSpacing = useContext(SectionLeftSpacingContext)

  window.onresize = () => {
    executeOnSliderWidthChange()
    setSectionLeftSpacing(previousLeft => limitSliderMovements(previousLeft))
  }

  useEffect(() => {
    if(!sectionDisplayed.current) return

    setTimeout(executeOnSliderWidthChange, 350)  // 50ms longer than css transition time
    setSectionLeftSpacing(0)
  }, [sectionDisplayedID])

  function executeOnSliderWidthChange() {
    if (!sectionDisplayed.current) return

    const [, leftMax] = getHorizontalBounds()
    if (sectionDisplayed.current.scrollWidth > sectionDisplayed.current.clientWidth) {
      if (sectionLeftSpacing < leftMax) setHasHiddenContentOnRight(true)
      cursorTrackingEndpoints.bind()
    } else {
      setHasHiddenContentOnRight(false)
      cursorTrackingEndpoints.unbind()
    }
  }
}
