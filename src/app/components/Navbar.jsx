'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Para redirección después de cerrar sesión
import Image from 'next/image';
import image1 from '../../../public/logodesweby.png'
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // Estado para almacenar el usuario logueado
  const router = useRouter(); // Hook de router para redirección

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Verificar si hay un token en localStorage para mantener al usuario logueado
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    // Limpiar el localStorage y redirigir al login
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login');
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 p-4 transition-colors duration-500 ${scroll ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo que redirige al inicio */}
        <div className="text-white font-bold text-xl cursor-pointer flex items-center">
          <Image
            src={image1}
            alt="Logo"
            width={250} // Ancho máximo de la imagen
            height={125} // Altura inicial
            className="max-w-full h-auto" // Hace que la imagen sea responsiva
          />
        </div>

        {/* Menú para pantallas grandes */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/about">Sobre Nosotros</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/clientes">Clientes</Link>

          {/* Si el usuario está autenticado, mostramos el avatar y el botón de logout */}
          {user ? (
            <div className="flex items-center space-x-4">
              <img src="https://www.example.com/avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full" />
              <span className="text-white">{user.nombre}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition duration-300">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white transition duration-300">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Menú hamburguesa para pantallas móviles */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable para pantallas móviles */}
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden bg-gray-800 text-white py-4 px-6 shadow-lg">
          <div className="space-y-4">
            {/* Enlaces del menú */}
            <Link href="/about" className="block py-2 hover:bg-gray-700 rounded-lg transition duration-300">Sobre Nosotros</Link>
            <Link href="/servicios" className="block py-2 hover:bg-gray-700 rounded-lg transition duration-300">Servicios</Link>
            <Link href="/contacto" className="block py-2 hover:bg-gray-700 rounded-lg transition duration-300">Contacto</Link>
            <Link href="/clientes" className="block py-2 hover:bg-gray-700 rounded-lg transition duration-300">Clientes</Link>
          </div>

          {/* Card con el avatar, nombre y logout solo en el menú hamburguesa */}
          {user ? (
            <div className="flex flex-col items-center space-y-4 bg-gray-700 p-4 rounded-lg shadow-md mt-4">
              <img src="https://www.example.com/avatar.jpg" alt="Avatar" className="w-16 h-16 rounded-full" />
              <span className="text-white">{user.nombre}</span>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition duration-300">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white transition duration-300">
                  Register
                </button>
              </Link>
            </>
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
