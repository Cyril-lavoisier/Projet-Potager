const db = require('../../backend/db');

exports.getProduits = (req, res) => {
  const query = 'SELECT * FROM produits';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des produits:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};