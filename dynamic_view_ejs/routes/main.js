const express = require('express');

const mainController = require('../controllers/mainController');

const menuController = require('../controllers/menuController');

let router = express.Router();

router.get('/', mainController.index);

router.get('/detalle/:id/', menuController.detalle);

module.exports = router;