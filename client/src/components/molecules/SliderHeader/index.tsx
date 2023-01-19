import { useState, useContext } from "react"

import { SectionDisplayedIdGetterContext, SectionDisplayedIdSetterContext } from "../../../contexts/section/SectionDisplayedProvider"

import './index.css'

export function SliderHeader() {
  const sectionDisplayedID = useContext(SectionDisplayedIdGetterContext)
  const setSectionDisplayedID = useContext(SectionDisplayedIdSetterContext)

  const [selectedForecast, setSelectedForecast] = useState<'hourly' | 'daily'>('hourly')

  return (
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
  )
}
