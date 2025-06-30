// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // <--- ¡Asegúrate de que sea App.jsx!
import './input.css'; // Asegúrate de que esto siga ahí para los estilos

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* <--- SOLO DEBERÍA RENDERIZAR <App /> AQUÍ */}
  </React.StrictMode>,
);