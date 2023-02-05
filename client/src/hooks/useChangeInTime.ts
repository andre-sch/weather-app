import { useState, useEffect } from "react"
import { timeConversion } from "../utils/timeConversion"

interface useChangeInTimeProps {
  timeResetDelay: number
  timeCheckInterval: number
}

export function useChangeInTime(props: useChangeInTimeProps) {
  const [currentTime, setCurrentTime] = useState(getCurrentTime())

  useEffect(() => {
    setInterval(() => {
      if (getCurrentTime() != currentTime)
        setTimeout(() => {
          setCurrentTime(getCurrentTime())
        }, props.timeResetDelay * timeConversion.SECOND_IN_MILLISECONDS)

    }, props.timeCheckInterval * timeConversion.SECOND_IN_MILLISECONDS)
  }, [])

  return currentTime
}

function getCurrentTime() {
  const MILLISECOND_IN_SECONDS = 1 / timeConversion.SECOND_IN_MILLISECONDS
  return timeConversion.getHours(Date.now() * MILLISECOND_IN_SECONDS)
}
