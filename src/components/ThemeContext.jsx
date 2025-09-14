import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Valor inicial simple
  const [isInitialized, setIsInitialized] = useState(false);

  // Cargar tema guardado después del montaje
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) {
        setIsDark(JSON.parse(saved));
      }
    } catch (error) {
      console.warn('Error loading theme from localStorage:', error);
    }
    setIsInitialized(true);
  }, []);

  // Guardar tema cuando cambie
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem('theme', JSON.stringify(isDark));
      } catch (error) {
        console.warn('Error saving theme to localStorage:', error);
      }
    }
  }, [isDark, isInitialized]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // Configuración del tema
  const themeConfig = {
    isDark,
    toggleTheme,
    colors: isDark ? {
      // Modo oscuro (actual)
      primary: 'rgb(34, 197, 94)', // green-500
      primaryLight: 'rgb(74, 222, 128)', // green-400
      primaryDark: 'rgb(21, 128, 61)', // green-700
      background: 'rgb(0, 0, 0)', // black
      surface: 'rgb(0, 0, 0, 0.3)', // black/30
      border: 'rgb(34, 197, 94, 0.3)', // green-500/30
      text: 'rgb(34, 197, 94)', // green-400
      textSecondary: 'rgb(74, 222, 128, 0.8)', // green-400/80
      textMuted: 'rgb(34, 197, 94, 0.6)', // green-400/60
      gradient: 'from-green-400 via-green-300 to-green-500'
    } : {
      // Modo claro
      primary: 'rgb(21, 128, 61)', // green-700
      primaryLight: 'rgb(34, 197, 94)', // green-500
      primaryDark: 'rgb(20, 83, 45)', // green-800
      background: 'rgb(248, 250, 252)', // slate-50
      surface: 'rgb(255, 255, 255, 0.8)', // white/80
      border: 'rgb(21, 128, 61, 0.3)', // green-700/30
      text: 'rgb(21, 128, 61)', // green-700
      textSecondary: 'rgb(34, 197, 94)', // green-500
      textMuted: 'rgb(21, 128, 61, 0.7)', // green-700/70
      gradient: 'from-green-700 via-green-600 to-green-500'
    },
    classes: isDark ? {
      // Clases modo oscuro
      bg: 'bg-black',
      surface: 'bg-black/30',
      border: 'border-green-500/30',
      text: 'text-green-400',
      textSecondary: 'text-green-300',
      textMuted: 'text-green-400/60',
      hover: 'hover:bg-green-500/10',
      glow: 'shadow-green-500/10'
    } : {
      // Clases modo claro
      bg: 'bg-slate-50',
      surface: 'bg-white/80',
      border: 'border-green-700/30',
      text: 'text-green-700',
      textSecondary: 'text-green-600',
      textMuted: 'text-green-700/70',
      hover: 'hover:bg-green-100',
      glow: 'shadow-green-700/20'
    }
  };

  return (
    <ThemeContext.Provider value={themeConfig}>
      {children}
    </ThemeContext.Provider>
  );
};