const express = require('express');
const router = express.Router();
const plantationController = require('../controllers/plantationController');

router.get('/', plantationController.getPlantation);

module.exports = router;