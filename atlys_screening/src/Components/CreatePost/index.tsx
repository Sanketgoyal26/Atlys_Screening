import React, { useState } from 'react';
import Popups from '../Popup';

const CreatePost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  return (
    <div>
      <div className="bg-customGray p-4 rounded-lg mb-4 border-2 border-inputBorderColor">
        <div className="flex items-start space-x-4">
          <div>
            <p className="text-base font-medium text-labelText">Create post</p>
          </div>
        </div>
        <div className="mt-4 p-4 text-registerText font-normal text-base rounded bg-customGraySecond">
          <div className="flex gap-x-3">
            <div className="bg-customGray rounded-full px-4 h-[48px] w-[48px] flex items-center justify-center">💬</div>
            <p>How are you feeling today?</p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="w-[111px] h-[43px] bg-blue-500 text-white font-medium text-base rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={openModal}
          >
            Post
          </button>
        </div>
      </div>
      {isModalOpen && <Popups showCloseIcon={true} closeModal={closeModal} onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
};

export default CreatePost;
