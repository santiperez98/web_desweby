import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-800 to-black text-white py-16 ">
        <div className="container mx-auto px-6 lg:px-12 mt-16">
          {/* Título */}
          <h1 className="text-4xl font-extrabold text-center text-aqua mb-8">
            Contáctanos
          </h1>
          <p className="text-center text-gray-200 mb-12 text-lg">
            Estamos aquí para ayudarte. Déjanos un mensaje y nos pondremos en contacto contigo.
          </p>

          {/* Formulario de Contacto */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-2xl mb-12">
            <ContactForm />
          </div>

          {/* Medios de Contacto */}
          <div className="text-center text-gray-200">
            <h3 className="text-2xl font-semibold text-aqua mb-4">Otros Medios de Contacto</h3>
            <p className="mb-8">Puedes comunicarte con nosotros a través de los siguientes canales:</p>
            
            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <FaPhone size={30} color="#34D399" />
                <span className="text-lg">+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope size={30} color="#34D399" />
                <span className="text-lg">contacto@tuempresa.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-semibold text-aqua mb-4">Síguenos en nuestras redes sociales:</h4>
              <div className="flex justify-center gap-8">
                <a href="https://facebook.com/tuempresa" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30} color="#1877F2" />
                </a>
                <a href="https://instagram.com/tuempresa" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} color="#E4405F" />
                </a>
                <a href="https://linkedin.com/company/tuempresa" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} color="#0077B5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
