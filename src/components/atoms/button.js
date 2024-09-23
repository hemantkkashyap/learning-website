"use client";

import React, { useState } from "react";

const Button = ({ buttons }) => {
  const [visibleTextId, setVisibleTextId] = useState(null);

  const handleButtonClick = (id) => {
    setVisibleTextId(visibleTextId === id ? null : id);
  };

  return (
    <>
      {buttons.map((button) => (
        <div key={button.id} style={{ marginBottom: "10px" }}>
          <button
            onClick={() => handleButtonClick(button.id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {button.label}
          </button>
          {visibleTextId === button.id && (
            <p className="mt-4 text-gray-900">{button.description}</p>
          )}
        </div>
      ))}
    </>
  );
};

export default Button;
