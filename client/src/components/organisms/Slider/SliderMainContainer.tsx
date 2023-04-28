import { ReactNode, useEffect, useRef, useContext } from "react"

import { useCursorTracking } from "../../../hooks/useCursorTracking"

import { WeatherInfoGroupContext } from "../../../contexts/weatherInfo/WeatherInfoGroupProvider"
import { DisplayedCityIdGetterContext } from "../../../contexts/geoLocation/DisplayedCityIdProvider"
import { SectionDisplayedIdGetterContext } from "../../../contexts/section/SectionDisplayedProvider"
import { SectionOffsetLeftSettersContext } from "../../../contexts/section/SectionOffsetLeftProvider"
import { SectionLeftMaxSettersContext } from "../../../contexts/section/SectionLeftMaxProvider"

export function SliderMainContainer({ children }: { children: ReactNode }) {
  const SliderMainRef = useRef(null)
  const displayedCityID = useContext(DisplayedCityIdGetterContext)
  const sectionDisplayedID = useContext(SectionDisplayedIdGetterContext)

  const { setSectionLeftMax, calculateSectionLeftMax } = useContext(SectionLeftMaxSettersContext)
  const { setSectionOffsetLeft, limitOffsetLeft } = useContext(SectionOffsetLeftSettersContext)

  const weatherInfoGroup = useContext(WeatherInfoGroupContext)
  useEffect(() => setSectionLeftMax(calculateSectionLeftMax()), [weatherInfoGroup])

  const {cursorStyle, cursorTrackingEndpoints} = useCursorTracking({
    bindingElementRef: SliderMainRef,
    handleCursorMove: ([horizontalOffset,]) => {
      setSectionOffsetLeft(previousLeft => limitOffsetLeft(previousLeft - horizontalOffset))
    }
  })

  window.onresize = () => {
    setSectionOffsetLeft(previousLeft => limitOffsetLeft(previousLeft))
    executeOnSliderWidthChange()
  }

  useEffect(() => setSectionOffsetLeft(0), [displayedCityID, sectionDisplayedID])
  useEffect(() => {setTimeout(executeOnSliderWidthChange, 350)}, [sectionDisplayedID]) // 50ms longer than css transition time

  function executeOnSliderWidthChange() {
    const newSectionLeftMax = calculateSectionLeftMax()
    setSectionLeftMax(newSectionLeftMax)

    if (newSectionLeftMax > 0) cursorTrackingEndpoints.bind()
    else cursorTrackingEndpoints.unbind()
  }

  return <main ref={SliderMainRef} style={{cursor: cursorStyle}}>{children}</main>
}
