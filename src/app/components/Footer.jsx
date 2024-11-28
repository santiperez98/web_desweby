import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaRobot } from "react-icons/fa"; // Librería para íconos
import image1 from '../../../public/logodesweby.png'; // Asegúrate de que esta imagen esté en la carpeta correcta

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-black text-white py-12 relative">
      {/* Efecto de burbujas flotando */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubbles">
          <div className="bubble bubble1"></div>
          <div className="bubble bubble2"></div>
          <div className="bubble bubble3"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 relative z-10">
        {/* Logo responsivo */}
        <div className="text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-600 w-full max-w-xs md:max-w-md">
          <Image src={image1} alt="Logo de la Empresa" layout="intrinsic" />
        </div>

        {/* Enlaces de navegación */}
        <div className="flex space-x-8">
          <Link href="/#inicio" className="hover:text-teal-200 transition duration-500 ease-in-out transform hover:scale-105">
            Inicio
          </Link>
          <Link href="/#sobre-nosotros" className="hover:text-teal-200 transition duration-500 ease-in-out transform hover:scale-105">
            Sobre Nosotros
          </Link>
          <Link href="/#servicios" className="hover:text-teal-200 transition duration-500 ease-in-out transform hover:scale-105">
            Servicios
          </Link>
          <Link href="/#contacto" className="hover:text-teal-200 transition duration-500 ease-in-out transform hover:scale-105">
            Contacto
          </Link>
          <Link href="/#clientes" className="hover:text-teal-200 transition duration-500 ease-in-out transform hover:scale-105">
            Clientes
          </Link>
        </div>

        {/* Iconos de redes sociales */}
        <div className="flex space-x-6">
          <Link href="#facebook" className="text-xl hover:text-teal-300 transform transition duration-300 hover:scale-110">
            <FaFacebook />
          </Link>
          <Link href="#instagram" className="text-xl hover:text-teal-300 transform transition duration-300 hover:scale-110">
            <FaInstagram />
          </Link>
          <Link href="#twitter" className="text-xl hover:text-teal-300 transform transition duration-300 hover:scale-110">
            <FaTwitter />
          </Link>
          {/* Icono de robot para futuro bot de ayuda */}
          <Link href="#help" className="text-xl hover:text-teal-300 transform transition duration-300 hover:scale-110">
            <FaRobot />
          </Link>
        </div>
      </div>

      {/* Texto de derechos reservados */}
      <p className="text-center mt-8 text-gray-200 text-sm">
        &copy; 2024 [Tu Empresa]. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
