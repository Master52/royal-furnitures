import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary text-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 mb-8 lg:mb-0"
          >
            <h2 className="text-4xl font-bold mb-6 text-secondary font-serif">About Royal Furniture</h2>
            <p className="text-lg text-accent mb-4">
              At Royal Furniture, we pride ourselves on delivering exceptional quality in furniture and hardware solutions.
              With years of experience in the industry, we provide comprehensive services from aluminium windows to glass railings.
            </p>
            <p className="text-lg text-gray-600">
              Our commitment to excellence, attention to detail, and customer satisfaction sets us apart.
              We work with premium materials and cutting-edge techniques to bring your vision to life.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 lg:pl-12"
          >
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-64 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Royal Quality</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;