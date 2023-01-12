import { timeConversion } from "./timeConversion"

class TextFormat {
  public capitalize(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  public ensureTwoDigits = (num: number) => num.toString().padStart(2, '0')

  public clockTime(timestamp: number, format: 'hh:mm' | 'hh:00') {
    const hours = this.ensureTwoDigits(timeConversion.getHours(timestamp))
    const minutes = this.ensureTwoDigits(timeConversion.getMinutes(timestamp))

    return format.replace("hh", hours).replace("mm", minutes)
  }
}

export const textFormat = new TextFormat()
