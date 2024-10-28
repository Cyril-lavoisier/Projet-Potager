const db = require('../../backend/db');

exports.getUtilisateurs = (req, res) => {
  const query = 'SELECT * FROM utilisateurs';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results);
    }
  });
};