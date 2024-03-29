import { textFormat } from "../../../utils/textFormat"

import "./TemperatureInfo.css"

interface TemperatureInfoProps { current: number, min: number, max: number }

export function TemperatureInfo(props: TemperatureInfoProps) {
  const getSign = (num: number) => num < 0 ? 'negative' : 'positive'

  return (
    <div className="temperature-info">
      <strong className={getSign(props.current)}>
        {`${Math.abs(props.current)}º`}
      </strong>
      <div className="min-max vertical">
        <span className={getSign(props.max)}>
          {`${textFormat.ensureTwoDigits(Math.abs(props.max))}º`}
        </span>
        <span className={getSign(props.min)}>
          {`${textFormat.ensureTwoDigits(Math.abs(props.min))}º`}
        </span>
      </div>
    </div>
  )
}
