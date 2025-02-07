const ConnexionsModel = require('../models/ConnexionsModel');

exports.connexionUtilisateur = async (req, res) => {
  try {
    const connexions = await ConnexionsModel.getAll();
    res.json(connexions);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des connexions' });
  }
};

exports.createUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await ConnexionsModel.create();
    res.json(utilisateurs);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des plantations' });
  }
};

/*
exports.updatePlantations = async (req, res) => {
  try {
    const plantations = await PlantationModel.update();
    res.json(plantations);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des plantations' });
  }
};

exports.deletePlantations = async (req, res) => {
  try {
    const plantations = await PlantationModel.delete();
    res.json(plantations);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des plantations' });
  }
};
*/