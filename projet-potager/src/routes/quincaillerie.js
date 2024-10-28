const express = require('express');
const router = express.Router();
const quincaillerieController = require('../controllers/quincaillerieController');

router.get('/', quincaillerieController.getQuincaillerie);

module.exports = router;