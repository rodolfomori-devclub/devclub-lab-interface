// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-white dark:bg-secondary transition-colors duration-300 border-t border-gray-200 dark:border-secondary-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-2">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full" 
                  fill="#37E359" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Versão simplificada do logo */}
                  <rect x="13" y="14" width="24" height="24" />
                  <rect x="19" y="20" width="12" height="12" fill="#fff" />
                </svg>
              </div>
              <span className="text-xl font-bold text-secondary dark:text-white transition-colors duration-300">
                DevClub Lab
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              Ferramentas de IA para impulsionar sua carreira em desenvolvimento de software.
            </p>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary dark:text-white transition-colors duration-300">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chat.devclub.com.br" 
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
                >
                  Chat com Giovanna
                </a>
              </li>
              <li>
                <a 
                  href="https://carreira.devclub.com.br" 
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
                >
                  Carreira com Fernanda
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
                >
                  Cronograma com Isa
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary dark:text-white transition-colors duration-300">DevClub</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://devclub.com.br" 
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Site Oficial
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/devclubtech" 
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/devclub" 
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Direitos Autorais */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-secondary-light text-center">
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
            &copy; {currentYear} DevClub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;