import React from 'react';

export default function AboutMe({ name, age, hobby }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-lg space-y-4 border border-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-900 border-b pb-2 mb-4">
          About Me
        </h2>
        <div className="space-y-3 text-lg">
          <p className="text-gray-700">
            My name is <strong className="text-blue-600">{name}</strong>.
          </p>
          <p className="text-gray-700">
            I am <span className="font-semibold text-blue-600">{age}</span>{' '}
            years old.
          </p>
          <p className="text-gray-700">
            My favorite hobby is{' '}
            <span className="font-semibold text-blue-600">{hobby}</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
