import React from 'react';

export default function Modal({ setError, text }) {
  const hideModal = (event) => {
    event.stopPropagation();
    setError(false);
  };

  return (
    <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-96 h-96 bg-gray-900 bg-opacity-90 rounded-md shadow-lg">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-center">
        <div className="flex items-center justify-center mb-4">
          <img src="https://100dayscss.com/codepen/alert.png" width="44" height="38" alt="message" />
          <span className="text-lg font-bold ml-2">Ох халепа!</span>
        </div>
        <p className="text-base">{text}</p>
        <div className="mt-6">
          <button
            className="button"
            onClick={hideModal}
          >
            Зрозуміло
          </button>
        </div>
      </div>
    </div>
  );
}
