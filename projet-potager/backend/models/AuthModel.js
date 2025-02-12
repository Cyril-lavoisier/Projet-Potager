const db = require('../config/db.js');

const loginUtilisateur = async (email, password) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM utilisateurs WHERE email = ? AND password = ?',
      [email, password]
    );
    return rows[0] || null;
  } catch (error) {
    throw error;
  }
};

module.exports = { loginUtilisateur };