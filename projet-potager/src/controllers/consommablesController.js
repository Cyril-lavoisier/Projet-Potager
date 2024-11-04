const db = require('../../backend/db');

exports.getConsommables = (req, res) => {
  const query = 'SELECT c.id, c.nom, c.type, c.fournisseur, c.prix, c.quantite, u.id AS utilisateur_id FROM consommables c JOIN utilisateurs u ON c.Utilisateurs_id = u.id';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des consommables:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.length > 0) {
      res.json(results[0]); // Renvoie seulement le premier consommables comme objet
    } else {
      res.status(404).json({ error: "Consommables non trouvé" });
    }
  });
};

//Insert plantation
exports.insertDataConsommables = (req, res) => {
  console.log(req.body);
  const {id, nom, type, fournisseur, prix, quantite, Utilisateurs_id} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'INSERT INTO consommables (id, nom, type, fournisseur, prix, quantite, Utilisateurs_id) VALUES(?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [ id, nom, type, fournisseur, prix, quantite, Utilisateurs_id ], (error, results) => {
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

//Update plantation
exports.updateDataConsommables = (req, res) => {
  console.log(req.body);
  const {id, nom, type, fournisseur, prix, quantite} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'UPDATE consommables SET nom = ?, type = ?, fournisseur = ?, prix = ?, quantite = ? WHERE id = ?';
  db.query(query, [ nom, type, fournisseur, prix, quantite, id ], (error, results) => {
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

//Delete plantation
exports.deleteDataConsommables = (req, res) => {
  console.log(req.body);
  const { id } = req.body; // Récupère l'ID depuis le body de la requête

  if (!id) {
    return res.status(400).json({ error: "L'ID est requis dans le body de la requête." });
  }

  const query = 'DELETE FROM consommables WHERE id = ?';
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