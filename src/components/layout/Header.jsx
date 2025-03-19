// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { isDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detecta o scroll para adicionar background ao header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links de navegação
  const navLinks = [
    { name: 'Código', href: 'https://chat.devclub.com.br' },
    { name: 'Carreira', href: 'https://carreira.devclub.com.br' },
    { name: 'Cronograma de Estudos', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-secondary/90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <div className="w-12 h-12 relative animate-float">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full" 
              fill={isDarkMode ? '#37E359' : '#37E359'} 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Logo SVG do DevClub Lab baseado na imagem fornecida */}
              <rect x="13" y="14" width="24" height="24" />
              <rect x="19" y="20" width="12" height="12" fill={isDarkMode ? '#121212' : '#ffffff'} />
              <rect x="38" y="14" width="10" height="10" />
              <rect x="49" y="14" width="20" height="10" />
              <rect x="70" y="14" width="10" height="10" />
              <rect x="81" y="14" width="6" height="38" />
              <rect x="38" y="25" width="53" height="12" />
              <rect x="81" y="38" width="6" height="10" />
              
              <rect x="13" y="39" width="6" height="28" />
              <rect x="13" y="68" width="6" height="6" />
              <rect x="20" y="39" width="24" height="10" />
              <rect x="20" y="49" width="6" height="15" />
              <rect x="36" y="49" width="8" height="15" />
              
              <rect x="50" y="39" width="24" height="10" />
              <rect x="50" y="49" width="8" height="15" />
              <rect x="66" y="49" width="8" height="15" />
              <rect x="74" y="39" width="6" height="28" />
              
              <rect x="13" y="80" width="6" height="6" />
              <rect x="19" y="86" width="6" height="6" />
              <rect x="25" y="92" width="6" height="6" />
              
              <rect x="38" y="80" width="6" height="6" />
              <rect x="44" y="86" width="6" height="6" />
              <rect x="50" y="92" width="6" height="6" />
              
              <rect x="63" y="80" width="6" height="6" />
              <rect x="69" y="86" width="6" height="6" />
              <rect x="75" y="92" width="6" height="6" />
              
              <rect x="88" y="80" width="12" height="12" />
              <rect x="94" y="86" width="0" height="0" />
              <rect x="94" y="86" width="0" height="0" />
            </svg>
          </div>
          <span className="ml-2 text-xl font-bold text-secondary dark:text-white transition-colors duration-300">
            DevClub Lab
          </span>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-medium text-secondary dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300 py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Toggle de tema e Botão Mobile */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Botão de menu mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-secondary-light transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-secondary dark:text-white transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-secondary shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-secondary dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;