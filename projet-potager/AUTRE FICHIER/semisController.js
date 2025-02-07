const db = require('../db');

//Select semis
exports.getSemis = (req, res) => {
  const query = 
  'SELECT s.id, s.quantite, v.nom AS Variete_nom, pr.nom AS Produit_nom FROM semis s JOIN variete v ON s.Variete_id = v.id JOIN Produits pr ON s.Variete_Produits_id = pr.id ORDER BY s.id ASC';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des semis', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.length > 0) {
      res.json(results); // Renvoie tous les résultats sous forme de tableau
    } else {
      res.status(404).json({ error: "semis non trouvé" });
    }
  });
};

//Insert plantation
exports.insertDataSemis = (req, res) => {
  console.log("Données reçues dans la requête :", req.body);

  const { quantite, Variete_id, Variete_Produits_id } = req.body;

  // Si les champs requis sont absents, retournez une erreur
  if (!quantite || !Variete_id || !Variete_Produits_id) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  const query = 'INSERT INTO semis (quantite, Variete_id, Variete_Produits_id) VALUES (?, ?, ?)';
  db.query(query, [quantite, Variete_id, Variete_Produits_id], (error, results) => {
    if (error) {
      console.error('Erreur lors de l\'insertion des données :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.affectedRows > 0) {
      res.json({ message: 'Données insérées avec succès' });
    } else {
      res.status(404).json({ error: 'Insertion échouée' });
    }
  });
};

exports.updateDataSemis = (req, res) => {
  const { id, quantite, Variete_id, Variete_Produits_id } = req.body;

  // Vérifiez d'abord si un ID est fourni
  if (!id) {
    return res.status(400).json({ error: "L'ID est requis pour la mise à jour." });
  }

  // Récupérez les données actuelles de la plantation
  const selectQuery = 'SELECT quantite, Variete_id, Variete_Produits_id FROM semis WHERE id = ?';
  db.query(selectQuery, [id], (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des données:', error);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Enregistrement non trouvé' });
    }

    // Données actuelles de la plantation
    const currentData = results[0];
    const updates = [];
    const values = [];

    // Comparez chaque champ avec la valeur actuelle et ajoutez seulement les champs modifiés
    if (quantite !== undefined && quantite !== currentData.quantite) {
      updates.push('quantite = ?');
      values.push(quantite);
    }
    if (Variete_id !== undefined && Variete_id !== currentData.Variete_id) {
      updates.push('Variete_id = ?');
      values.push(Variete_id);
    }
    if (Variete_Produits_id !== undefined && Variete_Produits_id !== currentData.Variete_Produits_id) {
      updates.push('Variete_Produits_id = ?');
      values.push(Variete_Produits_id);
    }

    // Si aucun champ n'est modifié, retournez une réponse indiquant qu'il n'y a rien à mettre à jour
    if (updates.length === 0) {
      return res.status(400).json({ message: "Aucun changement détecté pour la mise à jour." });
    }

    // Construisez et exécutez la requête SQL de mise à jour
    const updateQuery = `UPDATE semis SET ${updates.join(', ')} WHERE id = ?`;
    values.push(id);

    db.query(updateQuery, values, (updateError, updateResults) => {
      if (updateError) {
        console.error('Erreur lors de la mise à jour:', updateError);
        return res.status(500).json({ error: 'Erreur serveur' });
      }
      res.json({ message: 'Donnée mise à jour avec succès' });
    });
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


//Pour la gestion de la date dans une prochaine feature, se référer au fichier plantationControllers, les requête sont les même