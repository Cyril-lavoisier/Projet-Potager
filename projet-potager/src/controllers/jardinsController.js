const db = require('../../backend/db');

exports.getJardins = (req, res) => {
  const query = 'SELECT * FROM jardins';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des jardins:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};