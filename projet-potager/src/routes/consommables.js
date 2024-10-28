const express = require('express');
const router = express.Router();
const consommablesController = require('../controllers/consommablesController');

router.get('/', consommablesController.getConsommables);

module.exports = router;