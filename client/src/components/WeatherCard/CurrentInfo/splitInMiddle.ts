export function splitInMiddle(text: string) {
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
