export function getOppositeAngle(angle: number) {
  const FULL_CIRCLE = 360
  const HALF_CIRCLE = FULL_CIRCLE / 2

  return (angle + HALF_CIRCLE) % FULL_CIRCLE
}
