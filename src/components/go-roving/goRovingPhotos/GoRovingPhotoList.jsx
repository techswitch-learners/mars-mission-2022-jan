import "./GoRovingPhotoList.scss";

export function GoRovingPhotoList({ photos, onClick, photo }) {
  return (
    <div className="image-selector">
      {photos.map((pic) => (
        <div
          className={`image-selector__thumbnail ${
            photo === pic ? "selected" : ""
          }`}
        >
          <img
            key={pic.id}
            src={pic.img_src}
            alt=""
            onClick={() => onClick(pic)}
          />
        </div>
      ))}
    </div>
  );
}
