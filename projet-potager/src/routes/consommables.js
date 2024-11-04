const express = require('express');
const router = express.Router();
const consommablesController = require('../controllers/consommablesController');

router.get('/', consommablesController.getConsommables);
router.post('/', consommablesController.insertDataConsommables);
router.put('/', consommablesController.updateDataConsommables);
router.delete('/', consommablesController.deleteDataConsommables);

module.exports = router;