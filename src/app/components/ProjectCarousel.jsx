import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const ProjectCarousel = () => {
  const projects = [
    { id: 1, name: 'Proyecto A', image: 'projectA.png', device: 'mobile' },
    { id: 2, name: 'Proyecto B', image: 'projectB.png', device: 'tablet' },
    { id: 3, name: 'Proyecto C', image: 'projectC.png', device: 'desktop' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-12 px-4"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-teal-500">Nuestros Proyectos</h2>
      <Slider {...settings} className="project-carousel">
        {projects.map((project) => (
          <div key={project.id} className="p-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-gray-800 rounded shadow-lg text-white"
            >
              <h3 className="text-2xl font-semibold mb-4 text-center">{project.name}</h3>
              <div className="flex justify-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className={`mockup-image ${project.device}`}
                />
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default ProjectCarousel;
