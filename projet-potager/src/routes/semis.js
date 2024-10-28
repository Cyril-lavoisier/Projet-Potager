const express = require('express');
const router = express.Router();
const semisController = require('../controllers/semisController');

router.get('/', semisController.getSemis);

module.exports = router;