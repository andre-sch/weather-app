import { textFormat } from "../../../utils/textFormat"

import "./index.css"

interface DetailsCardProps {
  extraClassName?: string
  iconPath: string
  iconDescription?: string
  mainInfo: string
  secondaryInfo: string
}

export function DetailsCard(props: DetailsCardProps) {
  const [, iconFileName] = props.iconPath.match(/(\w*)\.svg/)!

  return (
    <div className={`mini-card ${props.extraClassName || ''}`}>
      <header>
        <img src={`/assets/weather/icons/${props.iconPath}`} alt="" draggable={false} />
        <em>{props.iconDescription || textFormat.capitalize(iconFileName)}</em>
      </header>
      <strong>{props.mainInfo}</strong>
      <span>{props.secondaryInfo}</span>
    </div>
  )
}
