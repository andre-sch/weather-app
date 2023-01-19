import { useState, createContext } from "react"
import type { ReactNode, Dispatch } from "react"

interface ProviderProps { children: ReactNode }

export const MenuDisplayGetterContext = createContext(false)
export const MenuDisplaySetterContext = createContext({} as Dispatch<boolean>)

export function MenuDisplayProvider(props: ProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <MenuDisplayGetterContext.Provider value={isMenuOpen}>
      <MenuDisplaySetterContext.Provider value={setIsMenuOpen}>
        {props.children}
      </MenuDisplaySetterContext.Provider>
    </MenuDisplayGetterContext.Provider>
  )
}
