export function sizeOf(object: Object) {
  var keysAmount = 0
  for (const key in object) keysAmount++
  return keysAmount
}
