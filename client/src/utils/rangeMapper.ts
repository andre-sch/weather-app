interface IRangeGroup { [key: string]: [number, number] }

class RangeMapper {
  public humidityLevels: IRangeGroup = {
    'too dry': [0, 30],
    'ideal': [30, 50],
    'too humid': [50, 100]
  }

  public visibilityConditions: IRangeGroup = {
    'clear air': [5400, Infinity],
    'light mist': [2000, 5400],
    'mist': [1000, 2000],
    'light fog': [500, 1000],
    'moderate fog': [150, 500],
    'dense fog': [0, 150]
  }

  public getDescription(rangeGroup: IRangeGroup, value: number) {
    for (const description in rangeGroup) {
      const [minValue, maxValue] = rangeGroup[description]
      if (minValue <= value && value < maxValue) return description
    }
    return ''
  }
}

export const rangeMapper = new RangeMapper()
