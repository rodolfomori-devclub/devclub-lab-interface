// src/components/home/AssistantCard.jsx
import React, { useState } from 'react';

const AssistantCard = ({ name, role, image, color, destination }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Gerar um gradiente baseado na cor fornecida
  const generateGradient = (baseColor) => {
    return `linear-gradient(135deg, ${baseColor} 0%, ${baseColor}AA 100%)`;
  };

  return (
    <a
      href={destination}
      className="relative group overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered ? generateGradient(color) : 'transparent',
        borderWidth: '2px',
        borderColor: color,
      }}
    >
      <div className="p-8 h-full flex flex-col justify-between relative z-10">
        {/* Efeito de partículas em hover */}
        <div className={`absolute inset-0 z-0 transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-0'}`}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="absolute w-3 h-3 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                transform: `scale(${Math.random() * 0.6 + 0.4})`,
                animation: `float ${Math.random() * 5 + 3}s ease-in-out infinite ${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10">
          <div className="mb-6 flex items-center">
            <div
              className={`w-60 h-96 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                isHovered ? 'border-white shadow-neon' : 'border-primary'
              }`}
              style={{ borderColor: isHovered ? 'white' : color }}
            >
              <img
                src={image || `https://api.dicebear.com/7.x/micah/svg?seed=${name}&backgroundColor=${color.replace('#', '')}`}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 
              className={`ml-4 text-2xl font-bold transition-colors duration-300 ${
                isHovered ? 'text-white' : 'text-secondary dark:text-white'
              }`}
            >
              {name}
            </h3>
          </div>
          
          <p 
            className={`text-lg transition-colors duration-300 ${
              isHovered ? 'text-white' : 'text-gray-600 dark:text-gray-300'
            }`}
          >
            {role}
          </p>
        </div>

        {/* Botão/seta */}
        <div className="mt-8 flex justify-end">
          <span 
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              isHovered 
                ? 'bg-white text-secondary transform translate-x-0' 
                : 'bg-gray-100 dark:bg-secondary-light text-secondary dark:text-white transform -translate-x-4 opacity-0'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Efeito de brilho em hover */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle at 50% 0%, ${color}50 0%, transparent 50%)`,
        }}
      />
    </a>
  );
};

export default AssistantCard;