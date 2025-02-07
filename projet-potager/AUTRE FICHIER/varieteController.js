const db = require('../db');

/*
exports.getVariete = (req, res) => {
  const query = 'SELECT * FROM variete';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des variete:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};
*/

exports.getVariete = (req, res) => {
  const query = 'SELECT * FROM variete'; // Enlève LIMIT 1 pour obtenir tous les produits
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des variete:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.length > 0) {
      res.json(results); // Renvoie tous les produits sous forme de tableau
    } else {
      res.status(404).json({ error: "Variete non trouvés" });
    }
  });
};