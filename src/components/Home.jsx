import React, { useState, useEffect } from 'react';
import { Code, Terminal, Cpu, Zap, Github, Linkedin, Mail, ArrowDown, Globe } from 'lucide-react';
import Presentacion from './Presentacion';
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  setIsVisible(true);
  
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);

  const skills = ['React', 'Node.js', 'Python', 'TypeScript', 'Next.js', 'MongoDB'];

  return (
    <>
      <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
  <div 
    className="absolute inset-0 transition-all duration-1000 ease-out" 
    style={{
      backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.15) 0%, transparent 50%)`
    }} 
  />
  <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-800/10" />
  
  {/* Grid con animación CSS pura */}
  <div className="absolute inset-0 opacity-30">
    <div 
      className="w-full h-full"
      style={{
        backgroundImage: `
          linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        animation: 'gridPulse 4s ease-in-out infinite'
      }}
    />
  </div>
</div>


       {/* Floating particles - Optimized */}
<div className="absolute inset-0 pointer-events-none">
  {[...Array(15)].map((_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-green-400 rounded-full opacity-40"
      style={{
        left: `${20 + Math.random() * 60}%`,
        top: `${20 + Math.random() * 60}%`,
        animation: `float ${3 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`
      }}
    />
  ))}
</div>

        <div className="relative z-10 container mx-auto px-6 py-12 min-h-screen flex items-center">
          <div className="w-full max-w-4xl mx-auto">
            {/* Main card */}
            <div className={`
              backdrop-blur-xl bg-black/30 border border-green-500/30 rounded-3xl p-8 md:p-12
              shadow-2xl shadow-green-500/10 relative overflow-hidden
              transition-all duration-1000 transform
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}>
              
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl" />
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/20 via-transparent to-green-500/20 opacity-50 animate-pulse" />

              <div className="relative z-10">
                {/* Header section */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                    <Terminal className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-mono">available for work</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
                    Mariano Torres Mari
                  </h1>
                  
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <Code className="w-6 h-6 text-green-400" />
                    <h2 className="text-xl md:text-2xl text-green-300 font-mono">
                      Full Stack Developer
                    </h2>
                    <Cpu className="w-6 h-6 text-green-400" />
                  </div>
                </div>

                {/* Description */}
                <div className="text-center mb-12">
                  <p className="text-lg md:text-xl text-green-200/80 max-w-3xl mx-auto leading-relaxed font-light">
                    Construyendo el futuro una línea de código a la vez. Especializado en crear 
                    experiencias digitales innovadoras con tecnologías de vanguardia.
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-12">
                  <h3 className="text-center text-green-300 mb-6 font-mono text-lg flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    Tech Stack
                    <Zap className="w-5 h-5" />
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill, index) => (
                      <div
                        key={skill}
                        className={`
                          px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full
                          font-mono text-green-300 hover:bg-green-500/20 transition-all duration-300
                          hover:scale-105 hover:shadow-lg hover:shadow-green-500/20
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
                  <button className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-black font-semibold rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/30">
                    <span>Ver Proyectos</span>
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                  </button>
                  
                  <button className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-green-500/50 text-green-400 font-semibold rounded-full hover:bg-green-500/10 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
                    <Mail className="w-4 h-4" />
                    <span>Contactar</span>
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6">
                  {[
                    { icon: Github, href: '#', label: 'GitHub' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Globe, href: '#', label: 'Website' }
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="group p-3 bg-green-500/10 border border-green-500/30 rounded-full hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-500/30 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-500/30 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-500/30 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-500/30 rounded-br-lg" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-green-400/60 text-xs font-mono">scroll</span>
        </div>
      </div>

      {/* Presentacion Section */}
      <Presentacion />
    </>
  )
}

export default Home