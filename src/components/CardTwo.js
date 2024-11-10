import React, { useState } from 'react';

function CardTwo() {
  const [selectedRate, setSelectedRate] = useState('');
  const [amount, setAmount] = useState('');
  const [budget, setBudget] = useState('');
  const [resetBudget, setResetBudget] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [percentage, setPercentage] = useState(80); // Editable 80% by default

  return (
    <div className="flex flex-col h-full">
      {/* Centered Heading */}
      <h2 className="text-xl font-bold mb-4 text-center">Project Type</h2>

      {/* Centered Instruction text */}
      <p className="text-sm text-gray-600 mb-4 text-center">
        Don't panic – you can customize these types in settings.
      </p>

      {/* Horizontal Navigation Bar for Project Types (without border) */}
      <div className="flex justify-center mb-4">
        {/* Time and Material Option */}
        <div
          className={`px-6 py-2 cursor-pointer rounded-l-lg ${
            selectedRate === 'Time and Material'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setSelectedRate('Time and Material')}
        >
          Time and Material
        </div>

        {/* Fixed Fee Option */}
        <div
          className={`px-6 py-2 cursor-pointer ${
            selectedRate === 'Fixed Fee'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setSelectedRate('Fixed Fee')}
        >
          Fixed Fee
        </div>

        {/* Non-billed Option */}
        <div
          className={`px-6 py-2 cursor-pointer rounded-r-lg ${
            selectedRate === 'Non-billed'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setSelectedRate('Non-billed')}
        >
          Non-billed
        </div>
      </div>

      {/* Hourly Rate and Amount Input Section */}
      <label>Hourly</label>
      <p className="text-sm text-gray-600 mb-4">
        We need hourly rate to track your project billed amount.
      </p>

      {/* Hourly Rate Dropdown and Amount Input in same line */}
      <div className="flex mb-4">
        <div className="flex flex-col w-1/2 pr-2">
          <label>Project Hourly Rate</label>
          <select
            className="p-2 border rounded"
            value={selectedRate}
            onChange={(e) => setSelectedRate(e.target.value)}
          >
            <option value="Hourly">Hourly</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>
        <div className="flex flex-col w-1/2 pl-2">
          <label>Amount</label>
          <input
            type="number"
            className="p-2 border rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
      </div>

      {/* Budget Input Section */}
      <label>Budget</label>
      <p className="text-sm text-gray-600 mb-4">
        We need hourly rate to track your project billed amount.
      </p>
   
      <input
          type="number"
          className="mb-4 p-2 border rounded w-1/2" // Reduced width to half
          placeholder="Enter hours per person"
      />

      {/* Email Alerts Checkbox with Editable Percentage */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="emailAlert"
          className="mr-2"
          checked={emailAlert}
          onChange={() => setEmailAlert(!emailAlert)}
        />
        <label htmlFor="emailAlert" className="text-xs text-gray-700">
          Send me email alerts when project exceeds
        </label>
        <input
          type="number"
          className="w-16 p-1 mx-1 border rounded"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)} // Allowing user to change percentage
        />
        <span className="text-xs text-gray-600">%</span>
      </div>

      {/* Budget Reset Every Month Checkbox */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="resetBudget"
          className="mr-2"
          checked={resetBudget}
          onChange={() => setResetBudget(!resetBudget)}
        />
        <label htmlFor="resetBudget" className="text-xs text-gray-700">
          Budget reset every month
        </label>
      </div>
    </div>
  );
}

export default CardTwo;
