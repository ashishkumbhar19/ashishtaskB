import React, { useState } from 'react';

function CardThree() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([
        ...tasks,
        { name: taskInput, percentage: 0, id: Date.now(), completed: false }
      ]);
      setTaskInput('');
    }
  };

  // Toggle Completion Status
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Remove Task
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="flex flex-col h-full">
      {/* Main Heading */}
      <h2 className="text-2xl font-bold mb-4 text-center">Team</h2>

      {/* Add A Task Heading */}
      <h3 className="text-xl font-semibold mb-4">Add A Team</h3>

      {/* Add Task Input and Button */}
      <div className="flex mb-4">
        <input
          type="text"
          className="p-2 border rounded w-full mr-2"
          placeholder="Enter task name"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        
        <button
          onClick={addTask}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center mb-4 p-2 border-b border-gray-300">
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="mr-4"
            />

            {/* Task Name */}
            <div className={`flex-1 ${task.completed ? ' text-gray-500' : ''}`}>
              {task.name}
            </div>

            {/* Cancel Icon */}
            <button
              onClick={() => removeTask(task.id)}
              className="text-red-500 text-xl"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardThree;
