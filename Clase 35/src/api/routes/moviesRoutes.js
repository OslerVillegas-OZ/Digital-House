const express = require('express');
const router = express.Router();
const moviesAPIController = require('../controllers/moviesController');

router.post('/api/movies', moviesAPIController.create);
router.delete('/api/movies/:id', moviesAPIController.destroy);

module.exports = router;