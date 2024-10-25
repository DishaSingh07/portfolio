import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`flex justify-between items-center p-6 bg-white shadow-lg transition-colors duration-300 ${scrolled ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="text-2xl font-bold">Disha Singh</div>
      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <li><a href="#about" className="hover:text-gray-500">About</a></li>
        <li><a href="#experience" className="hover:text-gray-500">Experience</a></li>
        <li><a href="#projects" className="hover:text-gray-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
      </ul>
      {/* Mobile Menu */}
      <div className="md:hidden flex flex-col space-y-1 cursor-pointer" onClick={toggleMenu}>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
      </div>
      {isOpen && (
        <ul className="absolute right-0 top-20 bg-white shadow-lg rounded-lg p-4 space-y-4 text-lg">
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
