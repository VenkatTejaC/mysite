import React from 'react';
import { FaEnvelope, FaMobileAlt, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section
      className="relative p-8 text-white"
      style={{
        backgroundImage: 'url(/images/about-bg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
        <h2 className="text-center text-3xl font-bold mb-6">Contact</h2>

        {/* Phone */}
        <div className="flex items-center space-x-2">
          <FaMobileAlt className="text-300" />
          <a href="tel:+44 7776632365" className="font-bold text-300 no-underline hover:text-blue-400">+44 7776632365</a>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-300" />
          <a href="mailto:teja9509@gmail.com" className="font-bold text-300 no-underline hover:text-blue-400">teja9509@gmail.com</a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-2">
          <FaLinkedin className="text-300" />
          <a
            href="https://linkedin.com/in/vtc99"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-300 no-underline hover:text-blue-400"
          >
            linkedin.com/in/vtc99
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
