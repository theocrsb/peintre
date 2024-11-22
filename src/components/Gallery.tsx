import "./Gallery.css";
import IMAGES, { Destination } from "../data/images";

const Gallery = () => {
  return (
    <div className="gallery">
      {IMAGES.filter((img) => img.destination === Destination.galerie).map(
        ({ src, id }) => (
          <div key={id} className="gallery-item">
            <img src={src} alt={`Artwork ${id + 1}`} loading="lazy" />
          </div>
        )
      )}
    </div>
  );
};

export default Gallery;
