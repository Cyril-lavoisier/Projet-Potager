const db = require('../../backend/db');

exports.getSemis = (req, res) => {
  const query = 'SELECT * FROM semis';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des semis:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};