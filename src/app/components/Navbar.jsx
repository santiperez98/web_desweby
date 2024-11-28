'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/logodesweby.png';
import logo1 from '../../../public/logochromo2.png';
import userImage from '../../../public/user.png';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login');
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 p-4 transition-all duration-500 ${
        scroll
          ? 'bg-gray-800 shadow-lg'
          : 'bg-transparent border-2 border-gray-300 rounded-lg'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logotipo a la izquierda */}
        <div className="text-white font-bold text-xl cursor-pointer flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={70}
              className="max-w-full h-auto"
            />
          </Link>
        </div>

        {/* Logotipo centrado */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src={logo1} alt="Logo centrado" width={120} height={50} />
        </div>

        {/* Menú para pantallas grandes */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/about">Sobre Nosotros</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/clientes">Clientes</Link>

          {user ? (
            <div className="flex items-center space-x-4">
              <Image
                src={userImage}
                alt="Avatar"
                className="w-8 h-8 rounded-full"
              />
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable para pantallas móviles */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-gray-800 text-white py-4 px-6 shadow-lg"
        >
          <div className="space-y-4">
            <Link
              href="/about"
              className="block py-2 hover:bg-gray-700 rounded-lg transition duration-300"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/servicios"
              className="block py-2 hover:bg-gray-700 rounded-lg transition duration-300"
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className="block py-2 hover:bg-gray-700 rounded-lg transition duration-300"
            >
              Contacto
            </Link>
            <Link
              href="/clientes"
              className="block py-2 hover:bg-gray-700 rounded-lg transition duration-300"
            >
              Clientes
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
