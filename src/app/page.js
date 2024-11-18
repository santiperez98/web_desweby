"use client";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Hero from './components/Hero';
import AboutPreview from './components/AboutPreview';
import HowWeCanHelp from './components/HowWeCanHelp';
import BrandsCarousel from './components/BrandsCarousel';
import ServicesPreview from './components/ServicesPreview';
import ProjectCarousel from './components/ProjectCarousel';

const Home = () => {
  return (
    <div className="bg-light text-dark">
      <Navbar />
      
        <Hero />
        <AboutPreview />
        <HowWeCanHelp />
        <ProjectCarousel />
        <ServicesPreview />
        <BrandsCarousel />
        <ContactForm />

      <Footer />
 
    </div>
  );
}

export default Home;
