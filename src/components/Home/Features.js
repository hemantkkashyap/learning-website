import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const featureList = [
    { icon: 'book', title: 'Comprehensive Courses', description: 'Learn C++, Java, and more with structured modules.' },
    { icon: 'file-alt', title: 'Quizzes & Challenges', description: 'Test your knowledge with quizzes and coding challenges.' },
    { icon: 'code', title: 'Code Editor', description: 'Solve coding questions directly within our built-in code editor.' },
  ];

  return (
    <div className="p-10 bg-gray-100 h-screen">
      <h2 className="text-3xl text-center font-bold mb-6">Features</h2>
      <div className="flex flex-wrap gap-6 h-full justify-center items-center">
        {featureList.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
