import ProduitsModel from '../models/ProduitsModel.js';

export const getAllConsommables = async (req, res) => {
  try {
    const consommables = await ProduitsModel.getAll();
    res.json(consommables);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des consommables' });
  }
};

export const createConsommables = async (req, res) => {
  try {
    const consommables = await ProduitsModel.create();
    res.json(consommables);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création des consommables' });
  }
};

export const updateConsommables = async (req, res) => {
  try {
    const consommables = await ProduitsModel.update();
    res.json(consommables);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour des consommables' });
  }
};

export const deleteConsommables = async (req, res) => {
  try {
    const consommables = await ProduitsModel.delete();
    res.json(consommables);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression des consommables' });
  }
};