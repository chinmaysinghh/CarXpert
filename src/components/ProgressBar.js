import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentStep, totalSteps, isCompleted }) => {
  const steps = [
    { label: 'Personal Info', number: '1' },
    { label: 'Service Info', number: '2' },
    { label: 'Additional Info', number: '3' },
  ];

  const progressWidth = isCompleted 
    ? '100%' 
    : `${((currentStep - 1) / (totalSteps - 1)) * 100}%`;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className={`step ${currentStep > index + 1 || isCompleted ? 'completed' : ''} ${currentStep === index + 1 ? 'active' : ''}`}>
            <div className="step-circle">{step.number}</div>
            <div className="step-label">{step.label}</div>
          </div>
        ))}
        <div className="progress-line" style={{ width: progressWidth }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;