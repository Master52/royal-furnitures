import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-primary text-accent py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary font-serif">Royal Furniture</h3>
            <p className="text-gray-300">Premium quality furniture and hardware solutions.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-accent hover:text-secondary"><FaFacebook size={24} /></a>
              <a href="#" className="text-accent hover:text-secondary"><FaInstagram size={24} /></a>
              <a href="#" className="text-accent hover:text-secondary"><FaTwitter size={24} /></a>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-secondary pt-8">
          <p className="text-accent">&copy; 2025 Royal Furniture. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};;

export default Footer;