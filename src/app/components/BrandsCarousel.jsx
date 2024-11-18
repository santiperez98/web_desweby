import { motion } from 'framer-motion'

const BrandsCarousel = () => {
    const brands = ['/images/marca1.png', '/images/marca2.png', '/images/marca3.png'];
    return (
      <div className="overflow-hidden">
        <motion.div className="flex space-x-8 animate-marquee">
          {brands.map((src, index) => (
            <img src={src} key={index} alt="Marca" className="h-16 w-auto" />
          ))}
        </motion.div>
      </div>
    );
  };
  
export default BrandsCarousel;