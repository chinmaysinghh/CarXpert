import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
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

    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const validate = () => {
    let isValid = true;
    let errors = {};

    if (!formData.name.trim() || !/^[a-zA-Z\s]{2,}$/.test(formData.name)) {
      errors.name = 'Name must be at least 2 characters long and contain only letters and spaces';
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be exactly 10 digits';
      isValid = false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      saveToLocalStorage(formData, 'contactFormData');
      toast.success('Message Sent!', {
        position: "top-center",
        duration: 3000,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      e.target.reset();
    } else {
      toast.error('Please correct the errors in the form.', {
        position: "top-center",
        duration: 3000,
      });
    }
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
        <div className="text-center mb-8">
          <p className="mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            CarXpert, Plot No. 15, A.B.C. Road, Ahmedabad, Gujarat-Pincode
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Email: <a href="mailto:info@carxpert.com" className="text-blue-400">info@carxpert.com</a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-4">
            <input type="text" name="name" placeholder="Your Name" required className={`w-full p-3 bg-gray-200 rounded text-gray-800 ${errors.name ? 'border-red-500' : ''}`} onChange={handleChange} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <input type="email" name="email" placeholder="Your Email" required className={`w-full p-3 bg-gray-200 rounded text-gray-800 ${errors.email ? 'border-red-500' : ''}`} onChange={handleChange} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input type="tel" name="phone" placeholder="Your Mobile Number" required className={`w-full p-3 bg-gray-200 rounded text-gray-800 ${errors.phone ? 'border-red-500' : ''}`} onChange={handleChange} />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <textarea name="message" placeholder="Message" required className={`w-full p-3 bg-gray-200 rounded h-32 text-gray-800 ${errors.message ? 'border-red-500' : ''}`} onChange={handleChange}></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
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
