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

//Insert outillages
exports.insertDataOutillages = (req, res) => {
  console.log(req.body);
  const {id, updateNom, longevite, utilisateurs_id} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'INSERT INTO outillages (id, nom, longevite, Utilisateurs_id) VALUES(?, ?, ?, ?)';
  db.query(query, [ id, updateNom, longevite, utilisateurs_id ], (error, results) => {
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

//Delete outillages
exports.deleteDataOutillages = (req, res) => {
  console.log(req.body);
  const { id } = req.body; // Récupère l'ID depuis le body de la requête

  if (!id) {
    return res.status(400).json({ error: "L'ID est requis dans le body de la requête." });
  }

  const query = 'DELETE FROM outillages WHERE id = ?';
  db.query(query, [id], (error, results) => {
    if (error) {
      console.error('Erreur lors de la suppression des données:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.affectedRows > 0) {
      res.json({ message: 'Données supprimées avec succès' });
    } else {
      res.status(404).json({ error: 'Donnée non trouvée pour suppression' });
    }
  });
};