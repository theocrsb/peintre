const Gallery = () => {
  const images = [
    "/images/galerie1.jpg",
    "/images/galerie2.jpg",
    "/images/galerie3.jpg",
    "/images/galerie4.jpg",
    "/images/galerie5.jpg",
    "/images/galerie6.jpg",
    "/images/galerie7.jpg",
    "/images/galerie8.jpg",
    "/images/galerie9.jpg",
    "/images/galerie10.jpg",
    // Add more images here
  ];

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <div key={index} className="gallery__item">
          <img src={src} alt={`Artwork ${index + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
