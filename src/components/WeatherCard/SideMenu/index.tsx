import { SideMenuStateType } from '../../../App'

import './index.css'

import closeWithBackground from '../../../assets/other/close/bd-filled.svg'
import closeWithoutBackground from '../../../assets/other/close/bd-transparent.svg'
import addCity from '../../../assets/other/add-city.svg'
import cityCard from '../../../assets/other/city-card.svg'
import drag from '../../../assets/other/drag.svg'

import nightClear from '../../../assets/weather/images/night/clear-sky.png'
import nightRain from '../../../assets/weather/images/night/rain.png'
import dayFewClouds from '../../../assets/weather/images/day/few-clouds.png'
import dayThunderstorm from '../../../assets/weather/images/day/thunderstorm.png'

interface SideMenuProps {
  menuState: SideMenuStateType
}

export function SideMenu(props: SideMenuProps) {
  const {menuState} = props
  const [isMenuOpen, setIsMenuOpen] = menuState

  return (
    <>
      <div className={`side-menu ${isMenuOpen ? 'show' : ''}`}>
        <div className="content">
          <header>
            <h1>Registered Cities</h1>
            <button onClick={() => setIsMenuOpen(false)}>
              <img
                src={closeWithoutBackground}
                alt="close menu"
                draggable={false} />
            </button>
          </header>
          <div className="input-container">
            <input type="text" placeholder="Add a new city"/>
            <img src={addCity} alt="" draggable={false} />
          </div>
          <ul>
            <li className="city-card">
              <button className="drag-card">
                <img src={drag} alt="Drag card" />
              </button>
              <button className="delete-card">
                <img src={closeWithBackground} alt="Delete card" draggable={false} />
              </button>
              <div className="temperature">
                <strong>12º</strong>
                <div className="min-max vertical">
                  <span>19º</span>
                  <span>11º</span>
                </div>
              </div>
              <img
                src={nightClear}
                alt="Clear night"
                className="weather-preview"
                draggable={false} />
              <footer>
                <h1>Tokyo, Japan</h1>
                <span>Clear sky</span>
              </footer>
              <img src={cityCard} alt="" className="background" />
            </li>
            <li className="city-card">
              <button className="drag-card">
                <img src={drag} alt="Drag card" />
              </button>
              <button className="delete-card">
                <img src={closeWithBackground} alt="Delete card" draggable={false} />
              </button>
              <div className="temperature">
                <strong>21º</strong>
                <div className="min-max vertical">
                  <span>24º</span>
                  <span>18º</span>
                </div>
              </div>
              <img
                src={dayFewClouds}
                alt="Clear night"
                className="weather-preview"
                draggable={false} />
              <footer>
                <h1>Maringa, Brazil</h1>
                <span>Few clouds</span>
              </footer>
              <img src={cityCard} alt="" className="background" />
            </li>
            <li className="city-card">
              <button className="drag-card">
                <img src={drag} alt="Drag card" />
              </button>
              <button className="delete-card">
                <img src={closeWithBackground} alt="Delete card" draggable={false} />
              </button>
              <div className="temperature">
                <strong>27º</strong>
                <div className="min-max vertical">
                  <span>30º</span>
                  <span>25º</span>
                </div>
              </div>
              <img
                src={dayThunderstorm}
                alt="Clear night"
                className="weather-preview"
                draggable={false} />
              <footer>
                <h1>New york, United States</h1>
                <span>Thunderstorm</span>
              </footer>
              <img src={cityCard} alt="" className="background" />
            </li>
            <li className="city-card">
              <button className="drag-card">
                <img src={drag} alt="Drag card" />
              </button>
              <button className="delete-card">
                <img src={closeWithBackground} alt="Delete card" draggable={false} />
              </button>
              <div className="temperature">
                <strong>18º</strong>
                <div className="min-max vertical">
                  <span>22º</span>
                  <span>16º</span>
                </div>
              </div>
              <img
                src={nightRain}
                alt="Clear night"
                className="weather-preview"
                draggable={false} />
              <footer>
                <h1>London, England</h1>
                <span>Rain</span>
              </footer>
              <img src={cityCard} alt="" className="background" />
            </li>
          </ul>
        </div>
        <div
          className={`dark-overlay ${isMenuOpen ? 'show' : ''}`}
          onClick={() => setIsMenuOpen(false)}>
        </div>
      </div>
    </>
  )
}
