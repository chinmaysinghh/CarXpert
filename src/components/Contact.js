import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveToLocalStorage(formData, 'contactFormData');
    toast.success('Message Sent!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    e.target.reset();
  };

  const saveToLocalStorage = (data, key) => {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    existingData.push(data);
    localStorage.setItem(key, JSON.stringify(existingData));
  };

  return (
    <section id="contact" className="py-20 px-5 bg-gray-800 text-white" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="100">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 mb-4 bg-gray-200 rounded text-gray-800" onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 mb-4 bg-gray-200 rounded text-gray-800" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Your Mobile Number" required className="w-full p-3 mb-4 bg-gray-200 rounded text-gray-800" onChange={handleChange} />
          <textarea name="message" placeholder="Message" required className="w-full p-3 mb-4 bg-gray-200 rounded h-32 text-gray-800" onChange={handleChange}></textarea>
          
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1 flex items-center justify-center">
              Send Message <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;