export function GoRovingPhoto({ imgSrc, camera }) {
  return (
    <div>
      <img src={imgSrc} alt="" />
      <h2> Image taken by {camera}</h2>
    </div>
  );
}
