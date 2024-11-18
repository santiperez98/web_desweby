import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
          <Link href="/">Inicio</Link>
          <Link href="/about">Sobre Nosotros</Link>
          <Link href="#servicios">Servicios</Link>
          <Link href="#contacto">Contacto</Link>
          <Link href="#clientes">Clientes</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
