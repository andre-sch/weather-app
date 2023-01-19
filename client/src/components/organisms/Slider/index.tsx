import { SectionDisplayedProvider } from "../../../contexts/section/SectionDisplayedProvider"
import { SectionPlacementProvider } from "../../../contexts/section/SectionPlacementProvider"
import { LimitMoveFunctionsProvider } from "../../../contexts/section/LimitMoveFunctionsProvider"

import { SliderHeader } from "../../molecules/SliderHeader"
import { SliderNav } from "../../molecules/SliderNav"
import { SliderMain } from "../../molecules/SliderMain"

import "./index.css"

export function Slider() {
  return (
    <div className="slider">
      <SectionDisplayedProvider>
        <SliderHeader />

        <SectionPlacementProvider>
          <LimitMoveFunctionsProvider>
            <SliderNav />
            <SliderMain />

          </LimitMoveFunctionsProvider>
        </SectionPlacementProvider>
      </SectionDisplayedProvider>
    </div>
  )
}
