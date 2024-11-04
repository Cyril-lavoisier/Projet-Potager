const express = require('express');
const router = express.Router();
const outillagesController = require('../controllers/outillagesController');

router.get('/', outillagesController.getOutillages);
router.post('/', outillagesController.insertDataOutillages);
router.delete('/', outillagesController.deleteDataOutillages);

module.exports = router;