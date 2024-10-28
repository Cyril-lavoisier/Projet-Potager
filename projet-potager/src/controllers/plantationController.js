const db = require('../../backend/db');

exports.getPlantation = (req, res) => {
  const query = 'SELECT * FROM plantation';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des plantation', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};