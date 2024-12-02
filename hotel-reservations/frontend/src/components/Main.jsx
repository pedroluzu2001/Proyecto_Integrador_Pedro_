import React, { useState } from 'react';
import './Main.css'; // Aquí puedes añadir los estilos para tu componente

const Main = () => {
  const [search, setSearch] = useState('');

  return (
    <main className="main">
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar productos"
        />
      </div>
      <div className="categories">
        <h2>Categorías</h2>
        <ul>
          <li>Habitaciones</li>
          <li>Alojamientos</li>
          <li>Ofertas</li>
        </ul>
      </div>
      <div className="recommendations">
        <h2>Recomendaciones</h2>
        <div className="product-cards">
          {/* Aquí irían las tarjetas de productos */}
        </div>
      </div>
    </main>
  );
};

export default Main;
