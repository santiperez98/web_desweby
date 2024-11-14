import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
      <SwiperSlide>
        <img src="/images/project1.jpg" alt="Proyecto 1" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/project2.jpg" alt="Proyecto 2" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/project3.jpg" alt="Proyecto 3" className="w-full" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
