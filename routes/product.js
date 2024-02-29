const express = require('express');
const router = express.Router();
const productModel = require('../models/product');
const productController = require('../controllers/productController');

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/random", productController.getRandomProducts);

module.exports = router;
