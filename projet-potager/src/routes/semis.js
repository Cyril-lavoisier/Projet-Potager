const express = require('express');
const router = express.Router();
const semisController = require('../controllers/semisController');

router.get('/', semisController.getSemis);
router.post('/', semisController.insertDataSemis);
router.put('/', semisController.updateDataSemis);
router.delete('/', semisController.deleteDataSemis);

module.exports = router;