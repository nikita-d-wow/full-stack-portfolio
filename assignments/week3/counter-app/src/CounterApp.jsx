// src/CounterApp.jsx

import React, { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [customValue, setCustomValue] = useState('');

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  const handleReset = () => setCount(0);
  const handleInputChange = (e) => setCustomValue(e.target.value);
  const handleSetCustomValue = () => {
    const number = parseInt(customValue, 10);
    if (!isNaN(number)) {
      setCount(number);
      setCustomValue('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white space-y-6">
      <h1 className="text-4xl font-bold">Counter App</h1>

      <div className="text-6xl font-bold text-blue-400">{count}</div>

      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-200 transition"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-200 transition"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-amber-100 text-gray-900 rounded hover:bg-gray-200 transition"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="flex space-x-2 items-center">
        <input
          type="number"
          value={customValue}
          onChange={handleInputChange}
          placeholder="Set custom value"
          className="px-3 py-2 border rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
        <button
          onClick={handleSetCustomValue}
          className="px-4 py-2 bg-amber-100 text-gray-900 rounded hover:bg-gray-200 transition"
        >
          Set
        </button>
      </div>
    </div>
  );
}
