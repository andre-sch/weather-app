import { useState, useRef } from 'react'

import { PositionSettersContext } from './contexts/PositionSetters'
import { SectionDisplayedContext } from './contexts/SectionDisplayed'
import { LimitMoveFunctionsProvider } from './contexts/LimitMoveProvider'

import { SliderHeader } from './SliderHeader'
import { SliderNav } from './SliderNav'
import { SliderMain } from './SliderMain'

export type forecasts = 'hourly' | 'daily'
export type sectionIDs = forecasts | 'details'

export function Slider() {
  var sectionDisplayed = useRef<HTMLDivElement>(null)
  const [sectionDisplayedID, setSectionDisplayedID] = useState<sectionIDs>('hourly')

  const [hasHiddenContentOnRight, setHasHiddenContentOnRight] = useState(false)
  const [sectionLeftSpacing, setSectionLeftSpacing] = useState(0)

  return (
    <div className="slider">
      <SliderHeader
        sectionDisplayedID={sectionDisplayedID}
        setSectionDisplayedID={setSectionDisplayedID} />

      <SectionDisplayedContext.Provider value={sectionDisplayed}>
        <LimitMoveFunctionsProvider>
          <PositionSettersContext.Provider
            value={{setHasHiddenContentOnRight, setSectionLeftSpacing}}>

            <SliderNav
              hasHiddenContentOnRight={hasHiddenContentOnRight}
              sectionLeftSpacing={sectionLeftSpacing} />
            <SliderMain
              sectionLeftSpacing={sectionLeftSpacing}
              sectionDisplayedID={sectionDisplayedID} />

          </PositionSettersContext.Provider>
        </LimitMoveFunctionsProvider>
      </SectionDisplayedContext.Provider>
    </div>
  )
}
