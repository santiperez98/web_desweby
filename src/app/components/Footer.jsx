const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-lg font-bold">[Tu Logo]</div>
        <div className="flex space-x-6">
          <a href="/#inicio">Inicio</a>
          <a href="/#sobre-nosotros">Sobre Nosotros</a>
          <a href="/#servicios">Servicios</a>
          <a href="/#contacto">Contacto</a>
          <a href="/#clientes">Clientes</a>
        </div>
        <div className="flex space-x-4">
          <a href="#facebook" className="text-xl">Facebook</a>
          <a href="#instagram" className="text-xl">Instagram</a>
          <a href="#twitter" className="text-xl">Twitter</a>
        </div>
      </div>
      <p className="text-center mt-4 text-gray-500">&copy; 2024 [Tu Empresa]. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
