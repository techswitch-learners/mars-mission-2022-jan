export function getDiameterInFootballPitches(diameterInMeters) {
  return Math.round(diameterInMeters * 10);
}

export function getVelocityByFormulaOneCar(velocityByMeter) {
  return Math.round((velocityByMeter * 3600) / 397);
}

export function getDistanceFromEarthByShard(distanceInKm) {
  return Math.round(distanceInKm / 0.3);
}
