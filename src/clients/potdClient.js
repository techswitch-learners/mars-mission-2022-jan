export async function getPotdData() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=Q90aHog1z4Q1J3wkJTjlS3u0fiGDC8TLzO0cNsNe`
  );
  return await response.json();
}
