interface TemperatureInfoProps { current: number, min: number, max: number }

export function TemperatureInfo(props: TemperatureInfoProps) {
  const getSign = (num: number) => num < 0 ? 'negative' : 'positive'
  const enforceTwoDigits = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className="temperature">
      <strong className={getSign(props.current)}>
        {`${Math.abs(props.current)}º`}
      </strong>
      <div className="min-max vertical">
        <span className={getSign(props.max)}>
          {`${enforceTwoDigits(Math.abs(props.max))}º`}
        </span>
        <span className={getSign(props.min)}>
          {`${enforceTwoDigits(Math.abs(props.min))}º`}
        </span>
      </div>
    </div>
  )
}
