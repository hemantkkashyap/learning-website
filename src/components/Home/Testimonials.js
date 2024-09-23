import React from 'react';

const Testimonials = ({ testimonials }) => {
  return (
    <div className="p-10 bg-gray-200 h-screen">
      <h2 className="text-3xl text-center font-bold mb-6">What Our Students Say</h2>
      <div className="flex flex-wrap gap-6 h-full justify-center items-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md items-center space-x-4 h-[60%] w-[30%]">
            <p>"{testimonial.feedback}"</p>
            <h3 className="mt-4 font-bold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
