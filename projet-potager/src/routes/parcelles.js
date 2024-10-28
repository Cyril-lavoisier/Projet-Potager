const express = require('express');
const router = express.Router();
const parcellesController = require('../controllers/parcellesController');

router.get('/', parcellesController.getParcelles);

module.exports = router;