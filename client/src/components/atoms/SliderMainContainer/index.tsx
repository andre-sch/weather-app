import { ReactNode, useEffect, useContext } from "react"

import { useCursorTracking } from "./useCursorTracking"

import { WeatherInfoGroupContext } from "../../../contexts/weatherInfo/WeatherInfoProvider"
import { SectionDisplayedIdGetterContext } from "../../../contexts/section/SectionDisplayedProvider"
import { SectionOffsetLeftSettersContext } from "../../../contexts/section/SectionOffsetLeftProvider"
import { SectionLeftMaxSettersContext } from "../../../contexts/section/SectionLeftMaxProvider"

export function SliderMainContainer({ children }: { children: ReactNode }) {
  const sectionDisplayedID = useContext(SectionDisplayedIdGetterContext)

  const { setSectionLeftMax, calculateSectionLeftMax } = useContext(SectionLeftMaxSettersContext)
  const { setSectionOffsetLeft, limitOffsetLeft } = useContext(SectionOffsetLeftSettersContext)

  const weatherInfoGroup = useContext(WeatherInfoGroupContext)
  useEffect(() => setSectionLeftMax(calculateSectionLeftMax()), [weatherInfoGroup])

  const {cursorStyle, cursorTrackingEndpoints} = useCursorTracking()

  window.onresize = () => {
    setSectionOffsetLeft(previousLeft => limitOffsetLeft(previousLeft))
    executeOnSliderWidthChange()
  }

  useEffect(() => {
    setSectionOffsetLeft(0)
    setTimeout(executeOnSliderWidthChange, 350)  // 50ms longer than css transition time
  }, [sectionDisplayedID])

  function executeOnSliderWidthChange() {
    const newSectionLeftMax = calculateSectionLeftMax()
    setSectionLeftMax(newSectionLeftMax)

    if (newSectionLeftMax > 0) cursorTrackingEndpoints.bind()
    else cursorTrackingEndpoints.unbind()
  }

  return <main style={{cursor: cursorStyle}}>{children}</main>
}
