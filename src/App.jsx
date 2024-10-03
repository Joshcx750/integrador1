import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Convertidor de XML a PDF</h1>
      <div className="button-container">
        <button className="upload-button">Cargar archivo</button>
        <button className="download-button">Descargar archivo</button>
      </div>
    </div>
  );
}

export default App;