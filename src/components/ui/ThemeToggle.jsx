// src/components/ui/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-6 rounded-full bg-gray-200 dark:bg-secondary-dark p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={isDarkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      <span className="sr-only">{isDarkMode ? 'Tema Claro' : 'Tema Escuro'}</span>
      
      {/* Ícone do sol (tema claro) */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`absolute w-4 h-4 text-yellow-500 transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        style={{ left: '4px' }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>

      {/* Ícone da lua (tema escuro) */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`absolute w-4 h-4 text-blue-300 transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        style={{ left: '9px' }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>

      {/* Toggle Slider */}
      <span 
        className={`absolute block w-4 h-4 rounded-full bg-white shadow transform transition-transform duration-300 ${
          isDarkMode ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;