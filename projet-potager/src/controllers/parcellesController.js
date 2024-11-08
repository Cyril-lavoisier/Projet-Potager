const db = require('../../backend/db');

exports.getParcelles = (req, res) => {
  const userId = req.params.id; // Récupère l'id de l'utilisateur depuis les paramètres de l'URL
  const query = 'SELECT * FROM parcelles WHERE id = ?';

  db.query(query, [userId], (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des parcelles', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.length > 0) {
      res.json(results[0]); // Renvoie seulement le premier parcelles comme objet
    } else {
      res.status(404).json({ error: "Parcelles non trouvé" });
    }
  });
};

//Parcelles
exports.insertDataParcelles = (req, res) => {
  console.log(req.body);
  const {numero, superficie, Jardin_id, Jardins_Utilisateurs_id} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'INSERT INTO parcelles (numero, superficie, Jardins_id, Jardins_Utilisateurs_id) VALUES(?, ?, ?, ?)';
  db.query(query, [ numero, superficie, Jardin_id, Jardins_Utilisateurs_id ], (error, results) => {
    if (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.affectedRows > 0) {
      res.json({ message: 'Données insérées avec succès' });
    } else {
      res.status(404).json({ error: 'Insertion échouée' });
    }
  });
};