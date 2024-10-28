const express = require('express');
const router = express.Router();
const produitsController = require('../controllers/produitsController');

router.get('/', produitsController.getProduits);

module.exports = router;