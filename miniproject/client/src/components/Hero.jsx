import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-green-200 to-blue-100 flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-green-900"
      >
        Welcome to E-Waste Awareness
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg md:text-xl text-green-800 max-w-xl"
      >
        Learn how your old electronics impact the planet — and how you can help reduce e-waste today.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-10"
      >
        <a href="#facts" className="inline-flex items-center text-green-700 hover:text-green-900 transition">
          <span className="mr-2">Scroll Down</span>
          <FaArrowDown className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
