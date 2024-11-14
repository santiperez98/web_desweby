import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Hero = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <header className="flex items-center justify-between bg-teal-600 p-4 shadow-lg">
      <motion.button 
        className="text-white font-bold" 
        onClick={handleBack}
        whileTap={{ scale: 0.95 }}
      >
        Back
      </motion.button>
      <motion.img 
        src="" 
        alt="Logo"
        className="h-12"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
      />
    </header>
  );
};

export default Hero;
