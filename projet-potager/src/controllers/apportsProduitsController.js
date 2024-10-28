const db = require('../../backend/db');

exports.getApportsProduits = (req, res) => {
  const query = 'SELECT * FROM apports_produits';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des apports-produits:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};