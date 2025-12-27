import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'What materials do you use?',
    answer: 'We use high-quality aluminium, UPVC, plywood, laminates, ACP sheets, and tempered glass for all our products.',
  },
  {
    question: 'Do you provide installation services?',
    answer: 'Yes, our expert team provides professional installation for all products.',
  },
  {
    question: 'What is your warranty policy?',
    answer: 'We offer comprehensive warranties on materials and workmanship. Contact us for details.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Installation time varies by project, but we strive for minimal disruption and timely completion.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-white p-4 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white px-4 pb-4 rounded-b-lg"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;