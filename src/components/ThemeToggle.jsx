import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const theme = useTheme();

  return (
    <button
      onClick={theme.toggleTheme}
      className={`
        group relative p-3 rounded-full transition-all duration-300
        ${theme.classes.surface} ${theme.classes.border} border-2
        ${theme.classes.hover} hover:scale-110 hover:rotate-12
        backdrop-blur-xl shadow-lg ${theme.classes.glow}
        ${className}
      `}
      aria-label={theme.isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {/* Ícono del sol (modo claro) */}
      <Sun 
        className={`
          w-5 h-5 absolute inset-3 transition-all duration-500 transform
          ${theme.isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}
          ${theme.isDark ? 'text-yellow-400' : 'text-orange-500'}
        `} 
      />
      
      {/* Ícono de la luna (modo oscuro) */}
      <Moon 
        className={`
          w-5 h-5 absolute inset-3 transition-all duration-500 transform
          ${theme.isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}
          ${theme.classes.text}
        `} 
      />
      
      {/* Efecto de brillo al hacer hover */}
      <div className={`
        absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 pointer-events-none
        ${theme.isDark 
          ? 'bg-gradient-to-r from-green-400/20 to-blue-400/20' 
          : 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20'
        }
      `} />
      
      {/* Indicador de estado */}
      <div className={`
        absolute -top-1 -right-1 w-3 h-3 rounded-full transition-all duration-300
        ${theme.isDark ? 'bg-green-400' : 'bg-orange-400'}
        group-hover:scale-125
      `} />
    </button>
  );
};

export default ThemeToggle;