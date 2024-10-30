const db = require('../../backend/db');

exports.getSemis = (req, res) => {
  const query = 'SELECT * FROM semis LIMIT 1';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des semis:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.length > 0) {
      res.json(results[0]); // Renvoie seulement le premier semis comme objet
    } else {
      res.status(404).json({ error: "Semis non trouvé" });
    }
  });
};