import { PictureSearch } from "./PictureSearch"

class ImageSearch extends PictureSearch {
  constructor() { super() }
  public getFolder = super.getTimeVariant
}

export const imageSearch = new ImageSearch()
