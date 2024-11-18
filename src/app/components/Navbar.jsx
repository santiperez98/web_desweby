import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 p-4 transition-colors duration-500 ${scroll ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">[Tu Logo]</div>
        <div className="flex space-x-6 text-white">
          <a href="/">Inicio</a>
          <a href="/about">Sobre Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
          <a href="#clientes">Clientes</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
