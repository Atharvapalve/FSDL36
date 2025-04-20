import React from 'react';
import tips from '../data/tips.json';
import { FaRecycle, FaWrench, FaDonate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconMap = {
  "Donate Old Devices": <FaDonate className="text-3xl text-green-600" />,
  "Repair Instead of Replace": <FaWrench className="text-3xl text-yellow-600" />,
  "Recycle Batteries Separately": <FaRecycle className="text-3xl text-blue-600" />
};

const Tips = () => {
  return (
    <section id="tips" className="py-20 bg-green-50 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-900">Repair • Reuse • Recycle Tips</h2>
        <p className="text-green-700 mt-2">Practical things you can do today</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-4 mb-3">
              {iconMap[tip.title] || <FaRecycle className="text-3xl text-green-600" />}
              <h3 className="text-lg font-semibold text-green-800">{tip.title}</h3>
            </div>
            <p className="text-gray-700">{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tips;
