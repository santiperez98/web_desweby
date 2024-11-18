import { motion } from 'framer-motion';

const HowWeCanHelp = () => {
    const services = [
      'Desarrollo de Páginas Web',
      'Tienda Online',
      'Marketing Digital',
      'Community Manager',
      'SEO',
      'Diseño UX/UI',
    ];
  
    return (
      <motion.section
        id="como-ayudarte"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-12 px-4 text-center bg-gray-800 text-white"
      >
        <h2 className="text-3xl font-bold text-teal-500">¿Cómo Podemos Ayudarte?</h2>
        <p className="mt-4">Nuestros servicios están diseñados para impulsar tu negocio.</p>
        <div className="flex flex-wrap justify-center mt-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 p-6 m-4 rounded-lg shadow-lg w-60"
            >
              <h3 className="text-lg font-semibold">{service}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  };
  
  export default HowWeCanHelp;
  