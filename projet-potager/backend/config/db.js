import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Cl15991/60/42',
  database: 'app_potager',
});

// Vérification de la connexion
(async () => {
  try {
    await db.getConnection();
    console.log('Connecté à la base de données MySQL');
  } catch (err) {
    console.error('Erreur de connexion à la base de données:', err);
  }
})();

export default db;