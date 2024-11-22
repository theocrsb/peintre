import { useNavigate } from "react-router-dom";
import IMAGES from "../data/images";
import "./Home.css";
import Footer from "../components/Footer";
import Caroussel from "../components/Caroussel";

const Home = () => {
  const images = IMAGES;
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <main className="home">
        <div className="home-spacing" />
        <section className="home-description">
          <Caroussel />
          <div className="home-content">
            <p>
              Avec près de 20 ans d'expérience dans la transformation
              d'intérieurs et d'extérieurs.
            </p>
            <br />
            <p>
              Nous offrons des services de qualité pour redonner vie à vos
              espaces grâce à des techniques de peinture innovantes et des
              finitions impeccables.
            </p>
            <button
              onClick={goToContact}
              type="button"
              className="shadow btn btn-secondary mt-4"
              style={{ width: "fit-content", margin: "auto" }}
            >
              Contactez-moi
            </button>
          </div>
        </section>
        <div className="shadow">
          <section className="home-section">
            <div className="home-text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum quisquam cupiditate fugit molestias alias fugiat totam
                possimus vitae sunt, assumenda aliquid voluptates voluptatibus
                rerum molestiae vero debitis odit, reprehenderit repellat?
              </p>
            </div>
            <div className="home-image-container">
              <img src={images[3].src} alt={`Artwork ${images[3].id + 1}`} />
            </div>
          </section>
          <section className="home-section">
            <div className="home-image-container">
              {" "}
              <img src={images[9].src} alt={`Artwork ${images[9].id + 1}`} />
            </div>
            <div className="home-text-container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium beatae, animi nesciunt hic magnam fugiat. Ab facere
              maiores, repellendus ea id voluptatibus nesciunt qui hic maxime
              officiis beatae, quo ex.
            </div>
          </section>
          <section className="home-section">
            <div className="home-text-container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              aliquid vel optio laudantium inventore, iure quaerat beatae non
              excepturi deserunt voluptate debitis quis consectetur quos maxime
              blanditiis perspiciatis. Aliquam, iste.
            </div>
            <div className="home-image-container">
              <img src={images[2].src} alt={`Artwork ${images[2].id + 1}`} />
            </div>
          </section>
        </div>
        <section className="home-contact-section">
          <button
            onClick={goToContact}
            type="button"
            className="shadow btn btn-secondary mt-4"
          >
            Contactez-moi
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
