class TimeConversion {
  public SECOND_IN_MILLISECONDS = 1000
  public MINUTE_IN_SECONDS = 60
  public HOUR_IN_MINUTES = 60
  public DAY_IN_HOURS = 24
  public WEEK_IN_DAYS = 7

  public HOUR_IN_SECONDS = this.HOUR_IN_MINUTES * this.MINUTE_IN_SECONDS
  public DAY_IN_SECONDS = this.DAY_IN_HOURS * this.HOUR_IN_SECONDS
  public WEEK_IN_SECONDS = this.WEEK_IN_DAYS * this.DAY_IN_SECONDS

  public getMinutes(timestamp: number) {
    return Math.floor((timestamp % this.HOUR_IN_SECONDS) / this.MINUTE_IN_SECONDS)
  }

  public getHours(timestamp: number) {
    return Math.floor((timestamp % this.DAY_IN_SECONDS) / this.HOUR_IN_SECONDS)
  }

  public getUTC(localTimestamp: number, timezoneOffset: number) {
    return localTimestamp - timezoneOffset
  }

  public getDayStart(timestamp: number) {
    return timestamp - (timestamp % this.DAY_IN_SECONDS)
  }

  public getWeekday(timestamp: number) {
    return ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'][
      Math.floor((timestamp % this.WEEK_IN_SECONDS) / this.DAY_IN_SECONDS)
    ]
  }
}

export const timeConversion = new TimeConversion()
