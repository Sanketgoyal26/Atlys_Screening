import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { IRegister } from './index.types';

const RegisterPopup = ({ switchToLogin }: IRegister) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if username or email already exist
    const userExists = existingUsers.some((user: any) => user.email === email || user.username === username);

    if (userExists) {
      setError('User with this email or username already exists.');
    } else {
      const newUser = { email, username, password };
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      setSuccess('User registered successfully! Redirecting to login...');
      
      // Redirect to login after 5 seconds
      setTimeout(() => {
        switchToLogin();
      }, 2000);
    }
  };

  return (
    <div className="bg-customGray p-6 rounded-lg w-full sm:w-[463px] sm:mx-auto border-2 border-inputBorderColor min-w-[300px] max-w-[90vw]">
      <div className="text-center mb-8">
        <h2 className="text-sm font-medium text-textGrey">SIGN UP</h2>
        <p className="text-white font-semibold text-lg">Create an account to continue</p>
      </div>
      <form className="space-y-4" onSubmit={handleRegister}>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center">{success}</p>}
        <p className='text-labelText font-medium text-sm'>Email</p>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 !mt-2 border border-inputBorderColor rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-customGray text-white placeholder-textGrey"
        />
        <p className='text-labelText font-medium text-sm'>Username</p>
        <input
          type="text"
          placeholder="Choose a preferred username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 !mt-2 border border-inputBorderColor rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-customGray text-white placeholder-textGrey"
        />
        <p className='text-labelText font-medium text-sm'>Password</p>
        <div className="relative w-full !mt-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Choose a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-inputBorderColor rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-customGray text-white placeholder-textGrey"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="h-5 w-5 text-textGrey" />
          </button>
        </div>
        <button type="submit" className="w-full py-3 bg-blue-500 text-white font-medium text-base rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Continue
        </button>
      </form>
      <div className="mt-4">
        <p className="text-gray-600 font-medium text-sm">
          Already have an account? <a className="text-registerText cursor-pointer" onClick={switchToLogin}>Login →</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPopup;
