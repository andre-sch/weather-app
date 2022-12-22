type intervalsCollection<keyNames extends string> = {
  [key in keyNames]: [number, number]
}

export const defaultFileName = 'cloudy'
export type pictureFileNames = (
  'thunderstorm' | 'rain' | 'snow' | 'mist' |
  'clear-sky' | 'few-clouds' | 'scattered-clouds' | 'cloudy'
)

export type intervalsByPictureFileNames = intervalsCollection<pictureFileNames>
