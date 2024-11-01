const db = require('../../backend/db');

exports.getVariete = (req, res) => {
  const query = 'SELECT * FROM variete';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des variete:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};