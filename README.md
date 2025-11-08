# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './styles/general.css';
import './styles/navbar.css';
import { useEffect, useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import SobreNosotros from './components/SobreNosotros';
import Respuesta from './components/Respuesta';

const navigate = useNavigate();

<Navbar onNavigate={(path) => navigate(path)} />;

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

function App() {
const [content, setContent] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [userQuestion, setUserQuestion] = useState('');

const handleAskQuestion = async (question) => {
setIsLoading(true);
setContent('');
setUserQuestion(question);

    const systemInstruction = `Eres un estudiante que sabe todo sobre realidad virtual y modelos 3D. Tu nombre es Marta.

PERSONALIDAD Y COMPORTAMIENTO:

- Eres un profesional exitoso, carismático y apasionado por tu trabajo
- Siempre mantienes una actitud positiva, motivadora y entusiasta
- Hablas con confianza y autoridad sobre temas de seguridad informática
- Eres empático pero nunca te muestras triste, deprimido o negativo
- Usas un lenguaje profesional pero accesible
- Te encanta educar a las personas sobre realidad virtual y modelos 3D

TONO Y ESTILO:

- Optimista y proactivo en todas tus respuestas
- Siempre encuentras el lado positivo de las situaciones
- Motivas a las personas a tomar acción sobre su seguridad digital
- Puedes ser serio cuando hablas de amenazas, pero siempre ofreces soluciones

CONOCIMIENTO:

- Experta en realidad virtual, hardware y modelos 3D
- Ofreces consejos prácticos y accionables
- Explicas conceptos técnicos de manera clara
- Tus compañeros son 6to Informatica, encargados de realizar unos lentes VR y un juego que se pueda ver en ellos, el proyecto "Visores 3D", hecho por la comision 2, es un juego visual donde el techo se cae y te muestra un universo, en cambio el proyecto "Lentes VR", hecho por la comision 1, usa un joistyk para moverse en las alcantarillas y escapar de un mountro.

IMPORTANTE: NUNCA te muestres triste, pesimista, deprimido o enojado. Siempre mantienes tu energía profesional y positiva.`;

    const object = {
      model: 'gemini-2.0-flash-exp',
      contents: question,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.8,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    };

    try {
      const response = await ai.models.generateContentStream(object);

      for await (const chunk of response) {
        setContent((prev) => prev + chunk.text);
      }
    } catch (error) {
      setContent(
        'Lo siento, hubo un error al procesar tu pregunta. Por favor, intenta nuevamente.'
      );
      console.error('Error al generar respuesta:', error);
    } finally {
      setIsLoading(false);
    }

};

return (
<>
<BrowserRouter>
<Navbar />
<Routes>
<Route
path="/"
element={<Home onAskQuestion={handleAskQuestion} />}
/>
<Route path="/sobreNosotros" element={<SobreNosotros />} />
<Route
path="/respuesta"
element={
<Respuesta
                content={content}
                isLoading={isLoading}
                userQuestion={userQuestion}
                onAskQuestion={handleAskQuestion}
              />
}
/>
<Route path="/herramientas" element={<Herramientas />} />
</Routes>
</BrowserRouter>
</>
);
}

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Headphones, Gamepad2, Brain, Zap, Globe } from 'lucide-react';

function Home({ onAskQuestion }) {
const navigate = useNavigate();

const handleExplore = () => {
navigate('/sobreNosotros');
};

return (
<div className="home-container">
{/_ Hero Section _/}
<section className="hero-section">
<div className="hero-content">
<div className="hero-badge">
<Zap size={16} />
<span>Innovación Digital</span>
</div>
<h1 className="hero-title">
Bienvenido al Mundo de la
<span className="gradient-text"> Realidad Virtual</span>
</h1>
<p className="hero-description">
Explora dimensiones infinitas donde la imaginación se convierte en
realidad. La VR está transformando la manera en que interactuamos
con el mundo digital.
</p>
<div className="hero-buttons">
<button className="btn-primary" onClick={handleExplore}>
<Eye size={20} />
Explorar Más
</button>
<button className="btn-secondary">
<Globe size={20} />
Ver Demo
</button>
</div>
</div>
<div className="hero-visual">
<div className="vr-headset-illustration">
<div className="headset-glow"></div>
<Eye size={80} className="vr-icon" />
</div>
</div>
</section>

      {/* ¿Qué es VR? Section */}
      <section className="info-section">
        <div className="section-header">
          <h2 className="section-title">¿Qué es la Realidad Virtual?</h2>
          <p className="section-subtitle">
            Una tecnología inmersiva que está revolucionando múltiples
            industrias
          </p>
        </div>

        <div className="info-content">
          <div className="info-text">
            <p className="info-paragraph">
              La <strong>Realidad Virtual (VR)</strong> es una tecnología que
              crea entornos simulados completamente inmersivos, donde los
              usuarios pueden interactuar con espacios tridimensionales
              generados por computadora como si fueran reales.
            </p>
            <p className="info-paragraph">
              Mediante el uso de dispositivos especializados como cascos VR,
              guantes hápticos y controladores de movimiento, la VR engaña a
              nuestros sentidos para hacernos creer que estamos en un lugar
              diferente, creando experiencias que van desde juegos inmersivos
              hasta simulaciones de entrenamiento profesional.
            </p>
            <p className="info-paragraph">
              Esta tecnología no es solo entretenimiento: está transformando la
              educación, la medicina, la arquitectura, el turismo y muchas otras
              áreas de nuestra vida cotidiana.
            </p>
          </div>
        </div>
      </section>

      {/* Características Section */}
      <section className="features-section">
        <h2 className="section-title">Características Principales</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Eye size={32} />
            </div>
            <h3 className="feature-title">Inmersión Total</h3>
            <p className="feature-description">
              Experimenta entornos 360° que te transportan a mundos
              completamente nuevos con visión estereoscópica de alta calidad.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Headphones size={32} />
            </div>
            <h3 className="feature-title">Audio Espacial</h3>
            <p className="feature-description">
              Sonido 3D que se adapta a tu posición, creando una experiencia
              auditiva realista que complementa la inmersión visual.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Gamepad2 size={32} />
            </div>
            <h3 className="feature-title">Interacción Natural</h3>
            <p className="feature-description">
              Controles intuitivos que permiten manipular objetos virtuales con
              gestos naturales y feedback háptico en tiempo real.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Brain size={32} />
            </div>
            <h3 className="feature-title">Aprendizaje Inmersivo</h3>
            <p className="feature-description">
              Simulaciones realistas para entrenamiento profesional, educación y
              desarrollo de habilidades en entornos seguros.
            </p>
          </div>
        </div>
      </section>

      {/* Aplicaciones Section */}
      <section className="applications-section">
        <h2 className="section-title">Aplicaciones de la VR</h2>
        <div className="applications-grid">
          <div className="application-item">
            <div className="application-number">01</div>
            <h3>Gaming & Entretenimiento</h3>
            <p>
              Videojuegos inmersivos, experiencias cinematográficas y mundos
              virtuales sociales.
            </p>
          </div>

          <div className="application-item">
            <div className="application-number">02</div>
            <h3>Educación</h3>
            <p>
              Viajes virtuales históricos, laboratorios científicos y
              simulaciones educativas.
            </p>
          </div>

          <div className="application-item">
            <div className="application-number">03</div>
            <h3>Medicina</h3>
            <p>
              Entrenamiento quirúrgico, terapia de exposición y rehabilitación
              física.
            </p>
          </div>

          <div className="application-item">
            <div className="application-number">04</div>
            <h3>Arquitectura & Diseño</h3>
            <p>
              Recorridos virtuales de edificios, visualización de proyectos y
              diseño 3D.
            </p>
          </div>

          <div className="application-item">
            <div className="application-number">05</div>
            <h3>Industria & Manufactura</h3>
            <p>
              Capacitación de operarios, mantenimiento preventivo y diseño de
              productos.
            </p>
          </div>

          <div className="application-item">
            <div className="application-number">06</div>
            <h3>Turismo Virtual</h3>
            <p>
              Exploración de destinos remotos, museos virtuales y experiencias
              culturales.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">¿Listo para Explorar?</h2>
          <p className="cta-description">
            Conoce más sobre nuestro equipo y las comisiones que trabajan en
            proyectos de VR
          </p>
          <button className="btn-cta" onClick={handleExplore}>
            Conocer al Equipo
          </button>
        </div>
      </section>
    </div>

);
}

export default Home;
