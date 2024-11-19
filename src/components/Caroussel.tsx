// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import IMAGES from "../data/images";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Caroussel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      style={{ paddingBottom: "64px" }}
    >
      <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={IMAGES[0].src}
          alt="Peintre"
          height={600}
          width={"80%"}
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={IMAGES[1].src}
          alt="Plaquiste"
          height={600}
          width={"80%"}
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={IMAGES[2].src}
          alt="Menuisier"
          height={600}
          width={"80%"}
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={IMAGES[3].src}
          alt="Carreleur"
          height={600}
          width={"80%"}
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Caroussel;
