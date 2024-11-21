import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import IMAGES, { Destination } from "../data/images";
import { Navigation } from "swiper/modules";

const Caroussel = () => {
  console.log(IMAGES);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      style={{ paddingBottom: "64px" }}
    >
      {IMAGES.filter((img) => img.destination === Destination.caroussel).map(
        ({ src, id, title }) => (
          <div key={id}>
            <SwiperSlide
              key={id}
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Texte */}
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "50%",
                  transform: "translate(50%,-50%)",
                  margin: "0",
                  fontSize: "64px",
                  color: "black",
                  zIndex: 2,
                }}
              >
                {title}
              </span>

              <img
                src={src}
                alt={`Artwork ${id + 1}`}
                height={600}
                width={"80%"}
                style={{
                  objectFit: "cover",
                  opacity: 0.4,
                }}
              />
            </SwiperSlide>
          </div>
        )
      )}
    </Swiper>
  );
};

export default Caroussel;
