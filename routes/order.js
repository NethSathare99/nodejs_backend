const express = require('express');
const router = express.Router();
const orderModel = require('../models/Order');
const orderController = require('../controllers/orderController');

router.post("/", orderController.createUpdate);
router.get("/", orderController.getAllOrders);
router.get('/', orderController.getOrder);
router.delete('/', orderController.deleteOrder);

module.exports = router;