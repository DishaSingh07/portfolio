import React, { useState } from 'react';
import { FiUser, FiMail, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Clear error message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSuccess('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 px-6 md:px-32 lg:px-64 text-center bg-gradient-to-r from-blue-50 to-blue-100">
      <p className="text-blue-600 font-semibold">Let's Connect</p>
      <h1 className="text-4xl font-bold mb-6 text-gray-700">Contact Me</h1>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl mx-auto max-w-lg text-left">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        
        <div className="mb-5 relative">
          <label htmlFor="name" className="text-left block text-gray-600 mb-1 font-medium">Name</label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <FiUser className="text-gray-400 ml-3" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 outline-none bg-transparent text-gray-700"
              placeholder="Your Name"
              required
            />
          </div>
        </div>

        <div className="mb-5 relative">
          <label htmlFor="email" className="text-left block text-gray-600 mb-1 font-medium">Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <FiMail className="text-gray-400 ml-3" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 outline-none bg-transparent text-gray-700"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div className="mb-5 relative">
          <label htmlFor="message" className="text-left block text-gray-600 mb-1 font-medium">Message</label>
          <div className="flex items-start border border-gray-300 rounded-lg overflow-hidden">
            <FiMessageCircle className="text-gray-400 mt-3 ml-3" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 outline-none bg-transparent text-gray-700"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 transition-transform duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
