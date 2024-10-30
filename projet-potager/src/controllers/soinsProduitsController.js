const db = require('../../backend/db');

exports.getSoinsProduits = (req, res) => {
  const query = 'SELECT * FROM soins_produits LIMIT 1';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des soins:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.length > 0) {
      res.json(results[0]); // Renvoie seulement le premier soins produit comme objet
    } else {
      res.status(404).json({ error: "Soin produit non trouvé" });
    }
  });
};