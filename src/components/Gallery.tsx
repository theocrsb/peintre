import "./Gallery.css";
import IMAGES from "../data/images";

const Gallery = () => {
  return (
    <div className="gallery">
      {IMAGES.map(({ src, id }) => (
        <div key={id} className="gallery-item">
          <img src={src} alt={`Artwork ${id + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
