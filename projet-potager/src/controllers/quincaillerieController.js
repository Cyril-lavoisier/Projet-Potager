const db = require('../../backend/db');

exports.getQuincaillerie = (req, res) => {
  const query = 'SELECT * FROM quincaillerie LIMIT 1';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération de la quincaillerie:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.length > 0) {
      res.json(results[0]); // Renvoie seulement le premier quincaillerie comme objet
    } else {
      res.status(404).json({ error: "quincaillerie non trouvé" });
    }
  });
};