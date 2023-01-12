
import { SliderMainContainer } from "./container"

import { HourlySection } from "./sections/HourlySection"
import { DailySection } from "./sections/DailySection"
import { DetailsSection } from "./sections/DetailsSection"

import "./index.css"
import "./miniCards.css"

export function SliderMain() {
  return (
    <SliderMainContainer>
      <HourlySection />
      <DailySection />
      <DetailsSection />
    </SliderMainContainer>
  )
}
