class TextFormat {
  public capitalize(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  public ensureTwoDigits = (num: number) => num.toString().padStart(2, '0')
}

export const textFormat = new TextFormat()
