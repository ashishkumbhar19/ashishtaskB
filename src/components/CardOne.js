import React, { useState } from 'react';

function CardOne() {
  const [clients, setClients] = useState(['Client 1', 'Client 2']);
  const [selectedClient, setSelectedClient] = useState('');
  const [newClient, setNewClient] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddClient = () => {
    if (newClient) {
      setClients([...clients, newClient]);
      setNewClient('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Centered Heading */}
      <h2 className="text-xl font-bold mb-4 text-center">Create a Project</h2>

      <label>Project Name</label>
      <input
        type="text"
        className="mb-4 p-2 border rounded"
        placeholder="Enter project name"
      />

      <label>Client</label>
      <div className="flex items-center mb-4">
        <select
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
          className="p-2 border rounded mr-2"
        >
          <option value="" disabled>
            Select a client
          </option>
          {clients.map((client, index) => (
            <option key={index} value={client}>
              {client}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={newClient}
          onChange={(e) => setNewClient(e.target.value)}
          className="p-2 border rounded mr-2"
          placeholder="Add new client"
        />

        <button
          onClick={handleAddClient}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center"
        >
          <span className="text-xl">+</span>
        </button>
      </div>

      <label>Start Date</label>
      <input
        type="date"
        className="mb-4 p-2 border rounded"
      />

      <label>End Date</label>
      <input
        type="date"
        className="p-2 border rounded"
      />

      <label>Notes</label>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="p-2 border rounded mb-4"
        placeholder="Enter any additional notes here..."
        rows="4"
      />
    </div>
  );
}

export default CardOne;
