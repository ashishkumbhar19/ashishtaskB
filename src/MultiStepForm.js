// src/MultiStepForm.js
import React, { useState } from 'react';
import CardOne from './components/CardOne';
import CardTwo from './components/CardTwo';
import CardThree from './components/CardThree';
import CardFour from './components/CardFour';

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => Math.min(prevStep + 1, 4));
  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleSubmit = () => {
    alert('Form submitted');
    setStep(1); // Reset to the first page
  };

  return (
    <div className="w-[800px] h-[650px] bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
      {step === 1 && <CardOne />}
      {step === 2 && <CardTwo />}
      {step === 3 && <CardThree />}
      {step === 4 && <CardFour />}

      <div className="flex justify-between mt-4">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Back
          </button>
        )}
        {step < 4 && (
          <button
            onClick={nextStep}
            className="ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        )}
        {step === 4 && (
          <button
            onClick={handleSubmit}
            className="ml-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Create Project
            
          </button>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
