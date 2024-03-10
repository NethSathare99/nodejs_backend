const express = require('express');
const router = express.Router();
const customerModel = require('../models/Customer');
const customerController = require('../controllers/customerController');

router.post("/", customerController.authenticate);
router.get("/", customerController.getAll);
router.post("/", customerController.forgotPassword);
router.post("/", customerController.resetPassword);

module.exports = router;