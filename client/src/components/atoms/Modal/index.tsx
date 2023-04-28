import type { ReactNode } from "react"

interface ModalProps {
  shouldDisplay: boolean
  hideOverlay: () => void
  children: ReactNode
}

export function Modal(props: ModalProps) {
  const visibility = props.shouldDisplay ? 'show' : 'hide'

  return (
    <div className={`modal ${visibility}`}>
      {props.children}
      <div
        className="overlay"
        onClick={props.hideOverlay}>
      </div>
    </div>
  )
}
