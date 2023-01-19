import { createContext, useContext, useMemo, type ReactNode } from "react"
import { SectionDisplayedRefContext } from "./SectionDisplayedProvider"

interface LimitMoveFunctions {
  getHorizontalBounds: () => [number, number]
  limitSliderMovements: (movement: number) => number
}

export const LimitMoveFunctionsContext = createContext({} as LimitMoveFunctions)

type ProviderProps = { children: ReactNode }

export function LimitMoveFunctionsProvider(props: ProviderProps) {
  const sectionDisplayedRef = useContext(SectionDisplayedRefContext)

  function getHorizontalBounds(): [number, number] {
    const leftMin = 0
    const leftMax = (
      sectionDisplayedRef.current!.scrollWidth -
      sectionDisplayedRef.current!.clientWidth
    )

    return [leftMin, leftMax]
  }
  function limitSliderMovements(movement: number) {
    const [leftMin, leftMax] = getHorizontalBounds()

    movement = movement < leftMin ? leftMin : movement
    movement = movement > leftMax ? leftMax : movement

    return movement
  }

  const staticFunctions = useMemo(() => ({
    getHorizontalBounds, limitSliderMovements
  }), [sectionDisplayedRef])

  return (
    <LimitMoveFunctionsContext.Provider value={staticFunctions}>
      {props.children}
    </LimitMoveFunctionsContext.Provider>
  )
}
