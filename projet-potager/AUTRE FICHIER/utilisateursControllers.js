const UtilisateursModel = require('../models/UtilisateursModel');

exports.getAllUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await UtilisateursModel.getAll();
    res.json(utilisateurs);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
};

/*
exports.createPlantations = async (req, res) => {
  try {
    const plantations = await PlantationModel.create();
    res.json(plantations);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des plantations' });
  }
};

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