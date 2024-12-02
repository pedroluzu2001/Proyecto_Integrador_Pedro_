const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProducts); // Ruta para obtener todos los productos
router.post('/', createProduct); // Ruta para crear un nuevo producto

module.exports = router;
