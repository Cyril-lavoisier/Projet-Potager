const express = require('express');
const router = express.Router();
const apportsProduitsController = require('../controllers/apportsProduitsController');

router.get('/', apportsProduitsController.getApportsProduits);

module.exports = router;