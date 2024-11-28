import { useState } from 'react';
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Iconos
import { SiRedux, SiTailwindcss, SiNextdotjs, SiVite, SiBootstrap, SiPostgresql } from 'react-icons/si'; // Otros iconos

const Servicios = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="py-16 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-aqua mb-8 tracking-wide">
          Nuestros Servicios
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Ofrecemos soluciones innovadoras y adaptadas a tus necesidades.
        </p>
        
        {/* Iconos de Tecnologías */}
        <div className="flex justify-center gap-6 mb-12">
          <FaJs size={50} color="#F7DF1E" />
          <FaHtml5 size={50} color="#E44D26" />
          <FaCss3Alt size={50} color="#1572B6" />
          <SiTailwindcss size={50} color="#38B2AC" />
          <FaReact size={50} color="#61DAFB" />
          <SiRedux size={50} color="#764ABC" />
          <FaNodeJs size={50} color="#8CC84B" />
          <FaDatabase size={50} color="#006F54" />
          <SiPostgresql size={50} color="#336791" />
          <SiNextdotjs size={50} color="#000000" />
          <SiVite size={50} color="#646CFF" />
          <SiBootstrap size={50} color="#7952B3" />
        </div>

        {/* Opciones de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Landing Page */}
          <div
            className={`p-6 rounded-lg shadow-xl transition-all duration-300 ${
              activeTab === 1 ? 'bg-aqua text-black scale-105' : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Landing Page</h3>
            <p className="mb-4">
              Diseños impactantes y optimizados para captar clientes potenciales.
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Diseño responsivo y moderno</li>
              <li>Optimización para SEO</li>
              <li>Entrega en 5 días</li>
              <li>Formulario de contacto integrado</li>
              <li>Integración con Google Analytics</li>
            </ul>
          </div>

          {/* Ecommerce */}
          <div
            className={`p-6 rounded-lg shadow-xl transition-all duration-300 ${
              activeTab === 2 ? 'bg-aqua text-black scale-105' : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Ecommerce</h3>
            <p className="mb-4">
              Tiendas en línea totalmente autoadministrables y sin comisiones.
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Panel para agregar y gestionar productos</li>
              <li>Integración con métodos de pago</li>
              <li>Hosting premium gratis por 1 año</li>
              <li>4 secciones personalizadas</li>
              <li>Cuentas de correo corporativas</li>
            </ul>
          </div>

          {/* Administración */}
          <div
            className={`p-6 rounded-lg shadow-xl transition-all duration-300 ${
              activeTab === 3 ? 'bg-aqua text-black scale-105' : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Páginas de Administración</h3>
            <p className="mb-4">
              Herramientas fáciles de usar para administrar contenido y usuarios.
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Panel de control intuitivo</li>
              <li>Gestión de usuarios y roles</li>
              <li>Integración con bases de datos</li>
              <li>Automatización de tareas</li>
            </ul>
          </div>
        </div>

        {/* Botones */}
        <div className="flex justify-center mt-12 gap-4">
          <button
            onClick={() => handleTabChange(1)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === 1 ? 'bg-aqua text-black' : 'bg-gray-700 hover:bg-aqua hover:text-black'
            }`}
          >
            Landing Page
          </button>
          <button
            onClick={() => handleTabChange(2)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === 2 ? 'bg-aqua text-black' : 'bg-gray-700 hover:bg-aqua hover:text-black'
            }`}
          >
            Ecommerce
          </button>
          <button
            onClick={() => handleTabChange(3)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === 3 ? 'bg-aqua text-black' : 'bg-gray-700 hover:bg-aqua hover:text-black'
            }`}
          >
            Administración
          </button>
        </div>

        {/* Servicios Extra */}
        <div className="mt-12">
          <h3 className="text-3xl text-center text-aqua font-semibold mb-8">Otros Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Community Manager</h3>
              <p>Gestión de redes sociales para mejorar tu presencia online.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-4">SEO</h3>
              <p>Optimización de tu página para mejorar el ranking en buscadores.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Diseño UX/UI</h3>
              <p>Diseños intuitivos y atractivos que mejoran la experiencia del usuario.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
