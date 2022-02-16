export async function getAsteroids(startDate, endDate) {
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=TR7gNuHKW051vNr2AaUB5F1RnSYYZp7uVqeO0QQp`;
  const data = await fetch(url);
  const asteroids = await data.json();
  return asteroids;
}
