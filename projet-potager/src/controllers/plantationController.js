const db = require('../../backend/db');

//Select plantation
exports.getPlantation = (req, res) => {
  const query = 
  'SELECT p.id, p.quantite, p.date, v.nom AS Variete_nom, pr.nom AS Produit_nom FROM plantation p JOIN variete v ON p.Variete_id = v.id JOIN Produits pr ON p.Variete_Produits_id = pr.id';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des plantation', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.length > 0) {
      res.json(results[0]); // Renvoie seulement le premier plantation comme objet
    } else {
      res.status(404).json({ error: "plantation non trouvé" });
    }
  });
};

//Insert plantation
exports.insertDataPlantation = (req, res) => {
  console.log(req.body);
  const {id, quantite, Variete_id, Variete_Produits_id, date} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'INSERT INTO plantation (id, quantite, Variete_id, Variete_Produits_id, date) VALUES(?, ?, ?, ?, ?)';
  db.query(query, [ id, quantite, Variete_id, Variete_Produits_id, date ], (error, results) => {
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
exports.updateDataPlantation = (req, res) => {
  console.log(req.body);
  const {id, quantite, Variete_id, Variete_Produits_id, date} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'UPDATE plantation SET quantite = ?, Variete_id = ?, Variete_Produits_id = ?, date = ? WHERE id = ?'; //UPDATE utilisateurs SET ville = ? WHERE id = ?'
  db.query(query, [ quantite, Variete_id, Variete_Produits_id, date, id ], (error, results) => {
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
exports.deleteDataPlantation = (req, res) => {
  console.log(req.body);
  const { id } = req.body; // Récupère l'ID depuis le body de la requête

  if (!id) {
    return res.status(400).json({ error: "L'ID est requis dans le body de la requête." });
  }

  const query = 'DELETE FROM plantation WHERE id = ?';
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