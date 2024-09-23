import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4 h-[60%] w-[30%]">
      <i className={`fas fa-${icon} text-3xl text-blue-500`}></i>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
