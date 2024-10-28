const db = require('../../backend/db');

exports.getSoinsProduits = (req, res) => {
  const query = 'SELECT * FROM soins_produits';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des soins:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};