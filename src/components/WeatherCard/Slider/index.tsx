import { useState, useEffect, useCallback } from 'react'

import './header.css'
import './main.css'

import thinArrow from '../../../assets/other/thin-arrow.svg'
import dayClearSky from '../../../assets/weather/icons/day/clear-sky.svg'
import dayFewClouds from '../../../assets/weather/icons/day/few-clouds.svg'
import dayScatteredClouds from '../../../assets/weather/icons/day/scattered-clouds.svg'
import nightScatteredClouds from '../../../assets/weather/icons/night/scattered-clouds.svg'
import cloudy from '../../../assets/weather/icons/both/cloudy.svg'
import rain from '../../../assets/weather/icons/both/rain.svg'
import twilight from '../../../assets/weather/icons/both/twilight.svg'
import detailsTwilight from '../../../assets/weather/icons/details/twilight.svg'
import temperature from '../../../assets/weather/icons/details/temperature.svg'
import wind from '../../../assets/weather/icons/details/wind.svg'
import rainfall from '../../../assets/weather/icons/details/rain.svg'
import humidity from '../../../assets/weather/icons/details/humidity.svg'
import visibility from '../../../assets/weather/icons/details/visibility.svg'

type forecasts = 'hourly' | 'daily'
type sectionIDs = forecasts | 'details'

export function Slider() {
  var sectionDisplayed: HTMLDivElement
  const [sectionDisplayedID, setSectionDisplayedID] = useState<sectionIDs>('hourly')
  const [selectedForecast, setSelectedForecast] = useState<forecasts>('hourly')

  const [hasHiddenContentOnRight, setHasHiddenContentOnRight] = useState(false)
  const [sectionLeftSpacing, setSectionLeftSpacing] = useState(0)

  window.onresize = () => handleHiddenContentOnRight()

  useEffect(() => {
    if (!sectionDisplayedID) return
    sectionDisplayed = document.querySelector(`section.${sectionDisplayedID}`)!

    setTimeout(() => handleHiddenContentOnRight(), 350)  // 50ms longer than css transition time
    setSectionLeftSpacing(0)
  }, [sectionDisplayedID])

  const handleHiddenContentOnRight = useCallback(() => {
    if (sectionDisplayed.scrollWidth > sectionDisplayed.clientWidth) {
      setHasHiddenContentOnRight(true); return
    }
    setHasHiddenContentOnRight(false)
  }, [sectionDisplayedID])

  const scrollHiddenContent = useCallback((direction: 'left' | 'right') => {
    const step = sectionDisplayed.clientWidth / 2.5
    const leftMax = sectionDisplayed.scrollWidth - sectionDisplayed.clientWidth
    const leftMin = 0

    const transformStyle = sectionDisplayed.style.transform
    const previousLeft = Number(transformStyle.replace(/[^\d.]/g, ''))

    var nextLeft
    switch (direction) {
      case 'right':
        nextLeft = previousLeft + step
        if (nextLeft >= leftMax) {
          nextLeft = leftMax
          setTimeout(() => setHasHiddenContentOnRight(false), 650)  // 50ms longer than css transition time
        }
        break
      case 'left':
        nextLeft = previousLeft - step
        if (nextLeft <= leftMin) nextLeft = leftMin
        setHasHiddenContentOnRight(true)
    }

    setSectionLeftSpacing(nextLeft)
  }, [sectionDisplayedID])

  return (
    <div className="slider">
      <header>
        <div className="forecast-switch">
          <button
            className={selectedForecast == 'hourly' ? 'on' : ''}
            onClick={() => {
              setSelectedForecast('hourly')
              setSectionDisplayedID('hourly')
            }}>
            Hourly forecast
          </button>
          <button
            className={selectedForecast == 'daily' ? 'on' : ''}
            onClick={() => {
              setSelectedForecast('daily')
              setSectionDisplayedID('daily')
            }}>
            Daily forecast
          </button>
        </div>
        <button
          className="show-details"
          onClick={() => {
            sectionDisplayedID == 'details'
              ? setSectionDisplayedID(selectedForecast)
              : setSectionDisplayedID('details')
          }}>
          {sectionDisplayedID == 'details' ? 'Hide' : 'Details'}
        </button>
      </header>

      <nav className="horizontal-arrows">
        <button
          disabled={sectionLeftSpacing == 0}
          onClick={() => scrollHiddenContent('left')}>
          <img
            src={thinArrow}
            alt="See previous weather forecast information"
            style={{transform: 'rotate(180deg)'}} />
        </button>
        <button
          disabled={!hasHiddenContentOnRight}
          onClick={() => scrollHiddenContent('right')}>
          <img src={thinArrow} alt="See next weather forecast information" />
        </button>
      </nav>

      <main>
        <section
          className={`forecast hourly ${sectionDisplayedID == 'hourly' ? 'show' : ''}`}
          style={{
            transform: sectionDisplayedID == 'hourly'
              ? `translateX(-${sectionLeftSpacing}px)` : ''
          }}>
          <div className="mini-card">
            <time>Now</time>
            <img src={dayFewClouds} alt="Day with few clouds" draggable={false}/>
            <strong>21º</strong>
          </div>
          <div className="mini-card">
            <time>17:00</time>
            <img src={dayFewClouds} alt="Day with few clouds" draggable={false} />
            <strong>21º</strong>
          </div>
          <div className="mini-card">
            <time>18:00</time>
            <img src={dayScatteredClouds} alt="Day with scattered clouds" draggable={false} />
            <strong>20º</strong>
          </div>
          <div className="mini-card twilight">
            <time>18:23</time>
            <img src={twilight} alt="Twilight" draggable={false} />
            <strong>Sunset</strong>
          </div>
          <div className="mini-card">
            <time>19:00</time>
            <img src={nightScatteredClouds} alt="Night with scattered clouds" draggable={false} />
            <strong>20º</strong>
          </div>
          <div className="mini-card">
            <time>20:00</time>
            <img src={nightScatteredClouds} alt="Night with scattered clouds" draggable={false} />
            <strong>20º</strong>
          </div>
          <div className="mini-card">
            <time>21:00</time>
            <img src={cloudy} alt="Cloudy night" draggable={false} />
            <strong>19º</strong>
          </div>
          <div className="mini-card">
            <time>22:00</time>
            <img src={cloudy} alt="Cloudy night" draggable={false} />
            <strong>18º</strong>
          </div>
          <div className="mini-card">
            <time>23:00</time>
            <img src={rain} alt="Rainy night" draggable={false} />
            <strong>18º</strong>
          </div>
          <div className="mini-card">
            <time>00:00</time>
            <img src={rain} alt="Rainy night" draggable={false} />
            <strong>17º</strong>
          </div>
          <div className="mini-card">
            <time>01:00</time>
            <img src={rain} alt="Rainy night" draggable={false} />
            <strong>16º</strong>
          </div>
          <div className="mini-card">
            <time>02:00</time>
            <img src={cloudy} alt="Cloudy night" draggable={false} />
            <strong>16º</strong>
          </div>
          <div className="mini-card">
            <time>03:00</time>
            <img src={cloudy} alt="Cloudy night" draggable={false} />
            <strong>17º</strong>
          </div>
          <div className="mini-card">
            <time>04:00</time>
            <img src={nightScatteredClouds} alt="Night with scattered clouds" draggable={false} />
            <strong>18º</strong>
          </div>
          <div className="mini-card">
            <time>05:00</time>
            <img src={nightScatteredClouds} alt="Night with scattered clouds" draggable={false} />
            <strong>18º</strong>
          </div>
        </section>
        <section
          className={`forecast daily ${sectionDisplayedID == 'daily' ? 'show' : ''}`}
          style={{
            transform: sectionDisplayedID == 'daily'
              ? `translateX(-${sectionLeftSpacing}px)` : ''
          }}>
          <div className="mini-card">
            <time>Today</time>
            <img src={dayScatteredClouds} alt="Day with scattered clouds" draggable={false} />
            <div className="min-max">
              <span>24º</span>
              <span>18º</span>
            </div>
          </div>
          <div className="mini-card">
            <time>Tue</time>
            <img src={rain} alt="Rainy day" draggable={false} />
            <div className="min-max">
              <span>22º</span>
              <span>16º</span>
            </div>
          </div>
          <div className="mini-card">
            <time>Wed</time>
            <img src={rain} alt="Rainy day" draggable={false} />
            <div className="min-max">
              <span>21º</span>
              <span>15º</span>
            </div>
          </div>
          <div className="mini-card">
            <time>Thu</time>
            <img src={rain} alt="Rainy day" draggable={false} />
            <div className="min-max">
              <span>23º</span>
              <span>19º</span>
            </div>
          </div>
          <div className="mini-card">
            <time>Fri</time>
            <img src={dayScatteredClouds} alt="Day with scattered clouds" draggable={false} />
            <div className="min-max">
              <span>26º</span>
              <span>20º</span>
            </div>
          </div>
          <div className="mini-card">
            <time>Sat</time>
            <img src={dayClearSky} alt="Day with clear sky" draggable={false} />
            <div className="min-max">
              <span>30º</span>
              <span>26º</span>
            </div>
          </div>
          <div className="mini-card">
            <time>Sun</time>
            <img src={dayClearSky} alt="Day with clear sky" draggable={false} />
            <div className="min-max">
              <span>31º</span>
              <span>27º</span>
            </div>
          </div>
          <div className="mini-card">
            <time>Mon</time>
            <img src={cloudy} alt="Cloudy day" draggable={false} />
            <div className="min-max">
              <span>34º</span>
              <span>28º</span>
            </div>
          </div>
        </section>
        <section
          className={`details ${sectionDisplayedID == 'details' ? 'show' : ''}`}
          style={{
            transform: sectionDisplayedID == 'details'
              ? `translateX(-${sectionLeftSpacing}px)` : ''
          }}>
          <div className="mini-card">
            <header>
              <img src={detailsTwilight} alt="" />
              <em>Sunset</em>
            </header>
            <strong>18:23</strong>
            <span>Sunrise 05:48</span>
          </div>
          <div className="mini-card">
            <header>
              <img src={temperature} alt="" />
              <em>Feels like</em>
            </header>
            <strong>19º</strong>
            <span>It's how you feel</span>
          </div>
          <div className="mini-card">
            <header>
              <img src={wind} alt="" />
              <em>Wind</em>
            </header>
            <strong>8 hm/h</strong>
            <span>NE direction</span>
          </div>
          <div className="mini-card">
            <header>
              <img src={rainfall} alt="" />
              <em>Rainfall</em>
            </header>
            <strong>0.0 mm<span>in last hour</span></strong>
            <span>2.8mm next 24h</span>
          </div>
          <div className="mini-card">
            <header>
              <img src={humidity} alt="" />
              <em>Humidity</em>
            </header>
            <strong>62%</strong>
            <span>Dew point is 17º</span>
          </div>
          <div className="mini-card">
            <header>
              <img src={visibility} alt="" />
              <em>Visibility</em>
            </header>
            <strong>10 km</strong>
            <span>Clear air</span>
          </div>
        </section>
      </main>
    </div>
  )
}
