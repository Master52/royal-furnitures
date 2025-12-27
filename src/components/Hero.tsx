import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-accent">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 text-accent font-serif"
        >
          Welcome to Royal Furniture
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-4 text-accent italic"
        >
          "Apne ghar ko do Royal touch sirf Royal Furnitures se"
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg mb-8 text-accent"
        >
          Premium quality furniture and hardware solutions
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-secondary text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent transition-colors mr-4 shimmer"
        >
          Explore Our Services
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-primary transition-colors shimmer"
        >
          Get a Quote
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;