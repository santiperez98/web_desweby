"use client";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slider from './components/Slider';
import ContactForm from './components/ContactForm';
import ChatBot from './components/ChatBot';

const Home = () => {
  return (
    <div className="bg-light text-dark">
      <Navbar />
      
      <section className="bg-dark text-light p-10">
        <h2 className="text-4xl font-bold text-center">Bienvenido a Desweby</h2>
        <p className="text-center mt-4">Creamos soluciones digitales innovadoras para tu negocio.</p>
      </section>
      
      <Slider />
      
      <section id="contact" className="py-10 bg-gray-light">
        <h3 className="text-3xl text-center">Contacto</h3>
        <ContactForm />
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
}

export default Home;
