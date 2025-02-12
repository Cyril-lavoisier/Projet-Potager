import request from 'supertest';
import app from './index.js'; // Vérifie que c'est bien ton fichier principal Express
import db from './config/db.js'; // Importe la connexion MySQL

afterAll(async () => {
  await db.end(); // Ferme la connexion MySQL
  if (app && app.close) {
    app.close(); // Ferme le serveur Express (si applicable)
  }
});

  describe('Test de connexion utilisateur', () => {
    it('devrait renvoyer l\'utilisateur pour une connexion valide', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({ email: 'cyril@gmail.com', password: '12345' });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('utilisateur'); // ✅ Vérifie que la clé "utilisateur" existe
      expect(response.body.utilisateur).toHaveProperty('email', 'cyril@gmail.com'); // ✅ Vérifie que l'email correspond
    });

    it('devrait échouer avec un mauvais mot de passe', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({ email: 'cyril@gmail.com', password: 'wrongpassword' });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error', 'Identifiants incorrects.'); // ✅ Modifié pour correspondre au contrôleur
    });
  });
