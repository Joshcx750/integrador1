/*import React from 'react';
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
      
      <div className="cart-icon">
        <img src={`${process.env.PUBLIC_URL}/carrito.png`} alt="Carrito de Compras" />
      </div>

      <header>
        <img src={`${process.env.PUBLIC_URL}/abc.png`} alt="Logo" className="logo" />
      </header>
   
 
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

      
      <div className="login-menu">
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button>Ingresar</button>
        <div className="create-user">Crear usuario</div>
      </div>

      <div className="search-section">
        <input type="text" placeholder="Ingresa tu búsqueda..." />
        <button>Buscar</button>

       
        <button className="catalog-button">Acceder al catálogo general</button>
      </div>

 
 <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>

      
      <footer className="footer">
        <h2>Valores</h2>
        <p>
          Nuestra empresa se rige por principios fundamentales como la integridad, el compromiso con la excelencia,
          la transparencia y la responsabilidad social. Creemos en un entorno de trabajo colaborativo donde el
          respeto y la innovación son pilares para el desarrollo y el éxito.
        </p>

        <h2>Visión</h2>
        <p>
          Ser líderes en nuestro sector, reconocidos por nuestra dedicación a la calidad y por la capacidad de
          ofrecer soluciones innovadoras que superen las expectativas de nuestros clientes.
        </p>

        <h2>Misión</h2>
        <p>
          Proporcionar servicios y productos de alta calidad, enfocados en la satisfacción del cliente, mientras
          fomentamos un impacto positivo en la comunidad y promovemos un desarrollo sostenible.
        </p>
      </footer>
      
    </div>



  );
}

export default App;
*/

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
      {/* Carrito de compras en la parte superior izquierda */}
      <div className="cart-icon">
        <img src={`${process.env.PUBLIC_URL}/carrito.png`} alt="Carrito de Compras" />
      </div>

      <header>
        <img src={`${process.env.PUBLIC_URL}/abc.png`} alt="Logo" className="logo" />
      </header>
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

      <div className="whatsapp-button">
  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
    <img src={`${process.env.PUBLIC_URL}/whatsapp-icon.png`} alt="WhatsApp" />
  </a>
</div>

<div className="contact-form">
  <input type="email" placeholder="Email" className="form-input" />
  <input type="tel" placeholder="Teléfono" className="form-input" />
  <textarea placeholder="Mensaje" className="form-input"></textarea>
</div>

      {/* Pie de página */}
      <footer className="footer">
        <h2>Valores</h2>
        <p>
          Nuestra empresa se rige por principios fundamentales como la integridad, el compromiso con la excelencia,
          la transparencia y la responsabilidad social. Creemos en un entorno de trabajo colaborativo donde el
          respeto y la innovación son pilares para el desarrollo y el éxito.
        </p>

        <h2>Visión</h2>
        <p>
          Ser líderes en nuestro sector, reconocidos por nuestra dedicación a la calidad y por la capacidad de
          ofrecer soluciones innovadoras que superen las expectativas de nuestros clientes.
        </p>

        <h2>Misión</h2>
        <p>
          Proporcionar servicios y productos de alta calidad, enfocados en la satisfacción del cliente, mientras
          fomentamos un impacto positivo en la comunidad y promovemos un desarrollo sostenible.
        </p>
      </footer>
    </div>
  );
}

export default App;