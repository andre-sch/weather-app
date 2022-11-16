import { useEffect, useContext, createContext } from 'react'
import { useCursorTracking } from './useCursorTracking'

import { SectionDisplayedContext } from '../contexts/SectionDisplayed'
import { PositionSettersContext } from '../contexts/PositionSetters'
import { LimitMoveContext } from '../contexts/LimitMoveProvider'

import { HourlySection } from './sections/HourlySection'
import { DailySection } from './sections/DailySection'
import { DetailsSection } from './sections/DetailsSection'

import type { sectionIDs } from '..'

import './index.css'

export interface SliderMainProps {
  sectionDisplayedID: sectionIDs
  sectionLeftSpacing: number
}

export const SliderSectionContext = createContext({} as SliderMainProps)

export function SliderMain(props: SliderMainProps) {
  const {sectionDisplayedID, sectionLeftSpacing} = props
  const sectionDisplayed = useContext(SectionDisplayedContext)

  const {getHorizontalBounds, limitSliderMovements} = useContext(LimitMoveContext)
  const {setHasHiddenContentOnRight, setSectionLeftSpacing} = useContext(PositionSettersContext)

  const {cursorStyle, cursorTrackingEndpoints} = useCursorTracking(sectionDisplayedID)

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

  return (
    <main style={{cursor: cursorStyle}}>
      <SliderSectionContext.Provider value={{sectionDisplayedID, sectionLeftSpacing}}>
        <HourlySection />
        <DailySection />
        <DetailsSection />
      </SliderSectionContext.Provider>
    </main>
  )
}
