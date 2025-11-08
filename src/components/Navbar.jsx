import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li onClick={() => navigate('/')}>Inicio</li>
        <li onClick={() => navigate('/sobreNosotros')}>Información</li>
        <li onClick={() => navigate('/herramientas')}>Herramientas</li>
        <li onClick={() => navigate('/respuesta')}>¿Dudas?</li>
      </ul>
    </nav>
  );
};

export default Navbar;
