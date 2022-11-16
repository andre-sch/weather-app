import { SliderSection } from "./SliderSection";

import twilightIcon from "../../../../../assets/weather/icons/details/twilight.svg"
import temperatureIcon from "../../../../../assets/weather/icons/details/temperature.svg"
import windIcon from "../../../../../assets/weather/icons/details/wind.svg"
import rainIcon from "../../../../../assets/weather/icons/details/rain.svg"
import humidityIcon from "../../../../../assets/weather/icons/details/humidity.svg"
import visibilityIcon from "../../../../../assets/weather/icons/details/visibility.svg"

export function DetailsSection() {
  return (
    <SliderSection sectionID="details">
      <div className="mini-card">
        <header>
          <img src={twilightIcon} alt="" />
          <em>Sunset</em>
        </header>
        <strong>18:23</strong>
        <span>Sunrise 05:48</span>
      </div>
      <div className="mini-card">
        <header>
          <img src={temperatureIcon} alt="" />
          <em>Feels like</em>
        </header>
        <strong>19º</strong>
        <span>It's how you feel</span>
      </div>
      <div className="mini-card">
        <header>
          <img src={windIcon} alt="" />
          <em>Wind</em>
        </header>
        <strong>8 hm/h</strong>
        <span>NE direction</span>
      </div>
      <div className="mini-card">
        <header>
          <img src={rainIcon} alt="" />
          <em>Rainfall</em>
        </header>
        <strong>0.0 mm<span>in last hour</span></strong>
        <span>2.8mm next 24h</span>
      </div>
      <div className="mini-card">
        <header>
          <img src={humidityIcon} alt="" />
          <em>Humidity</em>
        </header>
        <strong>62%</strong>
        <span>Dew point is 17º</span>
      </div>
      <div className="mini-card">
        <header>
          <img src={visibilityIcon} alt="" />
          <em>Visibility</em>
        </header>
        <strong>10 km</strong>
        <span>Clear air</span>
      </div>
    </SliderSection>
  )
}
