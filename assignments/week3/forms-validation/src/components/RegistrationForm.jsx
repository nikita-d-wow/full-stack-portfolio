import React, { useState, useEffect } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // npm i @heroicons/react

function RegistrationForm() {
  const FORM_KEY = 'registrationForm';
  const SUCCESS_MESSAGE = 'Form submitted successfully!';

  const initialData = JSON.parse(localStorage.getItem(FORM_KEY)) || {
    username: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = (values) => {
    const newErrors = {};
    if (!values.username.trim()) newErrors.username = 'Username is required';
    else if (values.username.includes('@'))
      newErrors.username = "Username cannot contain '@'";

    if (!values.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = 'Invalid email format';

    if (!values.password) newErrors.password = 'Password is required';
    else if (values.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    localStorage.setItem(FORM_KEY, JSON.stringify(updatedData));
    setErrors(validate(updatedData)); // real-time validation
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      console.log('Form submitted:', formData);
      alert(SUCCESS_MESSAGE);
      const emptyForm = { username: '', email: '', password: '' };
      setFormData(emptyForm);
      localStorage.removeItem(FORM_KEY);
      setIsSubmitted(false);
    }
  }, [errors, formData, isSubmitted]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md sm:p-8 sm:rounded-xl sm:shadow-lg transition-all duration-300"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Register
        </h2>

        {/* Username */}
        <div className="mb-4">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className={`w-full px-4 py-2 border rounded focus:outline-none
              transition-all duration-200
              ${errors.username ? 'border-red-500 focus:ring-red-400 ring-1' : 'border-gray-300 focus:ring-blue-400 ring-1'}`}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full px-4 py-2 border rounded focus:outline-none
              transition-all duration-200
              ${errors.email ? 'border-red-500 focus:ring-red-400 ring-1' : 'border-gray-300 focus:ring-blue-400 ring-1'}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={`w-full px-4 py-2 border rounded focus:outline-none
              transition-all duration-200
              ${errors.password ? 'border-red-500 focus:ring-red-400 ring-1' : 'border-gray-300 focus:ring-blue-400 ring-1'}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-600"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded
                     transition-all duration-200 transform hover:scale-[1.02]"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
