const db = require('../../backend/db');

exports.getOutillages = (req, res) => {
  const query = 'SELECT * FROM outillages LIMIT 1';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération de l\'outillages', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.length > 0) {
      res.json(results[0]); // Renvoie seulement le premier outillages comme objet
    } else {
      res.status(404).json({ error: "outillages non trouvé" });
    }
  });
};