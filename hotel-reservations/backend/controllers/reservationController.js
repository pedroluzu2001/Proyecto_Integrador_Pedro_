const Reservation = require('../models/Reservation');

// Crear una nueva reserva
const createReservation = async (req, res) => {
  try {
    const { userId, productId, date } = req.body;
    const newReservation = new Reservation({ userId, productId, date });
    await newReservation.save();
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la reserva.' });
  }
};

// Obtener reservas de un usuario
const getUserReservations = async (req, res) => {
  try {
    const { userId } = req.params;
    const reservations = await Reservation.find({ userId });
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las reservas.' });
  }
};

module.exports = {
  createReservation,
  getUserReservations,
};
