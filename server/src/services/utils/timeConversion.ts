export const timeConversion = {
  DAY_IN_HOURS: 24,
  HOUR_IN_SECONDS: 3600,

  get HALF_DAY_IN_HOURS() {
    return this.DAY_IN_HOURS / 2
  },
  get HALF_DAY_IN_SECONDS() {
    return this.HALF_DAY_IN_HOURS * this.HOUR_IN_SECONDS
  },

  unixToHours(timestamp: number) { return timestamp / this.HOUR_IN_SECONDS }
}
