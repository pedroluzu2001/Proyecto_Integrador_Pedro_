import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReservationPage.css'; // Estilos opcionales

const ReservationPage = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [reservationStatus, setReservationStatus] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error al obtener los detalles del producto', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleReserve = async () => {
    try {
      const response = await axios.post('/api/reservations', {
        productId,
        date: selectedDate,
      });
      setReservationStatus('Reserva realizada con éxito.');
    } catch (error) {
      setReservationStatus('Hubo un error al realizar la reserva.');
    }
  };

  return (
    <div className="reservation-page">
      {product ? (
        <>
          <h2>Detalles de la Reserva</h2>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>Disponibilidad:</strong> {product.availableDates.join(', ')}</p>
          <input
            type="date"
            onChange={(e) => setSelectedDate(e.target.value)}
            value={selectedDate}
          />
          <button onClick={handleReserve}>Reservar</button>
          {reservationStatus && <p>{reservationStatus}</p>}
        </>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ReservationPage;
