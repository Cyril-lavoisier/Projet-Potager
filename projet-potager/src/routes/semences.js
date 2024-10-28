const express = require('express');
const router = express.Router();
const semencesController = require('../controllers/semencesController');

router.get('/', semencesController.getSemences);

module.exports = router;