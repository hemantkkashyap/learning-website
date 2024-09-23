import React from 'react';

const HeroSection = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className="bg-blue-500 text-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6">{subtitle}</p>
      <button
        className="px-4 py-2 bg-white text-blue-500 rounded-full hover:bg-gray-200"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default HeroSection;
