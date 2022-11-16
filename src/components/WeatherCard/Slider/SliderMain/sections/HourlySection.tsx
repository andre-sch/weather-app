import { SliderSection } from "./SliderSection";

export function HourlySection() {
  return (
    <SliderSection sectionID="hourly">
      <div className="mini-card">
        <time>Now</time>
        <img
          src="/src/assets/weather/icons/day/few-clouds.svg"
          alt="Day with few clouds"
          draggable={false} />
        <strong>21º</strong>
      </div>
      <div className="mini-card">
        <time>17:00</time>
        <img
          src="/src/assets/weather/icons/day/few-clouds.svg"
          alt="Day with few clouds"
          draggable={false} />
        <strong>21º</strong>
      </div>
      <div className="mini-card">
        <time>18:00</time>
        <img
          src="/src/assets/weather/icons/day/scattered-clouds.svg"
          alt="Day with scattered clouds"
          draggable={false} />
        <strong>20º</strong>
      </div>
      <div className="mini-card twilight">
        <time>18:23</time>
        <img
          src="/src/assets/weather/icons/both/twilight.svg"
          alt="Twilight"
          draggable={false} />
        <strong>Sunset</strong>
      </div>
      <div className="mini-card">
        <time>19:00</time>
        <img
          src="/src/assets/weather/icons/night/scattered-clouds.svg"
          alt="Night with scattered clouds"
          draggable={false} />
        <strong>20º</strong>
      </div>
      <div className="mini-card">
        <time>20:00</time>
        <img
          src="/src/assets/weather/icons/night/scattered-clouds.svg"
          alt="Night with scattered clouds"
          draggable={false} />
        <strong>20º</strong>
      </div>
      <div className="mini-card">
        <time>21:00</time>
        <img
          src="/src/assets/weather/icons/both/cloudy.svg"
          alt="Cloudy night"
          draggable={false} />
        <strong>19º</strong>
      </div>
      <div className="mini-card">
        <time>22:00</time>
        <img
          src="/src/assets/weather/icons/both/cloudy.svg"
          alt="Cloudy night"
          draggable={false} />
        <strong>18º</strong>
      </div>
      <div className="mini-card">
        <time>23:00</time>
        <img
          src="/src/assets/weather/icons/both/rain.svg"
          alt="Rainy night"
          draggable={false} />
        <strong>18º</strong>
      </div>
      <div className="mini-card">
        <time>00:00</time>
        <img
          src="/src/assets/weather/icons/both/rain.svg"
          alt="Rainy night"
          draggable={false} />
        <strong>17º</strong>
      </div>
      <div className="mini-card">
        <time>01:00</time>
        <img
          src="/src/assets/weather/icons/both/rain.svg"
          alt="Rainy night"
          draggable={false} />
        <strong>16º</strong>
      </div>
      <div className="mini-card">
        <time>02:00</time>
        <img
          src="/src/assets/weather/icons/both/cloudy.svg"
          alt="Cloudy night"
          draggable={false} />
        <strong>16º</strong>
      </div>
      <div className="mini-card">
        <time>03:00</time>
        <img
          src="/src/assets/weather/icons/both/cloudy.svg"
          alt="Cloudy night"
          draggable={false} />
        <strong>17º</strong>
      </div>
      <div className="mini-card">
        <time>04:00</time>
        <img
          src="/src/assets/weather/icons/night/scattered-clouds.svg"
          alt="Night with scattered clouds"
          draggable={false} />
        <strong>18º</strong>
      </div>
      <div className="mini-card">
        <time>05:00</time>
        <img
          src="/src/assets/weather/icons/night/scattered-clouds.svg"
          alt="Night with scattered clouds"
          draggable={false} />
        <strong>18º</strong>
      </div>
    </SliderSection>
  )
}
