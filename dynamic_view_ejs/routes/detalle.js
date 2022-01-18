const express = require('express');

const menuController = require('../controllers/menuController');

let router = express.Router();

router.get('/detalle', menuController.detalle);

module.exports = router;