import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary shadow-md fixed top-0 w-full z-10"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.img
          src="/logo1200x100.png"
          alt="Royal Furniture Logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="h-10 w-auto"
        />
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-accent hover:text-secondary">Home</a></li>
            <li><a href="#services" className="text-accent hover:text-secondary">Services</a></li>
            <li><a href="#about" className="text-accent hover:text-secondary">About</a></li>
            <li><a href="#contact" className="text-accent hover:text-secondary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;