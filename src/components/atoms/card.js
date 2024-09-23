import React from 'react';

const Card = ({ height, width, children }) => {
  return (
    <div
      className={`card bg-white rounded-md shadow-md fade-in p-5`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
