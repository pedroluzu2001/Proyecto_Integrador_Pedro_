import React from 'react';
import './ProductCard.css'; // Asegúrate de crear el archivo de estilos

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Disponibilidad:</strong> {product.availableDates.join(', ')}</p>
      <button>Ver detalles</button>
    </div>
  );
};

export default ProductCard;
