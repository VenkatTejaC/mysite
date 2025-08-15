import React, { useRef } from 'react';
import { FaEnvelope, FaMobileAlt, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Send to owner
    emailjs.sendForm(
      'service_rrj603d',     // e.g., service_qwerty123
      'template_k7n1ysm',      // e.g., template_form_to_owner
      form.current,
      'q7ydhs_8Y_AxSFxtX'      // e.g., public_abcd1234
    ).then(() => {
      console.log('Owner notification sent');
    }).catch((error) => {
      console.error('Error sending to owner:', error);
    });

    // Send confirmation to user
    emailjs.sendForm(
      'service_rrj603d',
      'template_3nxyt5b',       // e.g., template_confirmation_to_user
      form.current,
      'q7ydhs_8Y_AxSFxtX'
    ).then(() => {
      alert('Message sent! A confirmation email has been sent to your inbox.');
    }).catch((error) => {
      console.error('Error sending confirmation to user:', error);
    });

    e.target.reset();
  };

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
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-10 max-w-6xl mx-auto">
        {/* Left - Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold mb-4">Contact</h1>

          <div className="flex items-center space-x-3">
            <h2 className="text-3xl font-bold mb-4">Via Phone</h2><br />
            <FaMobileAlt />
            <a href="tel:+447776632365" className="font-bold hover:text-blue-400">+44 7776632365</a>
          </div>

          <div className="flex items-center space-x-3">
            <h2 className="text-3xl font-bold mb-4">Via E-Mail</h2><br />
            <FaEnvelope />
            <a href="mailto:teja9509@gmail.com" className="font-bold hover:text-blue-400">teja9509@gmail.com</a>
          </div>

          <div className="flex items-center space-x-3">
            <h2 className="text-3xl font-bold mb-4">Via LinkedIn</h2><br />
            <FaLinkedin />
            <a href="www.linkedin.com/in/tejac15" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-blue-400">
              linkedin.com/in/vtc99
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="w-full md:w-1/2 bg-transparent text-white rounded-lg shadow-lg p-1">
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block font-medium">Name</label>
              <input type="text" name="user_name" required className="w-full p-2 rounded border" />
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input type="email" name="user_email" required className="w-full p-2 rounded border" />
            </div>

            <div>
              <label className="block font-medium">Phone Number</label>
              <input type="tel" name="user_phone" className="w-full p-2 rounded border" />
            </div>

            <div>
              <label className="block font-medium">Reason for Contact</label>
              <textarea name="message" required className="w-full p-2 rounded border" rows="4"></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
