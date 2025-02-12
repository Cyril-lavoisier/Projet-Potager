const VarieteModel = require('../models/VarieteModel.js');

const getAllConsommables = async (req, res) => {
  try {
    const consommables = await VarieteModel.getAll();
    res.json(consommables);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des consommables' });
  }
};

const createConsommables = async (req, res) => {
  try {
    const consommables = await VarieteModel.create();
    res.json(consommables);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création des consommables' });
  }
};

const updateConsommables = async (req, res) => {
  try {
    const consommables = await VarieteModel.update();
    res.json(consommables);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour des consommables' });
  }
};

const deleteConsommables = async (req, res) => {
  try {
    const consommables = await VarieteModel.delete();
    res.json(consommables);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression des consommables' });
  }
};

module.exports = {
  getAllConsommables,
  createConsommables,
  updateConsommables,
  deleteConsommables,
};
