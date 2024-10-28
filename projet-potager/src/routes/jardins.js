const express = require('express');
const router = express.Router();
const jardinsController = require('../controllers/jardinsController');

router.get('/', jardinsController.getJardins);

module.exports = router;