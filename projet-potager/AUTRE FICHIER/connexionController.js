const db = require('../db');

const bcrypt = require('bcrypt'); // Assurez-vous d'installer bcrypt pour le hachage de mot de passe

exports.loginUtilisateur = (req, res) => {
  const { email, password } = req.body;
  //console.log("Données reçues :", req.body);

  // Vérifiez que les champs ne sont pas vides
  if (!email || !password) {
    return res.status(400).json({ error: 'Veuillez fournir un email et un mot de passe.' });
  }

  //Verification du hash
  const saltRounds = 12;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error('Erreur lors du hashage du mot de passe:', err);
    } else {
      console.log("Mot de passe hashé :", hash);
      // Enregistrez `hash` dans votre base de données
    }
  });

  // Requête SQL pour obtenir l'utilisateur par email
  const query = 'SELECT * FROM utilisateurs WHERE email = ?';
  db.query(query, [email], async (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération de l’utilisateur:', error);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    //console.log("Résultats de la requête:", results);

    // Vérifiez si l'utilisateur existe
    if (results.length === 0) {
      return res.status(404).json({ error: 'Email ou mot de passe incorrect.' });
    }

    const utilisateur = results[0];

    // Comparez le mot de passe
    const isPasswordValid = bcrypt.compareSync(password, utilisateur.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
    }

    // Si tout est correct, retournez une réponse de succès
    res.json({ message: 'Connexion réussie', utilisateur: { id: utilisateur.id, email: utilisateur.email } });
  });
};
