import React, { useEffect } from 'react';
import facts from '../data/facts.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Facts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="facts" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900">E-Waste Facts</h2>
        <p className="text-green-700 mt-2">Here’s what you should know about electronic waste.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {facts.map((fact) => (
          <div
            key={fact.id}
            className="bg-green-100 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <div className="text-5xl mb-4">{fact.icon}</div>
            <h3 className="text-xl font-semibold text-green-900 mb-2">{fact.title}</h3>
            <p className="text-green-800">{fact.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facts;
