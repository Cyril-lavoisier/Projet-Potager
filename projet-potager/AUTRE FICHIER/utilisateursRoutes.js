const express = require('express');
const router = express.Router();
const utilisateursController = require('../controllers/utilisateursControllers');

//Route de récupération des données
router.get('/:id', utilisateursController.getAllUtilisateurs); //Passage de l'id dans l'URL de la requête
//router.put('/nom', utilisateursController.updateNom);
//router.put('/prenom', utilisateursController.updatePrenom);
//router.put('/age', utilisateursController.updateAge);
//router.put('/pays', utilisateursController.updatePays);
//router.put('/ville', utilisateursController.updateVille);
//router.put('/code_postal', utilisateursController.updateCodePostal);

module.exports = router;