import { SliderSection } from "./SliderSection";

export function DailySection() {
  return (
    <SliderSection sectionID="daily">
      <div className="mini-card">
        <time>Today</time>
        <img
          src="/src/assets/weather/icons/day/scattered-clouds.svg"
          alt="Day with scattered clouds"
          draggable={false} />
        <div className="min-max">
          <span>24º</span>
          <span>18º</span>
        </div>
      </div>
      <div className="mini-card">
        <time>Tue</time>
        <img
          src="/src/assets/weather/icons/both/rain.svg"
          alt="Rainy day"
          draggable={false} />
        <div className="min-max">
          <span>22º</span>
          <span>16º</span>
        </div>
      </div>
      <div className="mini-card">
        <time>Wed</time>
        <img
          src="/src/assets/weather/icons/both/rain.svg"
          alt="Rainy day"
          draggable={false} />
        <div className="min-max">
          <span>21º</span>
          <span>15º</span>
        </div>
      </div>
      <div className="mini-card">
        <time>Thu</time>
        <img
          src="/src/assets/weather/icons/both/rain.svg"
          alt="Rainy day"
          draggable={false} />
        <div className="min-max">
          <span>23º</span>
          <span>19º</span>
        </div>
      </div>
      <div className="mini-card">
        <time>Fri</time>
        <img
          src="/src/assets/weather/icons/day/scattered-clouds.svg"
          alt="Day with scattered clouds"
          draggable={false} />
        <div className="min-max">
          <span>26º</span>
          <span>20º</span>
        </div>
      </div>
      <div className="mini-card">
        <time>Sat</time>
        <img
          src="/src/assets/weather/icons/day/clear-sky.svg"
          alt="Day with clear sky"
          draggable={false} />
        <div className="min-max">
          <span>30º</span>
          <span>26º</span>
        </div>
      </div>
      <div className="mini-card">
        <time>Sun</time>
        <img
          src="/src/assets/weather/icons/day/clear-sky.svg"
          alt="Day with clear sky"
          draggable={false} />
        <div className="min-max">
          <span>31º</span>
          <span>27º</span>
        </div>
      </div>
      <div className="mini-card">
        <time>Mon</time>
        <img
          src="/src/assets/weather/icons/both/cloudy.svg"
          alt="Cloudy day"
          draggable={false} />
        <div className="min-max">
          <span>34º</span>
          <span>28º</span>
        </div>
      </div>
    </SliderSection>
  )
}
