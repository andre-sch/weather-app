import { SectionDisplayedProvider } from "../../../contexts/section/SectionDisplayedProvider"
import { SectionOffsetLeftProvider } from "../../../contexts/section/SectionOffsetLeftProvider"
import { SectionLeftMaxProvider } from "../../../contexts/section/SectionLeftMaxProvider"

import { SliderHeader } from "../../molecules/SliderHeader"
import { SliderNav } from "../../molecules/SliderNav"
import { SliderMain } from "../../molecules/SliderMain"

import "./index.css"

export function Slider() {
  return (
    <div className="slider">
      <SectionDisplayedProvider>
        <SliderHeader />

        <SectionLeftMaxProvider>
          <SectionOffsetLeftProvider>
            <SliderNav />
            <SliderMain />

          </SectionOffsetLeftProvider>
        </SectionLeftMaxProvider>
      </SectionDisplayedProvider>
    </div>
  )
}
