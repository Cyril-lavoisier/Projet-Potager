const express = require('express');
const {
  getAllConsommables,
  createConsommables,
  updateConsommables,
  deleteConsommables,
} = require('../controllers/consommablesControllers.js');

const router = express.Router();

router.get('/', getAllConsommables);
router.post('/', createConsommables);
router.put('/', updateConsommables);
router.delete('/', deleteConsommables);

module.exports = router;