export function GoRovingPhotoList({ photos, onClick }) {
  return (
    <ul>
      <li className=".go-roving-photo-list_container">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.img_src}
            alt=""
            onClick={() => onClick(photo)}
          />
        ))}
      </li>
    </ul>
  );
}
