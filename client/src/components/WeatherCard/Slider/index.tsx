import { SectionDisplayedProvider } from "./providers/SectionDisplayedProvider"
import { SectionPlacementProvider } from "./providers/SectionPlacementProvider"
import { LimitMoveFunctionsProvider } from "./providers/LimitMoveFunctionsProvider"

import { SliderHeader } from "./SliderHeader"
import { SliderNav } from "./SliderNav"
import { SliderMain } from "./SliderMain"

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
