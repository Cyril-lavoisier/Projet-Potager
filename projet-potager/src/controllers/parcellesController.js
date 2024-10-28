const db = require('../../backend/db');

exports.getParcelles = (req, res) => {
  const query = 'SELECT * FROM parcelles';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des parcelles', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};