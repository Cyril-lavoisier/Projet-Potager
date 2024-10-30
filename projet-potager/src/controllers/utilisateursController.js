const db = require('../../backend/db');

exports.getUtilisateurs = (req, res) => {
  const query = 'SELECT * FROM utilisateurs LIMIT 1'; // Limite à un seul utilisateur
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération de l’utilisateur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.length > 0) {
      res.json(results[0]); // Renvoie seulement le premier utilisateur comme objet
    } else {
      res.status(404).json({ error: "Utilisateur non trouvé" });
    }
  });
};

//Nom
exports.updateUtilisateursNom = (req, res) => {
  console.log(req.body);
  const { id, nom} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'UPDATE utilisateurs SET nom = ? WHERE id = ?';
  db.query(query, [ nom, id], (error, results) => {
    if (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.affectedRows > 0) {
      res.json({ message: 'utilisateur mis à jour avec succès' });
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  });
};

//Prenom
exports.updateUtilisateursPrenom = (req, res) => {
  console.log(req.body);
  const { id, prenom} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'UPDATE utilisateurs SET prenom = ? WHERE id = ?';
  db.query(query, [ prenom, id], (error, results) => {
    if (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.affectedRows > 0) {
      res.json({ message: 'utilisateur mis à jour avec succès' });
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  });
};

//Age
exports.updateUtilisateursAge = (req, res) => {
  console.log(req.body);
  const { id, age} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'UPDATE utilisateurs SET age = ? WHERE id = ?';
  db.query(query, [ age, id], (error, results) => {
    if (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.affectedRows > 0) {
      res.json({ message: 'utilisateur mis à jour avec succès' });
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  });
};

//Inscription
exports.updateUtilisateursInscription = (req, res) => {
  console.log(req.body);
  const { id, inscription} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'UPDATE utilisateurs SET inscription = ? WHERE id = ?';
  db.query(query, [ inscription, id], (error, results) => {
    if (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.affectedRows > 0) {
      res.json({ message: 'utilisateur mis à jour avec succès' });
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  });
};

//Pays
exports.updateUtilisateursPays = (req, res) => {
  console.log(req.body);
  const { id, pays} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'UPDATE utilisateurs SET pays = ? WHERE id = ?';
  db.query(query, [ pays, id], (error, results) => {
    if (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.affectedRows > 0) {
      res.json({ message: 'utilisateur mis à jour avec succès' });
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  });
};

//Ville
exports.updateUtilisateursVille = (req, res) => {
  console.log(req.body);
  const { id, ville} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'UPDATE utilisateurs SET ville = ? WHERE id = ?';
  db.query(query, [ ville, id], (error, results) => {
    if (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.affectedRows > 0) {
      res.json({ message: 'utilisateur mis à jour avec succès' });
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  });
};

//Code postale
exports.updateUtilisateursCodePostal = (req, res) => {
  console.log(req.body);
  const { id, code_postal} = req.body; // Assurez-vous d'adapter les champs aux données de votre soin

  const query = 'UPDATE utilisateurs SET code_postal = ? WHERE id = ?';
  db.query(query, [ code_postal, id], (error, results) => {
    if (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else if (results.affectedRows > 0) {
      res.json({ message: 'utilisateur mis à jour avec succès' });
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  });
};