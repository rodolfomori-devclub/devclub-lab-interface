// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AssistantsSection from '../components/home/AssistantsSection';

const Home = () => {
  return (
    <main className="bg-background-light dark:bg-background-dark transition-colors duration-300">
      <HeroSection />
      <AssistantsSection />
      
      {/* Seção de Funcionalidades/Benefícios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary dark:text-white transition-colors duration-300">
              Como podemos ajudar?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Nossas assistentes estão prontas para impulsionar sua jornada em programação
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cartão de Funcionalidade 1 */}
            <div className="bg-white dark:bg-secondary-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary dark:text-white transition-colors duration-300">Tire dúvidas de código</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Resolva problemas técnicos, aprenda conceitos de programação e receba explicações detalhadas sobre código.
              </p>
            </div>
            
            {/* Cartão de Funcionalidade 2 */}
            <div className="bg-white dark:bg-secondary-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary dark:text-white transition-colors duration-300">Prepare-se para o mercado</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Otimize seu perfil do LinkedIn, prepare-se para entrevistas técnicas e melhore seu posicionamento profissional.
              </p>
            </div>
            
            {/* Cartão de Funcionalidade 3 */}
            <div className="bg-white dark:bg-secondary-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary dark:text-white transition-colors duration-300">Organize seus estudos</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Crie um cronograma personalizado, acompanhe seu progresso e otimize seu aprendizado em programação.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/5 dark:to-secondary transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary dark:text-white transition-colors duration-300">
              Pronto para acelerar sua carreira em programação?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 transition-colors duration-300">
              Escolha uma de nossas assistentes virtuais e comece sua jornada rumo ao próximo nível.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://chat.devclub.com.br"
                className="px-8 py-4 bg-primary text-white font-medium rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-neon"
              >
                Começar com a Giovanna
              </a>
              <a
                href="https://carreira.devclub.com.br"
                className="px-8 py-4 bg-white dark:bg-secondary-light text-secondary dark:text-white border-2 border-primary font-medium rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-neon"
              >
                Começar com a Fernanda
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;