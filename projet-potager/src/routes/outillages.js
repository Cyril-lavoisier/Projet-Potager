const express = require('express');
const router = express.Router();
const outillagesController = require('../controllers/outillagesController');

router.get('/', outillagesController.getOutillages);

module.exports = router;