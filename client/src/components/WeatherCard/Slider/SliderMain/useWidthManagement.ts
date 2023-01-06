import { useEffect, useContext } from "react"

import { SectionDisplayedIdGetterContext, SectionDisplayedRefContext } from "../providers/SectionDisplayedProvider"
import { SectionLeftSpacingContext, SectionPlacementSettersContext } from "../providers/SectionPlacementProvider"
import { LimitMoveFunctionsContext } from "../providers/LimitMoveFunctionsProvider"

interface bindingEndpoints { bind: () => void, unbind: () => void }

export function useWidthManagement(cursorTrackingEndpoints: bindingEndpoints) {
  const sectionDisplayedRef = useContext(SectionDisplayedRefContext)
  const sectionDisplayedID = useContext(SectionDisplayedIdGetterContext)

  const {getHorizontalBounds, limitSliderMovements} = useContext(LimitMoveFunctionsContext)
  const {setHasHiddenContentOnRight, setSectionLeftSpacing} = useContext(SectionPlacementSettersContext)
  const sectionLeftSpacing = useContext(SectionLeftSpacingContext)

  window.onresize = () => {
    executeOnSliderWidthChange()
    setSectionLeftSpacing(previousLeft => limitSliderMovements(previousLeft))
  }

  useEffect(() => {
    if(!sectionDisplayedRef.current) return

    setTimeout(executeOnSliderWidthChange, 350)  // 50ms longer than css transition time
    setSectionLeftSpacing(0)
  }, [sectionDisplayedID])

  function executeOnSliderWidthChange() {
    if (!sectionDisplayedRef.current) return

    const [, leftMax] = getHorizontalBounds()
    if (sectionDisplayedRef.current.scrollWidth > sectionDisplayedRef.current.clientWidth) {
      if (sectionLeftSpacing < leftMax) setHasHiddenContentOnRight(true)
      cursorTrackingEndpoints.bind()
    } else {
      setHasHiddenContentOnRight(false)
      cursorTrackingEndpoints.unbind()
    }
  }
}
