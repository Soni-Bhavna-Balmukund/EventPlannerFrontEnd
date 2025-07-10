import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider4.jpg';
import slider3 from '../../assets/images/slider3.webp';
import slider4 from '../../assets/images/slider17.jpeg';
import slider5 from '../../assets/images/slider8.jpeg';
import slider6 from '../../assets/images/slider13.jpeg';
import slider7 from '../../assets/images/slider9.jpeg';
import slider8 from '../../assets/images/slider11.jpeg';
import slider9 from '../../assets/images/slider2.webp';

const Slider = () => {
  const horizontalSwiperRef = useRef(null);

  return (
    <Swiper
      className="SliderTop mySwiper swiper-h "
      spaceBetween={50}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
      onSwiper={(swiper) => (horizontalSwiperRef.current = swiper)}
      onSlideChange={(swiper) => {
        if (swiper.realIndex === 1) {
          swiper.autoplay.stop();
          setTimeout(() => swiper.autoplay.start(), 9000);//9sec
        } else {
          swiper.autoplay.start();
        }
      }}
    >
      <SwiperSlide>
        <img src={slider1} alt="slide1" />
      </SwiperSlide>

      <SwiperSlide>
        <Swiper
          className="mySwiper2 swiper-v"
          direction="vertical"
          spaceBetween={50}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
        >
          {[slider2, slider9, slider4, slider5, slider3].map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt={`vertical-${idx}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperSlide>

      <SwiperSlide>
        <img src={slider7} alt="slide7" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={slider8} alt="slide8" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
