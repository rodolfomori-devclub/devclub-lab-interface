// src/components/home/AssistantsSection.jsx
import React, { useEffect, useRef } from 'react';
import AssistantCard from './AssistantCard';

const AssistantsSection = () => {
  const sectionRef = useRef(null);
  
  // Efeito para animação de entrada dos cards
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    const cards = document.querySelectorAll('.assistant-card');
    cards.forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);
  
  // Informações das assistentes
  const assistants = [
    {
      id: 'giovanna',
      name: 'Giovanna',
      role: 'Aprenda tudo sobre código e tire dúvidas',
      color: '#007bff',
      destination: 'https://chat.devclub.com.br'
    },
    {
      id: 'fernanda',
      name: 'Fernanda',
      role: 'Melhore seu LinkedIn e treine para entrevistas',
      color: '#6E3DF6',
      destination: 'https://carreira.devclub.com.br'
    },
    {
      id: 'isa',
      name: 'Isa',
      role: 'Crie um cronograma de estudos personalizado',
      color: '#FF5757',
      destination: '#'
    }
  ];

  return (
    <section id="assistants" ref={sectionRef} className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary dark:text-white transition-colors duration-300 inline-block relative">
            Nossas Assistentes
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Ferramentas de IA especializadas para impulsionar sua carreira em desenvolvimento
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {assistants.map((assistant, index) => (
            <div 
              key={assistant.id}
              className="assistant-card opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <AssistantCard 
                name={assistant.name}
                role={assistant.role}
                color={assistant.color}
                destination={assistant.destination}
                image={`/src/assets/images/${assistant.id.toLowerCase()}.png`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CSS para animações dos cards
const styles = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;

// Adiciona o CSS ao componente
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default AssistantsSection;