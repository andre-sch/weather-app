import { SliderSection } from "./SliderSection";

export function DailySection() {
  const daysMockup = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon']

  return (
    <SliderSection sectionID="daily">
      {daysMockup.map((dayAbbreviation, index) => (
        <div className="mini-card">
          <time>{index == 0 ? 'Today' : dayAbbreviation}</time>
          <img
            src="/assets/weather/icons/day/scattered-clouds.svg"
            alt="Day with scattered clouds"
            draggable={false} />
          <div className="min-max">
            <span>24º</span>
            <span>18º</span>
          </div>
        </div>
      ))}
    </SliderSection>
  )
}
