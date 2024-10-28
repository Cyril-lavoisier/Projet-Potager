const db = require('../../backend/db');

exports.getApports = (req, res) => {
  const query = 'SELECT * FROM apports';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des apports:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};