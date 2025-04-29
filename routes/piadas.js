const express = require('express')
const { Piada } = require('../models/piadas')
const PiadaController = require('../controllers/piadas')
const route = express.Router()


route.get('/', PiadaController.buscarTodos)
route.get('/:id',PiadaController.buscarPiadaPorId)
route.post('/',PiadaController.criarPiada)

module.exports = route
