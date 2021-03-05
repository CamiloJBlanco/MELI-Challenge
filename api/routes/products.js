var express = require('express');
var router = express.Router();
var productsController = require('../components/products');

router.get('/api/items', productsController.getProducts);
router.get('/api/items/:id', productsController.getProductDetail);

module.exports = router;