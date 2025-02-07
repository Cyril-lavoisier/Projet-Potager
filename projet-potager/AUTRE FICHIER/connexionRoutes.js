const express = require('express');
const router = express.Router();
const connexionsController = require('../controllers/connexionsControllers');

router.post('/', connexionsController.connexionUtilisateur);

module.exports = router;