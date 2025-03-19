// src/components/home/HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const canvasRef = useRef(null);

  // Efeito de partículas animadas no background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Configura o canvas para ter o tamanho da viewport
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Configurações das partículas
    const particlesArray = [];
    const numberOfParticles = Math.min(window.innerWidth / 10, 100);
    
    // Cores baseadas no tema
    const particleColor = isDarkMode ? '#37E35930' : '#37E35940';
    const connectingLineColor = isDarkMode ? '#37E35915' : '#37E35925';
    
    // Classe de partícula
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }
      
      // Atualiza posição
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Rebote nas bordas
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      // Desenha partícula
      draw() {
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Inicializa partículas
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    // Conecta partículas próximas com linhas
    const connect = () => {
      const maxDistance = canvas.width / 10;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.strokeStyle = connectingLineColor;
            ctx.lineWidth = 1 - distance / maxDistance;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Loop de animação
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas de partículas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0" 
      />
      
      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="flex flex-col items-center text-center">
          {/* Logo grande animado */}
          <div className="w-32 h-32 md:w-48 md:h-48 mb-8 animate-float">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full filter drop-shadow-lg" 
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
          
          {/* Título com efeito de texto */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-secondary dark:text-white transition-colors duration-300 animate-slide-up">
            DevClub <span className="text-primary">Lab</span>
          </h1>
          
          {/* Subtítulo com animação de entrada */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 transition-colors duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Explore nossas assistentes virtuais para acelerar sua jornada como desenvolvedor
          </p>
          
          {/* CTA Button com efeito de brilho */}
          <a
            href="#assistants"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-neon animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Conheça nossas assistentes
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 animate-pulse-slow"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Shapes decorativos flutuantes */}
      <div className="absolute hidden md:block left-10 top-1/4 w-24 h-24 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute hidden md:block right-10 top-1/3 w-36 h-36 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute hidden md:block left-1/4 bottom-1/4 w-28 h-28 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default HeroSection;