const productsController = require('../controllers/productsController');

router.get('/products', productsController.index);