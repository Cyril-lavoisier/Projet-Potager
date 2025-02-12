const request = require('supertest');
const app = require('../index'); // Importer l'application

describe('Test de connexion utilisateur', () => {
  it('devrait renvoyer un token pour une connexion valide', async () => {
    const response = await request(app)
      .post('/api/auth/login') // Mets le bon endpoint de connexion
      .send({
        email: 'cyril@gmail.com',
        password: '12345'
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('devrait échouer avec un mauvais mot de passe', async () => {
    const response = await request(app)
      .post('/api/auth/login') // Mets le bon endpoint
      .send({
        email: 'test@example.com',
        password: 'mauvaismotdepasse'
      });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message', 'Identifiants invalides');
  });
});
