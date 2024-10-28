const db = require('../../backend/db');

exports.getOutillages = (req, res) => {
  const query = 'SELECT * FROM outillages';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération de l\'outillages', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};