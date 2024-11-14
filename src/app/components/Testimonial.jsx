// components/Testimonial.js
export default function Testimonial({ name, image, text }) {
    return (
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.3 }} 
        className="bg-gray-800 text-white p-6 rounded-lg shadow-md space-y-4"
      >
        <div className="flex items-center space-x-4">
          <img src={image} alt={name} className="w-16 h-16 rounded-full" />
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <p>{text}</p>
      </motion.div>
    );
  }
  