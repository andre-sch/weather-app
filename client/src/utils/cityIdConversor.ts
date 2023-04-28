type coordinates = [number, number]

class CityIdConversor {
  public fromLocationToId(location: coordinates): string {
    return location.join(', ')
  }

  public fromIdToLocation(cityID: string): coordinates {
    const partition = cityID.split(', ')

    if (partition.length == 2)
      return partition.map(coordinate => Number(coordinate)) as coordinates
    else throw Error('Invalid City Identifier')
  }
}

export const cityIdConversor = new CityIdConversor()
