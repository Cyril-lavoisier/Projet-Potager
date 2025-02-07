import { ConnexionModel } from '../models/ConnexionModel.js';

export const PlantationController = {
  getAllConnexion: async () => {
    try {
      return await ConnexionModel.getAll();
    } catch (error) {
      console.error('Error fetching connexion:', error);
      throw error;
    }
  },

  addConnexion: async (data) => {
    try {
      return await ConnexionModel.create(data);
    } catch (error) {
      console.error('Error adding connexion:', error);
      throw error;
    }
  },

  updateConnexion: async (data) => {
    try {
      return await ConnexionModel.update(data);
    } catch (error) {
      console.error('Error adding connexion:', error);
      throw error;
    }
  },

  deleteConnexion: async (data) => {
    try {
      return await ConnexionModel.delete(data);
    } catch (error) {
      console.error('Error adding connexion:', error);
      throw error;
    }
  },
};