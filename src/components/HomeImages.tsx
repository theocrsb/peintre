const images = [
  "/images/galerie1.jpg",
  "/images/galerie2.jpg",
  "/images/galerie3.jpg",
  "/images/galerie4.jpg",
];

const HomeImages = () => {
  return (
    <div className="image-row">
      {images.map((src, index) => (
        <img src={src} alt={`Image ${index + 1}`} loading="lazy" />
      ))}
    </div>
  );
};

export default HomeImages;
