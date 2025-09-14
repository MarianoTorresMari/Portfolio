import React, { useState, useEffect } from 'react';
import { Terminal, Code2, Zap } from 'lucide-react';
import { useTheme } from './ThemeContext';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Inicializando...');
  const [isVisible, setIsVisible] = useState(true);
  const themeContext = useTheme();
  
  // Fallback si el tema no está disponible
  const theme = themeContext || {
    isDark: true,
    classes: {
      bg: 'bg-black',
      surface: 'bg-black/30',
      border: 'border-green-500/30',
      text: 'text-green-400',
      textSecondary: 'text-green-300',
      textMuted: 'text-green-400/60',
      hover: 'hover:bg-green-500/10',
      glow: 'shadow-green-500/10'
    },
    colors: {
      gradient: 'from-green-400 via-green-300 to-green-500'
    }
  };

  const loadingSteps = [
    { progress: 20, text: 'Cargando componentes...' },
    { progress: 40, text: 'Configurando tema...' },
    { progress: 60, text: 'Preparando animaciones...' },
    { progress: 80, text: 'Optimizando rendimiento...' },
    { progress: 100, text: '¡Listo para la experiencia!' }
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setProgress(loadingSteps[currentStep].progress);
        setLoadingText(loadingSteps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 500);
        }, 800);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className={`fixed inset-0 z-50 ${theme.classes.bg} transition-opacity duration-500 opacity-0 pointer-events-none`} />
    );
  }

  return (
    <div className={`fixed inset-0 z-50 ${theme.classes.bg} flex items-center justify-center`}>
      {/* Background animado */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 transition-all duration-1000"
          style={{
            backgroundImage: theme.isDark 
              ? `radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)`
              : `radial-gradient(circle at 50% 50%, rgba(21, 128, 61, 0.15) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${theme.isDark ? 'bg-green-400' : 'bg-green-700'} opacity-40`}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animation: `float ${2 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo/Ícono principal */}
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 ${theme.classes.surface} ${theme.classes.border} border-2`}>
          <Terminal className={`w-10 h-10 ${theme.classes.text} animate-pulse`} />
        </div>

        {/* Nombre */}
        <h1 className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>
          Mariano Torres Mari
        </h1>
        
        <div className={`flex items-center justify-center gap-2 mb-8 ${theme.classes.textMuted}`}>
          <Code2 className="w-4 h-4" />
          <span className="font-mono text-sm">Full Stack Developer</span>
          <Zap className="w-4 h-4" />
        </div>

        {/* Barra de progreso */}
        <div className="mb-6">
          <div className={`w-full h-2 ${theme.isDark ? 'bg-green-500/20' : 'bg-green-200'} rounded-full overflow-hidden`}>
            <div 
              className={`h-full bg-gradient-to-r ${theme.colors.gradient} transition-all duration-300 ease-out`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className={`text-right mt-2 text-sm font-mono ${theme.classes.text}`}>
            {progress}%
          </div>
        </div>

        {/* Texto de carga */}
        <p className={`${theme.classes.textSecondary} font-mono text-sm animate-pulse`}>
          {loadingText}
        </p>

        {/* Indicadores de puntos */}
        <div className="flex justify-center gap-1 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${theme.isDark ? 'bg-green-400' : 'bg-green-600'}`}
              style={{
                animation: `bounce 1.5s ease-in-out infinite ${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;