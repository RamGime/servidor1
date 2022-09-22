const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');


// tiene dos parametros el primero es la ruta por donde va entrar y el segundo la funcion que va ejecutar
router.get('/', controller.index);

module.exports = router;

   