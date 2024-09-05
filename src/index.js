import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';  // Importa los estilos
import App from './App.jsx';  // Importa el componente principal

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Inserta la app en el div con id="root"
);