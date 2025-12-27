import { motion } from 'framer-motion';
import { FaCheckCircle, FaTools, FaShieldAlt, FaClock } from 'react-icons/fa';

const features = [
  { icon: FaCheckCircle, title: 'Quality Materials', description: 'We use only premium materials for lasting durability.' },
  { icon: FaTools, title: 'Expert Installation', description: 'Professional team ensures perfect installation every time.' },
  { icon: FaShieldAlt, title: 'Warranty', description: 'Comprehensive warranty on all our products and services.' },
  { icon: FaClock, title: 'Timely Delivery', description: 'We respect your time with on-schedule deliveries.' },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Why Choose Royal Furniture?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <feature.icon className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;