import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from './ProgressBar';
import './ProgressBar.css';

const servicesList = [
  'Car Health Check', 'Detailing', 'Battery Replacement', 'PPF (Paint Protection Film)',
  'Ceramic Coat', 'Oil Change', 'Tire Rotation', 'Battery Check',
  'Brake Service', 'AC Repair', 'Engine Tune', 'Wheel Alignment'
];

function ServiceForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', carModel: '', service: '',
    date: '', time: '', dropOrPickup: '', comments: '', photos: null
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [isStepValid, setIsStepValid] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === 'file' ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(true);
    saveToLocalStorage(formData, 'serviceFormData');
    toast.success('Booking Done!', {
      position: "top-center",
      duration: 3000,
    });
    
    // Reset form and progress bar after a short delay
    setTimeout(() => {
      e.target.reset();
      setFormData({
        name: '', email: '', phone: '', carModel: '', service: '',
        date: '', time: '', dropOrPickup: '', comments: '', photos: null
      });
      setCurrentStep(1);
      setIsCompleted(false);
    }, 1000);
  };

  const saveToLocalStorage = (data, key) => {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    existingData.push(data);
    localStorage.setItem(key, JSON.stringify(existingData));
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    const validateStep = () => {
      switch(currentStep) {
        case 1:
          setIsStepValid(formData.name && formData.email && formData.phone && formData.carModel);
          break;
        case 2:
          setIsStepValid(formData.service && formData.date && formData.time && formData.dropOrPickup);
          break;
        case 3:
          setIsStepValid(true);
          break;
        default:
          setIsStepValid(false);
      }
    };
    validateStep();

    // Reset isCompleted when returning to step 1
    if (currentStep === 1) {
      setIsCompleted(false);
    }
  }, [currentStep, formData]);

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Name" required className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} value={formData.name} />
            <input type="email" name="email" placeholder="Email" required className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} value={formData.email} />
            <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} value={formData.phone} />
            <input type="text" name="carModel" placeholder="Car Model" required className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} value={formData.carModel} />
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-2 gap-6">
            <select name="service" className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} required value={formData.service}>
              <option value="">Select Service</option>
              {servicesList.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
            <input type="date" name="date" placeholder="Preferred Date" required className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} value={formData.date} />
            <input type="time" name="time" placeholder="Preferred Time" required className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} value={formData.time} />
            <select name="dropOrPickup" className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} required value={formData.dropOrPickup}>
              <option value="">Select Option</option>
              <option value="drop-off">Drop-off</option>
              <option value="pickup">Pickup</option>
            </select>
          </div>
        );
      case 3:
        return (
          <div>
            <textarea name="comments" placeholder="Additional Information" required className="w-full p-3 mt-6 bg-gray-200 rounded h-32" onChange={handleChange} value={formData.comments}></textarea>
            <div className="mt-6">
              <label className="block mb-2">Upload Photos:</label>
              <input type="file" name="photos" className="w-full" onChange={handleChange} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="serviceForm" className="py-20 px-5 bg-gray-100 text-gray-800" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:mx-auto after:mt-4">Book a Service</h2>
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} isCompleted={isCompleted} />
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          {renderStep()}
          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button type="button" onClick={prevStep} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Previous
              </button>
            )}
            {currentStep < totalSteps ? (
              <button type="button" onClick={nextStep} disabled={!isStepValid} className={`${isStepValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'} text-white font-bold py-2 px-4 rounded-full transition duration-300 ml-auto`}>
                Next <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            ) : (
              <button type="submit" disabled={!isStepValid} className={`${isStepValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'} text-white font-bold py-2 px-4 rounded-full transition duration-300 ml-auto`}>
                Book Service
                <FontAwesomeIcon icon={faCalendarCheck} className="ml-2" />
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ServiceForm;
