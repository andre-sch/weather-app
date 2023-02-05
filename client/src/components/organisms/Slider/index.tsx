import { SectionDisplayedProvider } from "../../../contexts/section/SectionDisplayedProvider"
import { SectionOffsetLeftProvider } from "../../../contexts/section/SectionOffsetLeftProvider"
import { SectionLeftMaxProvider } from "../../../contexts/section/SectionLeftMaxProvider"

import { SliderHeader } from "./SliderHeader"
import { SliderNav } from "./SliderNav"
import { SliderMain } from "./SliderMain"

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
