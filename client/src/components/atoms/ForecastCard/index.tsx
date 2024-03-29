import { ReactNode } from "react"

import "./index.css"

interface ForecastCardProps {
  extraClassName?: string
  time: string
  iconPath: string
  iconDescription: string
  children?: ReactNode
}

export function ForecastCard(props: ForecastCardProps) {
  return (
    <div className={`forecast-card ${props.extraClassName || ''}`}>
      <time>{props.time}</time>
      <img
        src={`/assets/weather/icons/${props.iconPath}`}
        alt={props.iconDescription}
        draggable={false} />
      {props.children}
    </div>
  )
}
