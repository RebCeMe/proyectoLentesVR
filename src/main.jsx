import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* *** CAMBIO CLAVE: Agrega el basename *** */}
    <BrowserRouter basename="/proyectolentesVR">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

