import React from 'react';
import './App.css';


function App() {

  const products = [
    {
      name: 'Quita Grasa',
      description: 'Líquido quita grasa',
      image: `${process.env.PUBLIC_URL}/quita_grasa.png`,
    },
    {
      name: 'Suavizante',
      description: 'Suavizante para ropa',
      image: `${process.env.PUBLIC_URL}/suavisante.png`,
    },
    {
      name: 'Limpia Cristal',
      description: 'Líquido para superficies de cristal',
      image: `${process.env.PUBLIC_URL}/limpia_cristal.png`,
    },
  ];

  return (

    
    <div className="container">
      {/* Imagen en lugar del título */}
      {/* Carrito de compras en la parte superior izquierda */}
      <div className="cart-icon">
        <img src={`${process.env.PUBLIC_URL}/carrito.png`} alt="Carrito de Compras" />
      </div>

      <header>
        <img src={`${process.env.PUBLIC_URL}/abc.png`} alt="Logo" className="logo" />
      </header>
   
 {/* Sección de Imágenes Laterales */}
 <div className="side-images">
        <div className="side-image">
          <img src={`${process.env.PUBLIC_URL}/p1.png`} alt="Imagen P1" />
          <p>Imagen P1</p>
        </div>
        <div className="side-image">
          <img src={`${process.env.PUBLIC_URL}/p2.png`} alt="Imagen P2" />
          <p>Imagen P2</p>
        </div>
      </div>

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

        {/* Botón para acceder al catálogo general */}
        <button className="catalog-button">Acceder al catálogo general</button>
      </div>
        {/* Renderización de productos en la parte inferior */}
        <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>



  );
}

export default App;