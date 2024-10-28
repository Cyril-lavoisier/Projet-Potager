const express = require('express');
const router = express.Router();
const soinsProduitsController = require('../controllers/soinsProduitsController');

router.get('/', soinsProduitsController.getSoinsProduits);

module.exports = router;