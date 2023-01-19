import { useState, useEffect } from "react"
import { timeConversion } from "../../utils/timeConversion"

export function useChangeInTime() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime())

  const MINUTE_IN_MILLISECONDS = (
    timeConversion.MINUTE_IN_SECONDS
    * timeConversion.SECOND_IN_MILLISECONDS
  )

  useEffect(() => {
    setInterval(() => {
      if (getCurrentTime() != currentTime)
        setTimeout(() => setCurrentTime(getCurrentTime()), 4 * MINUTE_IN_MILLISECONDS)
    }, 6 * MINUTE_IN_MILLISECONDS)
  }, [])

  return currentTime
}

function getCurrentTime() {
  const MILLISECOND_IN_SECONDS = 1 / timeConversion.SECOND_IN_MILLISECONDS
  return timeConversion.getHours(Date.now() * MILLISECOND_IN_SECONDS)
}
