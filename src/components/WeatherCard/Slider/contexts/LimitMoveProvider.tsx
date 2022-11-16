import { createContext, useContext, type ReactNode } from "react";
import { SectionDisplayedContext } from "./SectionDisplayed";

interface LimitMoveFunctions {
  getHorizontalBounds: () => [number, number]
  limitSliderMovements: (movement: number) => number
}

export const LimitMoveContext = createContext({} as LimitMoveFunctions)

type ProviderProps = {children: ReactNode}

export function LimitMoveFunctionsProvider({children}: ProviderProps) {
  const sectionDisplayed = useContext(SectionDisplayedContext)

  function getHorizontalBounds(): [number, number] {
    const leftMin = 0
    const leftMax = (
      sectionDisplayed.current!.scrollWidth -
      sectionDisplayed.current!.clientWidth
    )

    return [leftMin, leftMax]
  }

  function limitSliderMovements(movement: number) {
    const [leftMin, leftMax] = getHorizontalBounds()

    movement = movement < leftMin ? leftMin : movement
    movement = movement > leftMax ? leftMax : movement

    return movement
  }

  return (
    <LimitMoveContext.Provider
      value={{getHorizontalBounds, limitSliderMovements}}>
      {children}
    </LimitMoveContext.Provider>
  )
}
