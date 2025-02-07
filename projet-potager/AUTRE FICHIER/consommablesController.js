const db = require('../db');

//Select consommables
exports.getConsommables = (req, res) => {
  const query = 
  'SELECT c.id, c.nom, c.type, c.fournisseur, c.prix, c.quantite, u.id AS utilisateur_id FROM consommables c JOIN utilisateurs u ON c.Utilisateurs_id = u.id ORDER BY c.id ASC';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des consommables', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.length > 0) {
      res.json(results); // Renvoie tous les résultats sous forme de tableau
    } else {
      res.status(404).json({ error: "consommables non trouvé" });
    }
  });
};

//Insert consommables
exports.insertDataConsommables = (req, res) => {
  console.log("Données reçues dans la requête :", req.body);

  const { nom, type, fournisseur, prix, quantite, utilisateurs_id } = req.body;

  // Si les champs requis sont absents, retournez une erreur
  if (!nom || !type || !fournisseur || !prix || !quantite || !utilisateurs_id) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  const query = 'INSERT INTO consommables (nom, type, fournisseur, prix, quantite, utilisateurs_id) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [nom, type, fournisseur, prix, quantite, utilisateurs_id], (error, results) => {
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

exports.updateDataConsommables = (req, res) => {
  const { id, nom, type, fournisseur, prix, quantite } = req.body;

  // Vérifiez d'abord si un ID est fourni
  if (!id) {
    return res.status(400).json({ error: "L'ID est requis pour la mise à jour." });
  }

  // Récupérez les données actuelles de la plantation
  const selectQuery = 'SELECT nom, type, fournisseur, prix, quantite FROM consommables WHERE id = ?';
  db.query(selectQuery, [id], (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des données:', error);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Enregistrement non trouvé' });
    }

    // Données actuelles des consommables
    const currentData = results[0];
    const updates = [];
    const values = [];

    // Comparez chaque champ avec la valeur actuelle et ajoutez seulement les champs modifiés
    if (nom !== undefined && nom !== currentData.nom) {
      updates.push('nom = ?');
      values.push(nom);
    }
    if (type !== undefined && type !== currentData.type) {
      updates.push('type = ?');
      values.push(type);
    }
    if (fournisseur !== undefined && fournisseur !== currentData.fournisseur) {
      updates.push('fournisseur = ?');
      values.push(fournisseur);
    }
    if (prix !== undefined && prix !== currentData.prix) {
      updates.push('prix = ?');
      values.push(prix);
    }
    if (quantite !== undefined && quantite !== currentData.quantite) {
      updates.push('quantite = ?');
      values.push(quantite);
    }

    // Si aucun champ n'est modifié, retournez une réponse indiquant qu'il n'y a rien à mettre à jour
    if (updates.length === 0) {
      return res.status(400).json({ message: "Aucun changement détecté pour la mise à jour." });
    }

    // Construisez et exécutez la requête SQL de mise à jour
    const updateQuery = `UPDATE consommables SET ${updates.join(', ')} WHERE id = ?`;
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

//Delete consommables
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