// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";

const SwiperSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      loop={true}
      autoplay={{ delay: 15000, reverseDirection: false }}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Slider1></Slider1>
      </SwiperSlide>
      <SwiperSlide>
        <Slider2></Slider2>
      </SwiperSlide>
      <SwiperSlide>
        <Slider3></Slider3>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
