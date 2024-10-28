const db = require('../../backend/db');

exports.getSoins = (req, res) => {
  const query = 'SELECT * FROM soins';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des soins:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};