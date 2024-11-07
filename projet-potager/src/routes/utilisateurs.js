const express = require('express');
const router = express.Router();
const utilisateursController = require('../controllers/utilisateursController');

//Route de récupération des données
router.get('/', utilisateursController.getUtilisateurs);
router.put('/nom', utilisateursController.updateDataNom);
router.put('/prenom', utilisateursController.updateDataPrenom);
router.put('/age', utilisateursController.updateDataAge);
router.put('/pays', utilisateursController.updateDataPays);
router.put('/ville', utilisateursController.updateDataVille);
router.put('/code_postal', utilisateursController.updateDataCodePostal);

module.exports = router;