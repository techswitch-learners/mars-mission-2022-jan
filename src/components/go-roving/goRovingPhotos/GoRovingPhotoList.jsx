import "./GoRovingPhotoList.scss";

export function GoRovingPhotoList({ photos, onClick, selectedPhoto }) {
  return (
    <div className="image-selector">
      {photos.map((photo) => (
        <div
          className={`image-selector__thumbnail ${
            selectedPhoto === photo ? "selected" : ""
          }`}
        >
          <img
            key={photo.id}
            src={photo.img_src}
            alt=""
            onClick={() => onClick(photo)}
          />
        </div>
      ))}
    </div>
  );
}
