import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ImageCarouselMaioJunho() {
  return (
    <div className="w-full flex justify-center mt-6 album">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="swiper"
      >
        {[1, 3, 2, 4, 5, 6, 7].map((i) => (
          <SwiperSlide key={i}>
            <img src={`/Maio&Junho/foto${i}.jpeg`} alt={`Foto ${i}`} className="swiper-slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export function ImageCarouselAbril() {
  return (
    <div className="w-full flex justify-center mt-6 album">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="swiper"
      >
        {[1, 3, 2, 4, 5, 6].map((i) => (
          <SwiperSlide key={i}>
            <img src={`/Abril/foto${i}.jpg`} alt={`Foto ${i}`} className="swiper-slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export function ImageCarouselMarco() {
  return (
    <div className="w-full flex justify-center mt-6 album">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="swiper"
      >
        {[1, 3, 2, 4, 5, 6, 7].map((i) => (
          <SwiperSlide key={i}>
            <img src={`/Marco/foto${i}.jpg`} alt={`Foto ${i}`} className="swiper-slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export function ImageCarouselJulho() {
  return (
    <div className="w-full flex justify-center mt-6 album">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="swiper"
      >
        {[1, 3, 2, 4].map((i) => (
          <SwiperSlide key={i}>
            <img src={`/Julho/foto${i}.jpeg`} alt={`Foto ${i}`} className="swiper-slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export function ImageCarouselAgosto() {
  return (
    <div className="w-full flex justify-center mt-6 album">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="swiper"
      >
        {[1, 3, 2, 4, 5, 6, 7].map((i) => (
          <SwiperSlide key={i}>
            <img src={`/Agosto/foto${i}.jpg`} alt={`Foto ${i}`} className="swiper-slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}