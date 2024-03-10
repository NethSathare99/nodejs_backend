const express = require('express');
const router = express.Router();
const adminModel = require('../models/Admin');
const adminController = require('../controllers/adminController');

router.post("/", adminController.authenticate);
router.get("/", adminController.getAll);

module.exports = router;