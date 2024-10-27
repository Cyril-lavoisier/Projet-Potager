const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');
const cors = require('cors');
app.use(cors()); // Permet toutes les origines

// Configuration des routes (si nécessaire) - Se connecter a l'adresse http://localhost:3000 pour verifier le bon fonctionnement du serveur
app.get('/', (req, res) => {
  res.send('Serveur Express est bien démarré ! ');
});

// Démarrer le serveur - ouvrir un terminal, se mettre dans le repertoire cd C:\Users\Cyril\Desktop\Projet-Potager\projet-potager\backend et executer le code node index.js
app.listen(port, () => {
  console.log(`Serveur en cours d\'exécution sur http://localhost:${port}`);
});

app.get('/api/utilisateurs', (req, res) => {
  const query = 'SELECT * FROM utilisateurs'; // Requête pour récupérer les données
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      res.json(results); // Envoie les données sous forme de JSON
    }
  });
});

/*
// Configuration des routes (si nécessaire) - Se connecter a l'adresse http://localhost:3000 pour verifier le bon fonctionnement du serveur
app.get('/', (req, res) => {
  res.send('Serveur Express est bien démarré ! ');
});

// Démarrer le serveur - ouvrir un terminal, se mettre dans le repertoire cd C:\Users\Cyril\Desktop\Projet-Potager\projet-potager\backend et executer le code node index.js
app.listen(port, () => {
  console.log(`Serveur en cours d\'exécution sur http://localhost:${port}`);
});

1 Ouvrir cmd, se placer dans le repertoire cd C:\Users\Cyril\Desktop\Projet-Potager\projet-potager\backend et executer le code node index.js pour démarrer le serveur
Les messages : Serveur en cours d'exécution sur http://localhost:3000 et Connecté à la base de données MySQL devrais s'afficher si les ligne de code sont décommenter

2 Ouvrir cmd et tester les url suivante avec les reponse correspondante :
curl http://localhost:3000 - Serveur Express est bien démarré !
curl http://localhost:3000/api/hello - {"message":"Hello from the backend!"}
curl http://192.168.1.26:3000/api/utilisateurs - [{"id":1,"nom":"Lavoisier","prenom":"Cyril","age":29,"inscription":"2024-10-24T22:00:00.000Z","pays":"France","ville":"Guines","code_postal":62340}]

Testez ces même url dans postman
*/
