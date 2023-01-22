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

  public splitInMiddle(text: string) {
    if (!/\s/.test(text)) return [text]

    const middleIndex = Math.round((text.length - 1) / 2)

    const firstHalf = text.slice(0, middleIndex + 1).split('')  // includes middle
    const secondHalf = text.slice(middleIndex + 1).split('')

    const spaceChar = ' '
    var firstHalfSpaceMiddleDist = firstHalf.reverse().indexOf(spaceChar)
    var secondHalfSpaceMiddleDist = secondHalf.indexOf(spaceChar) + 1

    if (firstHalfSpaceMiddleDist == -1) firstHalfSpaceMiddleDist = firstHalf.length - 1
    if (secondHalfSpaceMiddleDist == 0) secondHalfSpaceMiddleDist = secondHalf.length

    if (firstHalfSpaceMiddleDist <= secondHalfSpaceMiddleDist)
      var spaceIndexCloserMiddle = middleIndex - firstHalfSpaceMiddleDist
    else var spaceIndexCloserMiddle = middleIndex + secondHalfSpaceMiddleDist

    return [
      text.slice(0, spaceIndexCloserMiddle),
      text.slice(spaceIndexCloserMiddle + 1)
    ]
  }
}

export const textFormat = new TextFormat()
