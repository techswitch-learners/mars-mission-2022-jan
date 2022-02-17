export function GoRovingPhoto({ photo }) {
  return (
    <div>
      <img src={photo.img_src} alt="From Rover" />
      <h2> Image taken with {photo.camera.full_name}</h2>
    </div>
  );
}
