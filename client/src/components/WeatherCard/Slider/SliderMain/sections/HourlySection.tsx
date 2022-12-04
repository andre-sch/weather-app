import { SliderSection } from "./SliderSection";

export function HourlySection() {
  const DAY_IN_HOURS = 24
  const TIMESTAMP_IN_HOURS = 16
  const hoursMockup: number[] = []

  for (let index = 0; index < 24; index++) {
    hoursMockup.push((TIMESTAMP_IN_HOURS + index) % DAY_IN_HOURS)
  }

  return (
    <SliderSection sectionID="hourly">
      {hoursMockup.map((hour, index) => (
        <div className="mini-card">
          <time>{index == 0 ? 'Now' : `${hour.toString().padStart(2, '0')}:00`}</time>
          <img
            src="/assets/weather/icons/day/scattered-clouds.svg"
            alt="Day with scattered clouds"
            draggable={false} />
          <strong>21º</strong>
        </div>
      ))}
    </SliderSection>
  )
}
