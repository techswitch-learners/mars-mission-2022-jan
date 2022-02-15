export async function getGoRovingPhotoList() {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY`
  );
  const grplJson = await response.json();
  return grplJson.photos;
}
