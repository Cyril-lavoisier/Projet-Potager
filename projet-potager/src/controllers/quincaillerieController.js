const db = require('../../backend/db');

exports.getQuincaillerie = (req, res) => {
  const query = 'SELECT * FROM quincaillerie';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération de la quincaillerie:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};