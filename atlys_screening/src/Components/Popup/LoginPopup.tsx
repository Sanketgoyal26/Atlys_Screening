import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { ILogin } from './index.types';

const LoginPopup = ({ switchToRegister, onLoginSuccess }: ILogin) => {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    setError('');

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Find user by email or username
    const user = existingUsers.find((user: any) => user.email === input || user.username === input);

    if (!user) {
      setError('No user found');
    } else if (user.password !== password) {
      setError('Invalid credentials');
    } else {
      localStorage.setItem('loggedInUserEmail', user.email);
      // Notify the parent component about successful login
      if (onLoginSuccess) onLoginSuccess();
      // Redirect to home if login is successful
      navigate('/home');
    }
  };

  return (
    <div className="bg-customGray p-6 rounded-lg w-full sm:w-[463px] sm:mx-auto border-2 border-inputBorderColor min-w-[300px] max-w-[90vw]">
      <div className="text-center mb-8">
        <h2 className="text-sm font-medium text-textGrey">WELCOME BACK</h2>
        <p className="text-white font-semibold text-lg">Log into your account</p>
      </div>
      <form className="space-y-4" onSubmit={handleLogin}>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <p className='text-labelText font-medium text-sm'>Email or Username</p>
        <input
          type="text"
          placeholder="Enter your email or username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 !mt-2 border border-inputBorderColor rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-customGray text-white placeholder-textGrey"
        />
        <div className='flex justify-between'>
          <p className='text-labelText font-medium text-sm'>Password</p>
          <a href='/forgot'><p className='text-labelText font-medium text-sm'>Forgot password?</p></a>
        </div>
        <div className="relative w-full !mt-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
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
          Login now
        </button>
      </form>
      <div className="mt-4">
        <p className="text-gray-600 font-medium text-sm">
          Not registered yet? <a className="text-registerText cursor-pointer" onClick={switchToRegister}>Register →</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;
