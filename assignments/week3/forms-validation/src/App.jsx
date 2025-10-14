import React from 'react';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold mt-10 mb-6 text-gray-700">
        Form Submittion
      </h1>
      <RegistrationForm />
    </div>
  );
}

export default App;
