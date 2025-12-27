import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary font-serif"
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <FaPhone className="text-4xl text-secondary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+917987979086</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <FaEnvelope className="text-4xl text-secondary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">harajmast9008@gmail.com</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <FaMapMarkerAlt className="text-4xl text-secondary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600">46/2, Lakkhad pitha road ratlam</p>
          </motion.div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-secondary text-primary py-2 px-4 rounded-md hover:bg-accent transition-colors shimmer">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;