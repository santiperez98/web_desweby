const ContactForm = () => {
    return (
      <form id="contact-form" className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
        <label htmlFor="name" className="block text-dark">Nombre</label>
        <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" />
  
        <label htmlFor="email" className="block text-dark">Email</label>
        <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
  
        <label htmlFor="message" className="block text-dark">Mensaje</label>
        <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
  
        <button type="submit" className="w-full bg-aqua text-light py-3 rounded-full hover:bg-opacity-80 transition-all">Enviar</button>
      </form>
    );
  }
  
  export default ContactForm;
  