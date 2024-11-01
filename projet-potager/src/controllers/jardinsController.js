const db = require('../../backend/db');

exports.getJardins = (req, res) => {
  const query = 'SELECT * FROM jardins LIMIT 1';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des jardins:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.length > 0) {
      res.json(results[0]); // Renvoie seulement le premier jardins comme objet
    } else {
      res.status(404).json({ error: "jardins non trouvé" });
    }
  });
};