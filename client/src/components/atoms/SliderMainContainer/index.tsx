import { ReactNode } from "react"

import { useCursorTracking } from "./useCursorTracking"
import { useWidthManagement } from "./useWidthManagement"

export function SliderMainContainer({ children }: { children: ReactNode }) {
  const {cursorStyle, cursorTrackingEndpoints} = useCursorTracking()
  useWidthManagement(cursorTrackingEndpoints)

  return <main style={{cursor: cursorStyle}}>{children}</main>
}
