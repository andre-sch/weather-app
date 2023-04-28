import { useState, useEffect } from "react"
import { timeConversion } from "../utils/timeConversion"

export function useChangeInTime() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime())

  const timeResetDelay = 4 * timeConversion.MINUTE_IN_SECONDS
  const timeCheckInterval = 6 * timeConversion.MINUTE_IN_SECONDS

  useEffect(() => {
    setInterval(() => {
      if (getCurrentTime() != currentTime)
        setTimeout(() => {
          setCurrentTime(getCurrentTime())
        }, timeResetDelay * timeConversion.SECOND_IN_MILLISECONDS)

    }, timeCheckInterval * timeConversion.SECOND_IN_MILLISECONDS)
  }, [])

  return currentTime
}

function getCurrentTime() {
  const MILLISECOND_IN_SECONDS = 1 / timeConversion.SECOND_IN_MILLISECONDS
  return timeConversion.getHours(Date.now() * MILLISECOND_IN_SECONDS)
}
