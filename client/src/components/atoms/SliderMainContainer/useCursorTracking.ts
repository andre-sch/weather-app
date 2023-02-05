import { useState, useEffect, useContext } from "react"

import { SectionDisplayedRefContext, SectionDisplayedIdGetterContext } from "../../../contexts/section/SectionDisplayedProvider"
import { SectionOffsetLeftSettersContext } from "../../../contexts/section/SectionOffsetLeftProvider"

type cursorStyles = 'grab' | 'grabbing' | 'default'

export function useCursorTracking() {
  const sectionDisplayedRef = useContext(SectionDisplayedRefContext)
  const sectionDisplayedID = useContext(SectionDisplayedIdGetterContext)

  const {limitOffsetLeft, setSectionOffsetLeft} = useContext(SectionOffsetLeftSettersContext)

  const [cursorStyle, setCursorStyle] = useState<cursorStyles>('grab')
  const [cursorTracking, setCursorTracking] = useState({previousPosition: 0, currentPosition: 0})

  useEffect(() => {
    if(!sectionDisplayedRef.current) return
    setCursorTracking({previousPosition: 0, currentPosition: 0})
  }, [sectionDisplayedID])

  function bindCursorTrackingEndpoints() {
    setCursorStyle('grab')
    sectionDisplayedRef.current!.onmousedown = startCursorTracking
    sectionDisplayedRef.current!.onmouseup = finishCursorTracking
  }

  function unbindCursorTrackingEndpoints() {
    setCursorStyle('default')
    sectionDisplayedRef.current!.onmousedown = null
    sectionDisplayedRef.current!.onmouseup = null
  }

  function startCursorTracking(event: MouseEvent) {
    setCursorStyle('grabbing')
    sectionDisplayedRef.current!.onmousemove = trackCursorCurrentPosition

    setCursorTracking(previousObj => ({...previousObj, previousPosition: event.clientX}))
  }

  function finishCursorTracking() {
    setCursorStyle('grab')
    sectionDisplayedRef.current!.onmousemove = null
  }

  function trackCursorCurrentPosition(event: MouseEvent) {
    setCursorTracking(previousObj => ({...previousObj, currentPosition: event.clientX}))
  }

  useEffect(() => {
    if (cursorTracking.currentPosition) {
      const dragOffset = cursorTracking.previousPosition - cursorTracking.currentPosition
      setSectionOffsetLeft(previousLeft => limitOffsetLeft(previousLeft - dragOffset))

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
