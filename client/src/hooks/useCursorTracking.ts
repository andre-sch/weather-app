import { useState, useEffect, type RefObject } from "react"

type cursorStyles = 'grab' | 'grabbing' | 'default'

type coordinates = [number, number]

interface useCursorTrackingProps {
  bindingElementRef: RefObject<HTMLElement>
  handleCursorMove: (offset: coordinates) => void
}

interface ICursorTracking {
  previousPosition: coordinates
  currentPosition: coordinates
}

export function useCursorTracking(props: useCursorTrackingProps) {
  const [cursorStyle, setCursorStyle] = useState<cursorStyles>('grab')
  const [cursorTracking, setCursorTracking] = useState<ICursorTracking>(
    { previousPosition: [0, 0], currentPosition: [0, 0] }
  )

  function bindCursorTrackingEndpoints() {
    setCursorStyle('grab')
    props.bindingElementRef.current!.onmousedown = startCursorTracking
    props.bindingElementRef.current!.onmouseup = finishCursorTracking
    props.bindingElementRef.current!.onmouseleave = finishCursorTracking
  }

  function unbindCursorTrackingEndpoints() {
    setCursorStyle('default')
    props.bindingElementRef.current!.onmousedown = null
    props.bindingElementRef.current!.onmouseup = null
    props.bindingElementRef.current!.onmouseleave = null
  }

  function startCursorTracking(event: MouseEvent) {
    setCursorStyle('grabbing')
    props.bindingElementRef.current!.onmousemove = trackCursorCurrentPosition

    setCursorTracking(previousObj => ({...previousObj, previousPosition: [event.clientX, event.clientY]}))
  }

  function finishCursorTracking() {
    setCursorStyle('grab')
    props.bindingElementRef.current!.onmousemove = null
  }

  function trackCursorCurrentPosition(event: MouseEvent) {
    setCursorTracking(previousObj => ({...previousObj, currentPosition: [event.clientX, event.clientY]}))
  }

  useEffect(() => {
    if (cursorTracking.currentPosition) {
      props.handleCursorMove([
        cursorTracking.currentPosition[0] - cursorTracking.previousPosition[0],
        cursorTracking.currentPosition[1] - cursorTracking.previousPosition[1]
      ])
      setCursorTracking(previousObj => ({...previousObj, previousPosition: previousObj.currentPosition}))
    }
  }, [...cursorTracking.currentPosition])

  return {
    cursorStyle,
    cursorTrackingEndpoints: {
      bind: bindCursorTrackingEndpoints,
      unbind: unbindCursorTrackingEndpoints
    }
  }
}
