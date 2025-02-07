const db = require('../backend/config/db');

const UtilisateursModel = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM utilisateurs';
      db.query(query, (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
    });
  },

  create: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM utilisateurs';
      db.query(query, (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
    });
  },

  update: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM utilisateurs';
      db.query(query, (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
    });
  },

  delete: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM utilisateurs';
      db.query(query, (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
    });
  },
};

module.exports = UtilisateursModel;