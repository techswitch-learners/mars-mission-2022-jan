export async function getAsteroids(date) {
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&api_key=TR7gNuHKW051vNr2AaUB5F1RnSYYZp7uVqeO0QQp`;
  const data = await fetch(url);
  const asteroids = await data.json();

  if (!data.ok) {
    throw new Error(asteroids.error_message);
  }

  return asteroids;
}
