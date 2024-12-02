const express = require('express');
const { createReservation, getUserReservations } = require('../controllers/reservationController');

const router = express.Router();

router.post('/', createReservation); // Ruta para crear una reserva
router.get('/:userId', getUserReservations); // Ruta para obtener reservas de un usuario

module.exports = router;
