import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image1 from "../../../public/window.svg"; // Asegúrate de usar la imagen adecuada

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-aqua mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed mb-8">
            Somos un equipo de profesionales apasionados por el desarrollo digital. Nos especializamos en crear experiencias digitales únicas, desarrollando páginas web personalizadas, optimizando para SEO, gestionando redes sociales y diseñando interfaces visualmente atractivas.
          </p>
          <Image
            src={image1}
            alt="Equipo"
            className="mx-auto rounded-xl shadow-2xl transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* Sección de estadísticas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform">
            <h2 className="text-3xl font-semibold text-aqua mb-2">500+</h2>
            <p className="text-gray-300">Clientes satisfechos</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform">
            <h2 className="text-3xl font-semibold text-aqua mb-2">200+</h2>
            <p className="text-gray-300">Páginas web creadas</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform">
            <h2 className="text-3xl font-semibold text-aqua mb-2">100%</h2>
            <p className="text-gray-300">Satisfacción garantizada</p>
          </div>
        </div>

        {/* Sección de Misión y Valores */}
        <div className="mt-20 text-center text-gray-200">
          <h2 className="text-3xl font-semibold text-aqua mb-6">Nuestra Misión</h2>
          <p className="text-lg leading-relaxed">
            Crear soluciones digitales que ayuden a nuestros clientes a crecer, mejorar su presencia en línea y lograr sus objetivos. Nos enfocamos en ofrecer productos de alta calidad y brindar un servicio al cliente excepcional.
          </p>
        </div>

        {/* Sección de equipo */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-aqua mb-6">Conoce a Nuestro Equipo</h2>
          <p className="text-lg text-gray-300 mb-8">Un grupo diverso de diseñadores, desarrolladores y expertos en marketing digital que trabajan juntos para alcanzar el éxito de nuestros clientes.</p>

          <div className="flex justify-center gap-12">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <Image
                src="/team1.jpg"
                alt="Miembro del equipo"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-aqua">Juan Pérez</h3>
              <p className="text-gray-300">Desarrollador Frontend</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <Image
                src="/team2.jpg"
                alt="Miembro del equipo"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-aqua">Ana Martínez</h3>
              <p className="text-gray-300">Diseñadora Gráfica</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <Image
                src="/team3.jpg"
                alt="Miembro del equipo"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-aqua">Carlos Gómez</h3>
              <p className="text-gray-300">Especialista SEO</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
