const express = require('express');
const router = express.Router();
const parcellesController = require('../controllers/parcellesController');

router.get('/:id', parcellesController.getParcelles);
router.post('/', parcellesController.insertDataParcelles);

module.exports = router;