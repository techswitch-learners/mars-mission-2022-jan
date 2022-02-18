export async function getRoverPhotos(roverName, sol, page = 1) {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&page=${page}&api_key=jJgoKMpayBRWat7sqHnTQ7VGmFjGRA5Iew83igxD`
  );
  const responseJson = await response.json();
  return responseJson.photos;
}
