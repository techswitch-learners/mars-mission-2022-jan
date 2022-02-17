export async function getAsteroids(date) {
  const today = new Date().getDate();
  if (date > today) {
    throw new Error("We don't have info from the future, I'm afraid..");
  }

  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&api_key=TR7gNuHKW051vNr2AaUB5F1RnSYYZp7uVqeO0QQp`;
  const data = await fetch(url);
  const asteroids = await data.json();
  console.log(asteroids.near_earth_objects[[date]][0].estimated_diameter);

  if (!data.ok) {
    throw new Error(asteroids.error_message);
  }

  return asteroids;
}
