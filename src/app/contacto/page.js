import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  return (
    <>
    <Navbar />
    <div className="bg-light text-dark">
      <h1 className="text-4xl text-center p-10">Contáctanos</h1>
      <ContactForm />
    </div>
    <Footer />
    </>
  );
}

export default ContactPage;
