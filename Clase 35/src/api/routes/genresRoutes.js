const express = require('express');
const router = express.Router();
const genresAPIController = require('../controllers/genresController');

router.get('/api/genres', genresAPIController.list);
router.get('/api/genres/:id', genresAPIController.detail);

module.exports = router;