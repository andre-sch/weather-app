class TimeConversion {
  MINUTE_IN_SECONDS = 60
  HOUR_IN_MINUTES = 60
  DAY_IN_HOURS = 24

  HOUR_IN_SECONDS = this.HOUR_IN_MINUTES * this.MINUTE_IN_SECONDS
  DAY_IN_SECONDS = this.DAY_IN_HOURS * this.HOUR_IN_SECONDS

  public getDayStart(timestamp: number) {
    return timestamp - (timestamp % this.DAY_IN_SECONDS)
  }
}

export const timeConversion = new TimeConversion()
