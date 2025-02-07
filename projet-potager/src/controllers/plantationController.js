import { PlantationModel } from '../models/PlantationModel.js';

export const PlantationController = {
  getAllPlantations: async () => {
    try {
      return await PlantationModel.getAll();
    } catch (error) {
      console.error('Error fetching plantations:', error);
      throw error;
    }
  },

  addPlantation: async (data) => {
    try {
      return await PlantationModel.create(data);
    } catch (error) {
      console.error('Error adding plantation:', error);
      throw error;
    }
  },

  updatePlantation: async (data) => {
    try {
      return await PlantationModel.update(data);
    } catch (error) {
      console.error('Error adding plantation:', error);
      throw error;
    }
  },

  deletePlantation: async (data) => {
    try {
      return await PlantationModel.delete(data);
    } catch (error) {
      console.error('Error adding plantation:', error);
      throw error;
    }
  },
};