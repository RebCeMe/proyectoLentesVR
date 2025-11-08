/* Home.jsx */
import React, { useState, useEffect } from 'react';
import {
  Glasses,
  Gamepad2,
  Brain,
  Heart,
  Sparkles,
  Cpu,
  Zap,
  Headphones,
} from 'lucide-react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'El futuro de la tecnología está en tus manos';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const applications = [
    {
      icon: Gamepad2,
      title: 'Gaming & Entretenimiento',
      description:
        'Experiencias inmersivas que te transportan a mundos virtuales donde puedes jugar, explorar y vivir aventuras imposibles en la realidad.',
      examples: 'Beat Saber, Half-Life: Alyx, VRChat',
    },
    {
      icon: Brain,
      title: 'Educación & Capacitación',
      description:
        'Simulaciones realistas que permiten aprender y practicar habilidades en entornos seguros, desde cirugía hasta pilotaje de aviones.',
      examples: 'Laboratorios virtuales, entrenamiento médico',
    },
    {
      icon: Heart,
      title: 'Salud & Terapia',
      description:
        'Tratamientos innovadores para fobias, PTSD, rehabilitación física y gestión del dolor mediante entornos controlados y terapéuticos.',
      examples: 'Terapia de exposición, fisioterapia VR',
    },
  ];

  const components = [
    {
      icon: Glasses,
      title: 'Visor (HMD)',
      description:
        'Dispositivo montado en la cabeza que proyecta imágenes estereoscópicas para crear la ilusión de profundidad y presencia en el mundo virtual.',
    },
    {
      icon: Cpu,
      title: 'Sensores & Tracking',
      description:
        'Sistemas de seguimiento que detectan la posición y movimiento del usuario en tiempo real, permitiendo interacciones naturales.',
    },
    {
      icon: Headphones,
      title: 'Audio Espacial',
      description:
        'Sonido 3D posicional que refuerza la inmersión al simular cómo escuchamos en el mundo real desde diferentes direcciones.',
    },
  ];

  return (
    <div className="page-container fade-in">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="badge mb-6">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          ITFA
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          ¿Qué es la Realidad Virtual?
        </h1>

        <div className="h-12 mb-8">
          <p
            className="text-xl md:text-2xl text-slate-300"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            {typedText}
            <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse"></span>
          </p>
        </div>
      </div>

      {/* Definición Principal */}
      <div
        className="card max-w-4xl mx-auto mb-16"
        style={{ borderLeft: '4px solid #06b6d4' }}
      >
        <div className="flex items-start gap-4">
          <Glasses className="w-12 h-12 text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl mb-4">Definición</h2>
            <p className="text-lg leading-relaxed">
              La{' '}
              <strong className="text-cyan-400">Realidad Virtual (VR)</strong>{' '}
              es una tecnología que utiliza dispositivos informáticos para crear
              un entorno simulado tridimensional. A diferencia de las interfaces
              tradicionales, la VR coloca al usuario dentro de una experiencia,
              permitiendo interactuar con mundos 3D en lugar de simplemente
              observar una pantalla.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Mediante el uso de visores especializados (HMD - Head Mounted
              Display), controladores de movimiento y sensores de seguimiento,
              la VR engaña al cerebro haciéndole creer que está en otro lugar,
              creando una sensación de
              <strong className="text-cyan-400">
                {' '}
                presencia e inmersión
              </strong>{' '}
              sin precedentes.
            </p>
          </div>
        </div>
      </div>

      {/* Componentes Principales */}
      <div className="mb-16">
        <h2 className="text-center text-3xl mb-4">
          Componentes Esenciales de la VR
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-3xl mx-auto">
          Los elementos tecnológicos que hacen posible la experiencia inmersiva
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {components.map((component, index) => {
            const Icon = component.icon;
            return (
              <div
                key={index}
                className="card text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative inline-block mb-4">
                  <Icon className="w-16 h-16 text-cyan-400 mx-auto" />
                  <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-20"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">{component.title}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {component.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Aplicaciones */}
      <div className="mb-16">
        <h2 className="text-center text-3xl mb-4">Aplicaciones Principales</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div
                key={index}
                className="card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <Icon className="w-10 h-10 text-purple-400" />
                    <div className="absolute inset-0 bg-purple-400 blur-xl opacity-20"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-3">
                  {app.description}
                </p>
                <div className="pt-3 border-t border-cyan-500/20">
                  <span className="text-sm text-slate-400">Ejemplos: </span>
                  <code className="text-sm">{app.examples}</code>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Por qué es revolucionaria */}
      <div
        className="card max-w-4xl mx-auto mb-16"
        style={{
          background:
            'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
          borderColor: 'rgba(6, 182, 212, 0.4)',
        }}
      >
        <h2 className="text-2xl mb-6 text-center">
          ¿Por qué es Revolucionaria?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg mb-3">🚀 Innovación Tecnológica</h3>
            <ul className="space-y-2">
              <li>Experiencias totalmente inmersivas</li>
              <li>Interacción natural e intuitiva</li>
              <li>Presencia en cualquier lugar del mundo</li>
              <li>Simulación de escenarios imposibles</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-3">💡 Impacto Social</h3>
            <ul className="space-y-2">
              <li>Democratización del acceso a experiencias</li>
              <li>Nuevas formas de comunicación</li>
              <li>Educación</li>
              <li>Terapias innovadoras y accesibles</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tipos de VR */}
      <div
        className="card max-w-4xl mx-auto"
        style={{ borderLeft: '4px solid #22d3ee' }}
      >
        <h2 className="text-2xl mb-6">🎮 Tipos de Realidad Virtual</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg mb-3 text-cyan-400">VR No Inmersiva</h3>
            <p className="text-sm text-slate-300 mb-2">
              Experiencias 3D en pantallas convencionales, como videojuegos o
              simuladores de escritorio.
            </p>
            <code className="text-xs">Nivel de inmersión: Bajo</code>
          </div>
          <div>
            <h3 className="text-lg mb-3 text-purple-400">VR Semi-Inmersiva</h3>
            <p className="text-sm text-slate-300 mb-2">
              Simuladores con pantallas grandes y controles físicos, como
              cabinas de vuelo.
            </p>
            <code className="text-xs">Nivel de inmersión: Medio</code>
          </div>
          <div>
            <h3 className="text-lg mb-3 text-pink-400">
              VR Totalmente Inmersiva
            </h3>
            <p className="text-sm text-slate-300 mb-2">
              Experiencia completa con HMD, audio espacial y seguimiento de
              movimiento.
            </p>
            <code className="text-xs">Nivel de inmersión: Total</code>
          </div>
        </div>
      </div>

      {/* Dispositivos Populares */}
      <div
        className="card max-w-4xl mx-auto mt-10"
        style={{ borderLeft: '4px solid #8b5cf6' }}
      >
        <h2 className="text-2xl mb-6">🥽 Dispositivos VR Populares</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg mb-3 text-cyan-400">VR Autónomos</h3>
            <ul className="space-y-2">
              <li>Meta Quest 3 / Pro</li>
              <li>Pico 4</li>
              <li>HTC Vive XR Elite</li>
            </ul>
            <p className="text-sm text-slate-400 mt-3">
              No requieren PC, procesamiento integrado
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-3 text-purple-400">VR con PC</h3>
            <ul className="space-y-2">
              <li>Valve Index</li>
              <li>HTC Vive Pro 2</li>
              <li>HP Reverb G2</li>
            </ul>
            <p className="text-sm text-slate-400 mt-3">
              Mayor potencia gráfica, experiencias más complejas
            </p>
          </div>
        </div>
      </div>

      {/* Dato Curioso */}
      <div className="alert alert-info max-w-4xl mx-auto mt-10">
        <p className="text-lg">
          💡 <strong>Dato curioso:</strong> El término "Realidad Virtual" fue
          acuñado por Jaron Lanier en 1987, pero los primeros conceptos de VR
          aparecieron en la década de 1950 con el "Sensorama" de Morton Heilig.
          En 2024, se estima que más de 171 millones de personas en el mundo
          usan dispositivos de VR regularmente.
        </p>
      </div>

      {/* El Futuro de la VR */}
      <div
        className="card max-w-4xl mx-auto mt-10"
        style={{
          background:
            'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
          borderColor: 'rgba(139, 92, 246, 0.4)',
        }}
      >
        <div className="flex items-start gap-4">
          <Sparkles className="w-12 h-12 text-purple-400 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl mb-4">El Futuro: Metaverso y más allá</h2>
            <p className="text-lg leading-relaxed mb-4">
              La VR está evolucionando hacia experiencias más sociales e
              interconectadas. El{' '}
              <strong className="text-purple-400">metaverso</strong> promete
              espacios virtuales persistentes donde las personas trabajen,
              socialicen y creen juntas.
            </p>
            <p className="text-lg leading-relaxed">
              Con avances en <strong className="text-cyan-400">haptics</strong>{' '}
              (sensaciones táctiles),{' '}
              <strong className="text-cyan-400">eye-tracking</strong> y
              <strong className="text-cyan-400"> IA</strong>, las experiencias
              VR serán cada vez más indistinguibles de la realidad física.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
