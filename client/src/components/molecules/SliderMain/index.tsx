import { SliderMainContainer } from "../../atoms/SliderMainContainer"

import { SliderSection } from "../SliderSection"

import { HourlyCards } from "../HourlyCards"
import { DailyCards } from "../DailyCards"
import { DetailCards } from "../DetailCards"

import "./index.css"

export function SliderMain() {
  return (
    <SliderMainContainer>
      <SliderSection sectionID="hourly" children={<HourlyCards/>} />
      <SliderSection sectionID="daily" children={<DailyCards/>} />
      <SliderSection sectionID="details" children={<DetailCards/>} />
    </SliderMainContainer>
  )
}
