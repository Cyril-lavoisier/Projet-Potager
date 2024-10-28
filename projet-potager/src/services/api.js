import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.26:3000/api',
});

export const getApports = () => {
    return api.get('/apports');
};

export const getApportsProduits = () => {
    return api.get('/apportsProduits');
};

export const getConsommables = () => {
    return api.get('/consommables');
};

export const getJardins = () => {
    return api.get('/jardins');
};

export const getOutillages = () => {
    return api.get('/outillages');
};

export const getParcelles = () => {
    return api.get('/parcelles');
};

export const getPlantation = () => {
    return api.get('/plantation');
};

export const getProduits = () => {
    return api.get('/produits');
};

export const getQuincaillerie = () => {
    return api.get('/quincaillerie');
};

export const getSemences = () => {
    return api.get('/semences');
};

export const getSemis = () => {
    return api.get('/semis');
};

export const getSoins = () => {
    return api.get('/soins');
};

export const getSoinsProduits = () => {
    return api.get('/soinsProduits');
};

export const getUtilisateurs = () => {
    return api.get('/utilisateurs');
};

export const getVariete = () => {
    return api.get('/variete');
};