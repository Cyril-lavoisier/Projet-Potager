const { loginUtilisateur } = require('../models/AuthModel.js');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Veuillez fournir un email et un mot de passe.' });
    }

    const utilisateur = await loginUtilisateur(email, password);

    if (!utilisateur) {
      return res.status(401).json({ error: 'Identifiants incorrects.' });
    }

    res.json({ utilisateur });
  } catch (error) {
    console.error('Erreur lors de la tentative de connexion :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

