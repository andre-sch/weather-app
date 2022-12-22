import { intervalsByPictureFileNames } from "../../../models/pictureFileNames"

export const weatherIdIntervalsByFileNames: intervalsByPictureFileNames = {
  'thunderstorm': [200, 299],
  'rain': [300, 599],
  'snow': [600, 699],
  'mist': [700, 799],
  'clear-sky': [800, 800],
  'few-clouds': [801, 801],
  'scattered-clouds': [802, 802],
  'cloudy': [803, 804]
}
