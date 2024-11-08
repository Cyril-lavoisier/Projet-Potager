const express = require('express');
const router = express.Router();
const jardinsController = require('../controllers/jardinsController');

router.get('/:id', jardinsController.getJardins);

module.exports = router;