const express = require('express');
const router = express.Router();
const connexionController = require('../controllers/connexionController');

router.post('/', connexionController.loginUtilisateur);

module.exports = router;