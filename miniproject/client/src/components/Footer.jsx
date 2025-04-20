import React, { useEffect, useState } from 'react';
import facts from '../data/facts.json';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [currentFact, setCurrentFact] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % facts.length);
      setCurrentFact(facts[index]);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, [index]);

  return (
    <footer className="bg-green-900 text-white py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} E-Waste Awareness</p>
          <p>Built with ❤️ by You (or your team)</p>
        </div>

        <div className="flex items-center gap-4 text-lg">
          <a
            href="https://github.com/your-repo" // replace with your real repo link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300"
          >
            <FaGithub />
          </a>
          <a href="mailto:your@email.com" className="hover:text-green-300">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Rotating fact */}
      <div className="text-center mt-6 text-green-200 italic">
        <p>💡 Did you know? <span className="font-medium">{currentFact.fact}</span></p>
      </div>
    </footer>
  );
};

export default Footer;
