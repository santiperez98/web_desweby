import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image1 from "../../../public/window.svg"
const AboutPage = () => {
    return (
      <>
      <Navbar/>
      <div className="py-12 px-4 text-center">
        <h1 className="text-5xl font-bold text-teal-500">Sobre Nosotros</h1>
        <p className="mt-8 text-gray-700 leading-relaxed">
          Somos un equipo apasionado por el desarrollo de soluciones digitales...
        </p>
        <Image src={image1} alt="Equipo" className="w-full mt-8 rounded-md shadow-lg" />
      </div>
      <Footer/>
      </>
    );
  };
  
  export default AboutPage;
  