const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const port = 3000; // Tu peux choisir un autre port si besoin


app.use(cors()); // Permet toutes les origines

// Route de test pour vérifier si l'API fonctionne
/*app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
*/

app.get('/api/utilisateurs', (req, res) => {
  const query = 'SELECT * FROM utilisateurs'; // Requête pour récupérer les données
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des jardins:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results); // Envoie les données sous forme de JSON
    }
  });
});
