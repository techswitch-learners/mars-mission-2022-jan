import "./GoRovingPhoto.scss";

export function GoRovingPhoto({ photo }) {
  return (
    <div className="hero-pic">
      <img src={photo.img_src} alt="From Rover" />
      <h2> Image taken with {photo.camera.full_name}</h2>
    </div>
  );
}
