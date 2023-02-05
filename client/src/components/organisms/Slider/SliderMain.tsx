import { SliderMainContainer } from "./SliderMainContainer"
import { SliderSection } from "./SliderMainSection"

import { HourlyCards } from "../../molecules/HourlyCards"
import { DailyCards } from "../../molecules/DailyCards"
import { DetailCards } from "../../molecules/DetailCards"

import "./SliderMain.css"

export function SliderMain() {
  return (
    <SliderMainContainer>
      <SliderSection sectionID="hourly" children={<HourlyCards/>} />
      <SliderSection sectionID="daily" children={<DailyCards/>} />
      <SliderSection sectionID="details" children={<DetailCards/>} />
    </SliderMainContainer>
  )
}
