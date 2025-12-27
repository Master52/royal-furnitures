import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    review: 'Excellent quality and timely delivery. Highly recommend Royal Furniture!',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    review: 'The aluminium windows are top-notch. Professional installation team.',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    review: 'Great plywood furniture. Custom designs that fit perfectly.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
              <p className="font-semibold text-gray-800">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;