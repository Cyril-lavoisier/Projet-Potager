const db = require('../../backend/db');

exports.getConsommables = (req, res) => {
  const query = 'SELECT * FROM consommables';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des consommables:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};