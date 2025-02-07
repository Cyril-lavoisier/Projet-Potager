import api from '../services/api.js';

export const PlantationModel = {
  getAll: async () => {
    const response = await api.get('/plantation');
    return response.data;
  },

  create: async (data) => {
    const response = await api.post('/plantation', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/plantation/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    await api.delete(`/plantation/${id}`);
  },
};