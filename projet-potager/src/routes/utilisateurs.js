const express = require('express');
const router = express.Router();
const utilisateursController = require('../controllers/utilisateursController');

//Route de récupération des données
router.get('/', utilisateursController.getUtilisateurs);
router.put('/', utilisateursController.updateUtilisateursNom);
router.put('/', utilisateursController.updateUtilisateursPrenom);
router.put('/', utilisateursController.updateUtilisateursAge);
router.put('/', utilisateursController.updateUtilisateursInscription);
router.put('/', utilisateursController.updateUtilisateursPays);
router.put('/', utilisateursController.updateUtilisateursVille);
router.put('/', utilisateursController.updateUtilisateursCodePostal);

module.exports = router;