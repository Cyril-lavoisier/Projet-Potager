const express = require('express');
const router = express.Router();
const utilisateursController = require('../controllers/utilisateursController');

router.get('/', utilisateursController.getUtilisateurs);

module.exports = router;