import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Título */}
      <header>ABCQUIM</header>

      {/* Menú de Logeo */}
      <div className="login-menu">
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button>Ingresar</button>
        <div className="create-user">Crear usuario</div>
      </div>

      {/* Sección de Búsqueda */}
      <div className="search-section">
        <input type="text" placeholder="Ingresa tu búsqueda..." />
        <button>Buscar</button>
      </div>
    </div>
  );
}

export default App;