// Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col items-center">
        
        <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>

        <div className="flex space-x-6 mb-6">
          <a href="https://github.com/DishaSingh07" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/disha-singh-241737229/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/DishaSingh02" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
            <FaTwitter size={24} />
          </a>
        </div>

        <div className="flex space-x-4 mb-6 text-sm">
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </div>

        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Disha Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
