import { motion } from 'framer-motion';
import Image from 'next/image';

const BrandsCarousel = () => {
  const brands = ['/images/marca1.png', '/images/marca2.png', '/images/marca3.png'];

  return (
    <div className="overflow-hidden">
      <motion.div className="flex space-x-8 animate-marquee">
        {brands.map((src, index) => (
          <Image 
            src={src} 
            key={index} 
            alt={`Marca ${index + 1}`} 
            width={128} // Cambia estos valores según las dimensiones de tus imágenes
            height={64} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BrandsCarousel;
