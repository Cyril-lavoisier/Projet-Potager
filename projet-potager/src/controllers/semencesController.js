const db = require('../../backend/db');

exports.getSemences = (req, res) => {
  const query = 'SELECT * FROM semences';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des semences:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};