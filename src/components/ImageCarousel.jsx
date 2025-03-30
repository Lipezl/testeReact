import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageCarousel() {
  return (
    <div className="w-full flex justify-center mt-6 album">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="swiper"
      >
        {[2, 1, 3, 4, 5, 6, 7, 8].map((i) => (
          <SwiperSlide key={i}>
            <img src={`/foto${i}.jpg`} alt={`Foto ${i}`} className="swiper-slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
