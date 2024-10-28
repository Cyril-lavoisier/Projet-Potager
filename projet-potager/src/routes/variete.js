const express = require('express');
const router = express.Router();
const varieteController = require('../controllers/varieteController');

router.get('/', varieteController.getVariete);

module.exports = router;