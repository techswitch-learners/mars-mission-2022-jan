export function GoRovingPhoto({ photo }) {
  return (
    <div>
      <img src={photo.img_src} alt="From Rover" />
      <h2>
        {" "}
        Image taken with {photo.camera.full_name} on {photo.earth_date}
      </h2>
    </div>
  );
}
