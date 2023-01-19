import { SliderMainContainer } from "../../atoms/SliderMainContainer"

import { HourlySection } from "../HourlySection"
import { DailySection } from "../DailySection"
import { DetailsSection } from "../DetailsSection"

import "./index.css"

export function SliderMain() {
  return (
    <SliderMainContainer>
      <HourlySection />
      <DailySection />
      <DetailsSection />
    </SliderMainContainer>
  )
}
