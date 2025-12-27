import { motion } from 'framer-motion';

const galleryImages = [
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400', // Window
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', // Furniture
  'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=400', // Railing
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400', // Interior
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400', // Another window
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', // Furniture
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Our Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;