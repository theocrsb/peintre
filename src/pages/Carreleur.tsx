import IMAGES, { Destination } from "../data/images";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Carreleur = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <div>
        <section className="d-flex flex-column text-center mb-4">
          <h1>Carreleur</h1>
          <span className="m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            eveniet dolor laborum accusamus! Blanditiis inventore dicta
            voluptate consequuntur quis. Quia officiis sequi, non repudiandae
            totam molestiae autem sit quas suscipit!
          </span>
          <button
            onClick={goToContact}
            type="button"
            className="shadow btn btn-secondary mt-4"
            style={{ width: "fit-content", margin: "auto" }}
          >
            Contactez-moi
          </button>
        </section>
        <section>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            style={{ paddingBottom: "64px" }}
          >
            {IMAGES.sort((img) => img.id)
              .filter((img) => img.destination === Destination.carreleur)
              .map(({ src, id, isOver }) => (
                <div key={id}>
                  <SwiperSlide
                    key={id}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <span className="img-title-caroussel">
                      {isOver ? "Avant" : "Après"}
                    </span>

                    <img
                      src={src}
                      className="shadow-lg"
                      alt={`Artwork ${id + 1}`}
                      height={600}
                      width={"80%"}
                      style={{
                        objectFit: "cover",
                        opacity: 0.9,
                      }}
                    />
                  </SwiperSlide>
                </div>
              ))}
          </Swiper>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Carreleur;
