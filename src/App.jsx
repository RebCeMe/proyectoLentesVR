import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './styles/general.css';
import './styles/navbar.css';
import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import SobreNosotros from './components/SobreNosotros';
import Respuesta from './components/Respuesta';
import PaginaNo from './components/PaginaNo';
import Herramientas from './components/Herramientas';

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
    - Tus compañeros son 6to Informatica de la escuela ITFA, encargados de realizar unos lentes VR y un juego que se pueda ver en ellos, el proyecto "Visores 3D", hecho por la comision 2, es un juego visual donde el techo se cae y te muestra un universo, en cambio el proyecto "Lentes VR", hecho por la comision 1, usa un joistyk para moverse en las alcantarillas y escapar de un mountro.
    
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
