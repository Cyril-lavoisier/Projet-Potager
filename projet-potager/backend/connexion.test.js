const request = require('supertest');
const app = require('index.js'); // Assure-toi que ton serveur est bien exporté dans `server.js`

describe('Test de connexion utilisateur', () => {
  it('devrait renvoyer un token pour une connexion valide', async () => {
    const response = await request(app)
      .post('/api/utilisateurs/connexion') // Mets l’URL correcte de ton endpoint de connexion
      .send({
        email: 'test@example.com',
        password: 'motdepasse123'
      });

    expect(response.status).toBe(200); // Vérifie que le statut est bien 200
    expect(response.body).toHaveProperty('token'); // Vérifie que la réponse contient bien un token
  });

  it('devrait échouer avec un mauvais mot de passe', async () => {
    const response = await request(app)
      .post('/api/utilisateurs/connexion')
      .send({
        email: 'test@example.com',
        password: 'mauvaismotdepasse'
      });

    expect(response.status).toBe(401); // Vérifie que la connexion échoue
    expect(response.body).toHaveProperty('message', 'Identifiants invalides');
  });
});