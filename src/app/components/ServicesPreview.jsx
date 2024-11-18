
const ServicesPreview = () => {
  return (
    <section id="servicios" className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-teal-500">Nuestros Servicios</h2>
      <div className="flex flex-wrap justify-center mt-6">
        <div className="m-4 p-4 bg-gray-100 rounded-lg shadow-lg w-60">
          <h3 className="font-bold text-lg">Desarrollo Web</h3>
          <p className="text-gray-700">Creamos páginas web personalizadas...</p>
        </div>
        {/* Agrega más servicios */}
      </div>
    </section>
  );
};

export default ServicesPreview;