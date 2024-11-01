const express = require('express');
const router = express.Router();
const plantationController = require('../controllers/plantationController');

router.get('/', plantationController.getPlantation);
router.post('/', plantationController.insertDataPlantation);
router.put('/', plantationController.updateDataPlantation);
router.delete('/', plantationController.deleteDataPlantation);

module.exports = router;