import React, { useState, useEffect } from 'react'
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Monitor, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Coffee,
  Heart,
  Flag,
  Lightbulb,
  Rocket,
  Star
} from 'lucide-react'
import { useTheme } from './ThemeContext'
import AdvancedParticles from './AdvancedParticles'

function Presentacion() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentSkill, setCurrentSkill] = useState(0)
  const theme = useTheme()

  const frontendSkills = [
    'React & Next.js',
    'TypeScript',
    'Tailwind CSS',
    'JavaScript ES6+',
    'HTML5 & CSS3',
    'Responsive Design'
  ]

  const personalStats = [
    { icon: Calendar, label: '19 años', value: 'Edad' },
    { icon: MapPin, label: 'Argentina', value: 'Ubicación' },
    { icon: Code2, label: 'Frontend', value: 'Especialidad' },
    { icon: Coffee, label: '2+ años', value: 'Experiencia' }
  ]

useEffect(() => {
  setIsVisible(true)
  
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const skillInterval = setInterval(() => {
    setCurrentSkill(prev => (prev + 1) % frontendSkills.length)
  }, 2000)

  window.addEventListener('mousemove', handleMouseMove)
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
    clearInterval(skillInterval)
  }
}, [frontendSkills.length])

  return (
    <div className={`min-h-screen ${theme.classes.bg} ${theme.classes.text} relative overflow-hidden py-20 transition-colors duration-500`}>
     
      {/* Advanced Particles Background */}
      <div className="absolute inset-0 opacity-20">
        <AdvancedParticles 
          count={35} 
          mouseInteraction={true} 
          connections={true} 
          speed={0.2} 
        />
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
        <div className={`absolute inset-0 ${theme.isDark ? 'bg-gradient-to-tr from-green-900/10 via-transparent to-green-700/10' : 'bg-gradient-to-tr from-green-200/10 via-transparent to-green-300/10'}`} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className={`
            text-center mb-16 transition-all duration-1000 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
          `}>
            <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 ${theme.isDark ? 'bg-green-500/10' : 'bg-green-100'} ${theme.classes.border} border rounded-full`}>
              <Sparkles className={`w-4 h-4 ${theme.classes.text} animate-pulse`} />
              <span className={`${theme.classes.text} text-sm font-mono`}>about.dev</span>
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>
              Sobre Mí
            </h1>
            
            <p className={`${theme.classes.textSecondary} opacity-90 text-lg md:text-xl max-w-2xl mx-auto`}>
              Desarrollador Frontend apasionado por crear experiencias digitales únicas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Main presentation card */}
            <div className={`
              backdrop-blur-xl ${theme.classes.surface} ${theme.classes.border} border rounded-3xl p-8
              shadow-2xl ${theme.classes.glow} relative overflow-hidden
              transition-all duration-1000 transform
              ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}
            `}>
              
              {/* Glowing border effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${theme.isDark ? 'from-green-500/10' : 'from-green-600/10'} to-transparent`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${theme.isDark ? 'bg-green-500/20' : 'bg-green-200'} rounded-full ${theme.classes.border} border`}>
                    <Heart className={`w-6 h-6 ${theme.classes.text}`} />
                  </div>
                  <h2 className={`text-2xl font-bold ${theme.classes.textSecondary}`}>Mi Historia</h2>
                </div>

                <div className={`space-y-4 ${theme.classes.textSecondary} opacity-95 leading-relaxed`}>
                  <p className="flex items-start gap-3">
                    <Flag className={`w-5 h-5 ${theme.classes.text} mt-0.5 flex-shrink-0`} />
                    <span>
                      Soy un desarrollador de <strong className={`${theme.classes.textSecondary} font-semibold`}>19 años</strong> nacido y criado en Argentina, 
                      con una pasión desbordante por la tecnología y el desarrollo web.
                    </span>
                  </p>

                  <p className="flex items-start gap-3">
                    <Lightbulb className={`w-5 h-5 ${theme.classes.text} mt-0.5 flex-shrink-0`} />
                    <span>
                      Me especializo en <strong className={`${theme.classes.textSecondary} font-semibold`}>Frontend Development</strong>, creando interfaces 
                      modernas, responsivas y con excelente experiencia de usuario. Mi enfoque está en convertir 
                      ideas creativas en código funcional.
                    </span>
                  </p>

                  <p className="flex items-start gap-3">
                    <Rocket className={`w-5 h-5 ${theme.classes.text} mt-0.5 flex-shrink-0`} />
                    <span>
                      Cada día es una oportunidad para aprender algo nuevo. Me encanta estar al día con las 
                      últimas tecnologías y tendencias del desarrollo web, siempre buscando mejorar mis habilidades 
                      y crear proyectos más innovadores.
                    </span>
                  </p>

                  <p className="flex items-start gap-3">
                    <Star className={`w-5 h-5 ${theme.classes.text} mt-0.5 flex-shrink-0`} />
                    <span>
                      Mi objetivo es contribuir al mundo digital con soluciones creativas que realmente 
                      marquen la diferencia, combinando diseño atractivo con funcionalidad robusta.
                    </span>
                  </p>
                </div>

                {/* Current focus */}
                <div className={`mt-8 p-4 ${theme.isDark ? 'bg-green-500/5' : 'bg-green-100/50'} ${theme.classes.border} border rounded-xl`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 ${theme.isDark ? 'bg-green-400' : 'bg-green-600'} rounded-full animate-pulse`} />
                    <span className={`${theme.classes.textSecondary} font-mono text-sm`}>Actualmente enfocado en:</span>
                  </div>
                  <p className={`${theme.classes.text} font-semibold text-lg animate-pulse`}>
                    {frontendSkills[currentSkill]}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills and stats section */}
            <div className="space-y-8">
              
              {/* Personal stats */}
              <div className={`
                backdrop-blur-xl ${theme.classes.surface} ${theme.classes.border} border rounded-3xl p-6
                shadow-2xl ${theme.classes.glow} relative overflow-hidden
                transition-all duration-1000 transform delay-300
                ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}
              `}>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-bl ${theme.isDark ? 'from-green-500/10' : 'from-green-600/10'} to-transparent`} />
                
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold ${theme.classes.textSecondary} mb-4 flex items-center gap-2`}>
                    <Monitor className="w-5 h-5" />
                    Quick Stats
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {personalStats.map(({ icon: Icon, label, value }, index) => (
                      <div 
                        key={label}
                        className={`p-4 ${theme.isDark ? 'bg-green-500/5' : 'bg-green-100/50'} ${theme.classes.border} border rounded-xl ${theme.classes.hover} transition-all duration-300 group`}
                      >
                        <Icon className={`w-6 h-6 ${theme.classes.text} mb-2 group-hover:scale-110 transition-transform duration-300`} />
                        <p className={`${theme.classes.textSecondary} text-sm opacity-80`}>{value}</p>
                        <p className={`${theme.classes.textSecondary} font-semibold`}>{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Frontend specialization */}
              <div className={`
                backdrop-blur-xl ${theme.classes.surface} ${theme.classes.border} border rounded-3xl p-6
                shadow-2xl ${theme.classes.glow} relative overflow-hidden
                transition-all duration-1000 transform delay-500
                ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}
              `}>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-tr ${theme.isDark ? 'from-green-500/10' : 'from-green-600/10'} to-transparent`} />
                
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold ${theme.classes.textSecondary} mb-4 flex items-center gap-2`}>
                    <Palette className="w-5 h-5" />
                    Frontend Focus
                  </h3>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <Smartphone className={`w-8 h-8 ${theme.classes.text}`} />
                    <div className={`flex-1 h-2 ${theme.isDark ? 'bg-green-500/20' : 'bg-green-200'} rounded-full overflow-hidden`}>
                      <div className={`h-full bg-gradient-to-r ${theme.colors.gradient} rounded-full animate-pulse`} style={{width: '95%'}} />
                    </div>
                    <span className={`${theme.classes.textSecondary} font-mono text-sm`}>95%</span>
                  </div>
                  
                  <p className={`${theme.classes.textSecondary} opacity-90 text-sm leading-relaxed`}>
                    Especializado en crear interfaces responsivas que se adapten perfectamente a cualquier dispositivo, 
                    desde móviles hasta pantallas de escritorio.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {frontendSkills.slice(0, 4).map((skill, index) => (
                      <span 
                        key={skill}
                        className={`px-3 py-1 ${theme.isDark ? 'bg-green-500/10' : 'bg-green-100'} ${theme.classes.border} border rounded-full text-xs ${theme.classes.textSecondary} font-mono`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <a
              href="https://wa.me/5492617590562?text=Hola%21%20Me%20interesa%20hablar%20contigo%20sobre%20un%20proyecto%20de%20desarrollo%20web.%20Vi%20tu%20portfolio%20y%20me%20gusta%20tu%20trabajo.%20%C2%BFPodr%C3%ADamos%20coordinar%20una%20reuni%C3%B3n%20para%20discutir%20los%20detalles%3F"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${theme.isDark ? 'from-green-500/20 to-green-400/20' : 'from-green-200 to-green-300'} ${theme.classes.border} border rounded-full ${theme.classes.hover} hover:shadow-lg ${theme.classes.glow} transition-all duration-300 group`}
            >
              <Coffee className={`w-5 h-5 ${theme.classes.text} group-hover:scale-110 transition-transform duration-300`} />
              <span className={`${theme.classes.textSecondary} font-mono group-hover:scale-105 transition-transform duration-300`}>¿Hablamos de tu próximo proyecto?</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Presentacion