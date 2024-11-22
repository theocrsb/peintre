import "./GalleryPage.css";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const GalleryPage = () => {
  return (
    <>
      <main className="galleryPage">
        <h1 className="text-center">Nos Réalisations</h1>
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
