import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.html';

// 1. Asegúrate de importar BrowserRouter
import { BrowserRouter } from 'react-router-dom'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. ENVUELVE tu App con BrowserRouter y AÑADE la propiedad basename */}
    {/* El valor del basename DEBE ser el nombre exacto de tu repositorio */}
    <BrowserRouter basename="/proyectolentesVR">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
