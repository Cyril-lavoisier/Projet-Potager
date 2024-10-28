const express = require('express');
const router = express.Router();
const soinsController = require('../controllers/soinsController');

router.get('/', soinsController.getSoins);

module.exports = router;