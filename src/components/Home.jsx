import React, { useState, useEffect } from 'react';
import { Code, Terminal, Cpu, Zap, Github, Linkedin, Mail, ArrowDown, Globe, Instagram } from 'lucide-react';
import Presentacion from './Presentacion';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeContext';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const theme = useTheme();

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = ['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB'];

  return (
    <>
      <div className={`min-h-screen ${theme.classes.bg} ${theme.classes.text} relative overflow-hidden transition-colors duration-500`}>
        
        {/* Theme Toggle - Fixed position */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>

        {/* Simple particles background */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 ${theme.isDark ? 'bg-green-400' : 'bg-green-600'} rounded-full opacity-40`}
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animation: `float ${2 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Animated background - Optimized */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 transition-all duration-1000 ease-out" 
            style={{
              backgroundImage: theme.isDark
                ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.15) 0%, transparent 50%)`
                : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(21, 128, 61, 0.15) 0%, transparent 50%)`
            }} 
          />
          <div className={`absolute inset-0 ${theme.isDark ? 'bg-gradient-to-br from-green-900/10 via-transparent to-green-800/10' : 'bg-gradient-to-br from-green-200/20 via-transparent to-green-300/10'}`} />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-12 min-h-screen flex items-center">
          <div className="w-full max-w-4xl mx-auto">
            {/* Main card */}
            <div className={`
              backdrop-blur-xl ${theme.classes.surface} ${theme.classes.border} border-2 rounded-3xl p-8 md:p-12
              shadow-2xl ${theme.classes.glow} relative overflow-hidden
              transition-all duration-1000 transform
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}>
              
              {/* Glass effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${theme.isDark ? 'from-green-500/5' : 'from-green-600/5'} to-transparent rounded-3xl`} />
              
              {/* Animated border glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${theme.isDark ? 'from-green-500/20 via-transparent to-green-500/20' : 'from-green-600/20 via-transparent to-green-600/20'} opacity-50 animate-pulse`} />

              <div className="relative z-10">
                {/* Header section */}
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 ${theme.isDark ? 'bg-green-500/10' : 'bg-green-100'} ${theme.classes.border} border rounded-full`}>
                    <Terminal className={`w-4 h-4 ${theme.classes.text}`} />
                    <span className={`${theme.classes.text} text-sm font-mono`}>available for work</span>
                    <div className={`w-2 h-2 ${theme.isDark ? 'bg-green-400' : 'bg-green-600'} rounded-full animate-pulse`} />
                  </div>

                  <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>
                    Mariano Torres Mari
                  </h1>
                  
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <Code className={`w-6 h-6 ${theme.classes.text}`} />
                    <h2 className={`text-xl md:text-2xl ${theme.classes.textSecondary} font-mono`}>
                      Full Stack Developer
                    </h2>
                    <Cpu className={`w-6 h-6 ${theme.classes.text}`} />
                  </div>
                </div>

                {/* Description */}
                <div className="text-center mb-12">
                  <p className={`text-lg md:text-xl ${theme.classes.textSecondary} opacity-90 max-w-3xl mx-auto leading-relaxed font-light`}>
                    Construyendo el futuro una línea de código a la vez. Especializado en crear 
                    experiencias digitales innovadoras con tecnologías de vanguardia.
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-12">
                  <h3 className={`text-center ${theme.classes.textSecondary} mb-6 font-mono text-lg flex items-center justify-center gap-2`}>
                    <Zap className="w-5 h-5" />
                    Tech Stack
                    <Zap className="w-5 h-5" />
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill, index) => (
                      <div
                        key={skill}
                        className={`
                          px-4 py-2 ${theme.isDark ? 'bg-green-500/10' : 'bg-green-100'} ${theme.classes.border} border rounded-full
                          font-mono ${theme.classes.textSecondary} ${theme.classes.hover} transition-all duration-300
                          hover:scale-105 hover:shadow-lg ${theme.classes.glow}
                          transform transition-all duration-500
                          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                        `}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                 <a 
                     href="https://github.com/MarianoTorresMari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${theme.colors.gradient} ${theme.isDark ? 'text-black' : 'text-white'} font-semibold rounded-full hover:scale-105 transition-all duration-300 transform hover:shadow-xl ${theme.classes.glow}`}>
                    <span>Ver Proyectos</span>
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                   </a>
                  
                 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=marianomisael06@gmail.com&su=Consulta%20desde%20portfolio" target="_blank"  rel="noopener noreferrer" className={`flex items-center gap-2 px-8 py-4 bg-transparent border-2 ${theme.classes.border} ${theme.classes.text} font-semibold rounded-full ${theme.classes.hover} hover:scale-105 transition-all duration-300 transform`}>
                  <Mail className="w-4 h-4" />
                   <span>Contactar</span>
                </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6">
                  {[
                    { icon: Instagram, href: "https://www.instagram.com/mariano_t.m/", label: 'Instagram'},
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/marianotorresmari/', label: 'LinkedIn' },
                    { icon: Globe, href: 'https://marianotorresmari.netlify.app/', label: 'Website' }
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target='_blank'
                      rel="noopener noreferrer"
                      className={`group p-3 ${theme.isDark ? 'bg-green-500/10' : 'bg-green-100'} ${theme.classes.border} border rounded-full ${theme.classes.hover} transition-all duration-300 transform hover:scale-110 hover:rotate-12`}
                      aria-label={label}
                    >
                      <Icon className={`w-5 h-5 ${theme.classes.text} group-hover:scale-110 transition-transform duration-300`} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Corner decorations */}
              <div className={`absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 ${theme.classes.border} rounded-tl-lg`} />
              <div className={`absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 ${theme.classes.border} rounded-tr-lg`} />
              <div className={`absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 ${theme.classes.border} rounded-bl-lg`} />
              <div className={`absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 ${theme.classes.border} rounded-br-lg`} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className={`w-6 h-10 border-2 ${theme.classes.border} rounded-full flex justify-center`}>
            <div className={`w-1 h-3 ${theme.isDark ? 'bg-green-400' : 'bg-green-600'} rounded-full mt-2 animate-pulse`} />
          </div>
          <span className={`${theme.classes.textMuted} text-xs font-mono`}>scroll</span>
        </div>
      </div>

      {/* Presentacion Section */}
      <Presentacion />
    </>
  )
}

export default Home