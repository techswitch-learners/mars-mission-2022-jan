export async function getAsteroids(startDate, endDate) {
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`;
  const data = await fetch(url);
  const asteroids = await data.json();
  return asteroids;
}
