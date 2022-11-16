import { useState } from "react"
import type { forecasts, sectionIDs } from ".."

import './index.css'

interface SliderHeaderProps {
  sectionDisplayedID: sectionIDs
  setSectionDisplayedID: React.Dispatch<React.SetStateAction<sectionIDs>>
}

export function SliderHeader(props: SliderHeaderProps) {
  const {sectionDisplayedID, setSectionDisplayedID} = props
  const [selectedForecast, setSelectedForecast] = useState<forecasts>('hourly')

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
