const express = require('express');
const router = express.Router();
const AutorController = require('../controllers/autorController');

router.post('/autores', AutorController.crearAutor);
router.get('/autores', AutorController.obtenerAutores);

module.exports = router;