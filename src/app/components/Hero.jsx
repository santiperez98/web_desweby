import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const Hero = () => {
  const slides = [
    '/images/header1.jpg',
    '/images/header2.jpg',
    '/images/header3.jpg',
  ]; 

  return (
    <div className="h-screen w-full relative">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <motion.img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              className="h-full w-full object-cover"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold">Bienvenido a [Tu Empresa]</h1>
        <p className="mt-4 text-lg">Innovación y tecnología para tu negocio</p>
      </motion.div>
    </div>
  );
};

export default Hero;
