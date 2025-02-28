import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className="bg-red-600 text-white">
      <div className="flex justify-between items-center p-5">
        <div className="text-2xl font-bold">SuperLabs</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className="hidden lg:flex lg:items-center">
          <ul className="lg:flex lg:space-x-6">
            <li className="py-2 lg:py-0">
              <a href="#home" className="hover:text-gray-300">Home</a>
            </li>
            <li className="py-2 lg:py-0">
              <a href="#about" className="hover:text-gray-300">About</a>
            </li>
            <li className="relative py-2 lg:py-0">
              <button onClick={toggleServicesMenu} className="hover:text-gray-300 focus:outline-none">Services</button>
              {isServicesOpen && (
                <ul className="absolute left-0 mt-2 bg-white text-black">
                  <li className="px-4 py-2 hover:bg-gray-200"><a href="#service1">Service 1</a></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><a href="#service2">Service 2</a></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><a href="#service3">Service 3</a></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><a href="#service4">Service 4</a></li>
                </ul>
              )}
            </li>
            <li className="py-2 lg:py-0">
              <a href="#contact" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-red-600 p-5 z-50">
            <button onClick={toggleMenu} className="text-white mb-5">
              <FaTimes size={24} />
            </button>
            <nav>
              <ul className="space-y-4">
                <li>
                  <a href="#home" className="hover:text-gray-300">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-300">About</a>
                </li>
                <li className="relative">
                  <button onClick={toggleServicesMenu} className="hover:text-gray-300 focus:outline-none">Services</button>
                  {isServicesOpen && (
                    <ul className="mt-2 bg-white text-black">
                      <li className="px-4 py-2 hover:bg-gray-200"><a href="#service1">Service 1</a></li>
                      <li className="px-4 py-2 hover:bg-gray-200"><a href="#service2">Service 2</a></li>
                      <li className="px-4 py-2 hover:bg-gray-200"><a href="#service3">Service 3</a></li>
                      <li className="px-4 py-2 hover:bg-gray-200"><a href="#service4">Service 4</a></li>
                    </ul>
                  )}
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-300">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
