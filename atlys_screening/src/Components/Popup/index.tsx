import React, { useState } from 'react';
import RegisterPopup from './RegistrationPopup';
import LoginPopup from './LoginPopup';
import { IPopup } from './index.types';

const TogglePopups = ({ closeModal, showCloseIcon = false, onLoginSuccess }: IPopup) => {
  const [isLogin, setIsLogin] = useState(true);

  const switchToLogin = () => {
    setIsLogin(true);
  };

  const switchToRegister = () => {
    setIsLogin(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative">
        {showCloseIcon ? <button
          className="absolute top-[14px] right-[14px] h-8 w-8 flex items-center justify-center bg-black text-white rounded-full text-lg"
          onClick={closeModal}
        >
          &times;
        </button> : null}
        {!isLogin ? (
          <RegisterPopup switchToLogin={switchToLogin} closeModal={closeModal} />
        ) : (
          <LoginPopup switchToRegister={switchToRegister} closeModal={closeModal} onLoginSuccess={onLoginSuccess} />
        )}
      </div>
    </div>
  );
};

export default TogglePopups;
