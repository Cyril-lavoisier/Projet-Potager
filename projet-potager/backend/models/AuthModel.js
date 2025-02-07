import db from '../config/db.js';

export const loginUtilisateur = async (email, password) => {
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