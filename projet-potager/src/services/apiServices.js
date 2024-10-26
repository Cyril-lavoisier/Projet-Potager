const db = require('./db');

app.get('/api/jardins', (req, res) => {
  const query = 'SELECT * FROM jardins'; // Requête pour récupérer les données
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des jardins:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results); // Envoie les données sous forme de JSON
    }
  });
});