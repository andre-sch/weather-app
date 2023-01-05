import { useState, useEffect, useContext } from "react"

import { SectionDisplayedRefContext, SectionDisplayedIdGetterContext } from "../providers/SectionDisplayedProvider"
import { SectionPlacementSettersContext } from "../providers/SectionPlacementProvider"
import { LimitMoveFunctionsContext } from "../providers/LimitMoveFunctionsProvider"

type cursorStyles = 'grab' | 'grabbing' | 'default'

export function useCursorTracking() {
  const sectionDisplayed = useContext(SectionDisplayedRefContext)
  const sectionDisplayedID = useContext(SectionDisplayedIdGetterContext)

  const {getHorizontalBounds, limitSliderMovements} = useContext(LimitMoveFunctionsContext)
  const {setHasHiddenContentOnRight, setSectionLeftSpacing} = useContext(SectionPlacementSettersContext)

  const [cursorStyle, setCursorStyle] = useState<cursorStyles>('grab')
  const [cursorTracking, setCursorTracking] = useState({previousPosition: 0, currentPosition: 0})

  useEffect(() => {
    if(!sectionDisplayed.current) return
    setCursorTracking({previousPosition: 0, currentPosition: 0})
  }, [sectionDisplayedID])

  function bindCursorTrackingEndpoints() {
    setCursorStyle('grab')
    sectionDisplayed.current!.onmousedown = startCursorTracking
    sectionDisplayed.current!.onmouseup = finishCursorTracking
  }

  function unbindCursorTrackingEndpoints() {
    setCursorStyle('default')
    sectionDisplayed.current!.onmousedown = null
    sectionDisplayed.current!.onmouseup = null
  }

  function startCursorTracking(event: MouseEvent) {
    setCursorStyle('grabbing')
    sectionDisplayed.current!.onmousemove = trackCursorCurrentPosition

    setCursorTracking(previousObj => ({...previousObj, previousPosition: event.clientX}))
  }

  function finishCursorTracking() {
    setCursorStyle('grab')
    sectionDisplayed.current!.onmousemove = null
  }

  function trackCursorCurrentPosition(event: MouseEvent) {
    setCursorTracking(previousObj => ({...previousObj, currentPosition: event.clientX}))
  }

  useEffect(() => {
    if (cursorTracking.currentPosition) {
      const dragOffset = cursorTracking.previousPosition - cursorTracking.currentPosition
      setSectionLeftSpacing(previousLeft => {
        var nextLeft = previousLeft + dragOffset

        const [, leftMax] = getHorizontalBounds()
        if (nextLeft >= leftMax) setHasHiddenContentOnRight(false)
        else setHasHiddenContentOnRight(true)

        return limitSliderMovements(nextLeft)
      })
      setCursorTracking(previousObj => ({...previousObj, previousPosition: previousObj.currentPosition}))
    }
  }, [cursorTracking.currentPosition])

  return {
    cursorStyle,
    cursorTrackingEndpoints: {
      bind: bindCursorTrackingEndpoints,
      unbind: unbindCursorTrackingEndpoints
    }
  }
}
