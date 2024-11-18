import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-lg font-bold">[Tu Logo]</div>
        <div className="flex space-x-6">
          <Link href="/#inicio">Inicio</Link>
          <Link href="/#sobre-nosotros">Sobre Nosotros</Link>
          <Link href="/#servicios">Servicios</Link>
          <Link href="/#contacto">Contacto</Link>
          <Link href="/#clientes">Clientes</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="#facebook" className="text-xl">Facebook</Link>
          <Link href="#instagram" className="text-xl">Instagram</Link>
          <Link href="#twitter" className="text-xl">Twitter</Link>
        </div>
      </div>
      <p className="text-center mt-4 text-gray-500">&copy; 2024 [Tu Empresa]. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
