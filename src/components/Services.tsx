import { motion } from 'framer-motion';
import { FaWindowMaximize, FaDoorOpen, FaChair, FaLayerGroup, FaBuilding, FaGlassWhiskey } from 'react-icons/fa';

const services = [
  { icon: FaWindowMaximize, title: 'Aluminium Window and Partition', description: 'High-quality aluminium windows and partitions for modern interiors.' },
  { icon: FaDoorOpen, title: 'UPVC Window', description: 'Durable and energy-efficient UPVC windows for your home.' },
  { icon: FaChair, title: 'Plywood Furniture', description: 'Sturdy and stylish plywood furniture crafted to perfection.' },
  { icon: FaLayerGroup, title: 'Laminates', description: 'Wide range of laminates for flooring and surface finishing.' },
  { icon: FaBuilding, title: 'ACP Sheets', description: 'Aluminum Composite Panels for exterior and interior cladding.' },
  { icon: FaGlassWhiskey, title: 'Glass Railing', description: 'Elegant glass railings for safety and aesthetics.' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary font-serif"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-secondary"
            >
              <service.icon className="text-4xl text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-primary">And comprehensive related hardware solutions</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;