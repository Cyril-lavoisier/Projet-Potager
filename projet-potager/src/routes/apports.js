const express = require('express');
const router = express.Router();
const apportsController = require('../controllers/apportsController');

router.get('/', apportsController.getApports);

module.exports = router;