export function GoRovingPhotoList({ photos }) {
  return (
    <ul>
      <li>
        {photos.map((photo) => (
          <img src={photo.img_src} alt="Photo from camera" />
        ))}
      </li>
    </ul>
  );
}
