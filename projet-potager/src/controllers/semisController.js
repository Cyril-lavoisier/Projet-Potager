const db = require('../../backend/db');

//Select semis
exports.getSemis = (req, res) => {
  const query = 'SELECT s.id, s.quantite, v.nom AS Variete_nom, pr.nom AS Produit_nom FROM semis s JOIN variete v ON s.Variete_id = v.id JOIN Produits pr ON s.Variete_Produits_id = pr.id';
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

//Insert plantation
exports.insertDataSemis = (req, res) => {
  console.log(req.body);
  const {id, quantite, Variete_id, Variete_Produits_id} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'INSERT INTO semis (id, quantite, Variete_id, Variete_Produits_id) VALUES(?, ?, ?, ?)';
  db.query(query, [ id, quantite, Variete_id, Variete_Produits_id ], (error, results) => {
    if (error) {
      console.error('Erreur lors de la mise à jour du semis:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.affectedRows > 0) {
      res.json({ message: 'Données insérées avec succès' });
    } else {
      res.status(404).json({ error: 'Insertion échouée' });
    }
  });
};

//Update plantation
exports.updateDataSemis = (req, res) => {
  console.log(req.body);
  const {id, quantite, Variete_id, Variete_Produits_id} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'UPDATE semis SET quantite = ?, Variete_id = ?, Variete_Produits_id = ? WHERE id = ?'; //UPDATE utilisateurs SET ville = ? WHERE id = ?'
  db.query(query, [ quantite, Variete_id, Variete_Produits_id, id ], (error, results) => {
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
exports.deleteDataSemis = (req, res) => {
  console.log(req.body);
  const { id } = req.body; // Récupère l'ID depuis le body de la requête

  if (!id) {
    return res.status(400).json({ error: "L'ID est requis dans le body de la requête." });
  }

  const query = 'DELETE FROM semis WHERE id = ?';
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