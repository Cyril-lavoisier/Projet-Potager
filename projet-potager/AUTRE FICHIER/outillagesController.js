const db = require('../db');

//Select outillages
exports.getOutillages = (req, res) => {
  const query = 
  'SELECT * FROM outillages ORDER BY id ASC';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des outils', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.length > 0) {
      res.json(results); // Renvoie tous les résultats sous forme de tableau
    } else {
      res.status(404).json({ error: "plantation non trouvé" });
    }
  });
};

//Insert plantation
exports.insertDataOutillages = (req, res) => {
  console.log("Données reçues dans la requête :", req.body);

  const { nom, longevite, Utilisateurs_id } = req.body;

  // Si les champs requis sont absents, retournez une erreur
  if (!nom || !longevite || !Utilisateurs_id) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  const query = 'INSERT INTO outillages (nom, longevite, Utilisateurs_id) VALUES (?, ?, ?)';
  db.query(query, [nom, longevite, Utilisateurs_id], (error, results) => {
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

/*
exports.updateDataOutillages = (req, res) => {
  const { id, nom, longevite, Utilisateurs_id } = req.body;

  // Vérifiez d'abord si un ID est fourni
  if (!id) {
    return res.status(400).json({ error: "L'ID est requis pour la mise à jour." });
  }

  // Récupérez les données actuelles de la plantation
  const selectQuery = 'SELECT nom, longevite, Utilisateurs_id FROM outillages WHERE id = ?';
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
    if (nom !== undefined && nom !== currentData.nom) {
      updates.push('nom = ?');
      values.push(nom);
    }
    if (longevite !== undefined && longevite !== currentData.longevite) {
      updates.push('longevite = ?');
      values.push(longevite);
    }
    if (Utilisateurs_id !== undefined && Utilisateurs_id !== currentData.Utilisateurs_id) {
      updates.push('Utilisateurs_id = ?');
      values.push(Utilisateurs_id);
    }
    if (date !== undefined && date !== currentData.date) {
      updates.push('date = ?');
      values.push(date);
    }

    // Si aucun champ n'est modifié, retournez une réponse indiquant qu'il n'y a rien à mettre à jour
    if (updates.length === 0) {
      return res.status(400).json({ message: "Aucun changement détecté pour la mise à jour." });
    }

    // Construisez et exécutez la requête SQL de mise à jour
    const updateQuery = `UPDATE outillages SET ${updates.join(', ')} WHERE id = ?`;
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
*/

//Delete plantation
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