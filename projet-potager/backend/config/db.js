const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Cl15991/60/42',
  database: 'app_potager',
  charset: 'utf8mb4'  // Ajout du charset
});

// Vérification de la connexion
(async function () {
  try {
    await db.getConnection();
    console.log('Connecté à la base de données MySQL');
  } catch (err) {
    console.error('Erreur de connexion à la base de données:', err);
  }
})();

module.exports = db;
