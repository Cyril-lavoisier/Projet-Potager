/*
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/')
  })
})
*/

describe('Test du champ de saisie d\'email', () => {
  it('devrait envoyer la requête et recevoir des données', () => {
    // Interception de la requête réseau
    cy.intercept('POST', 'http://192.168.1.26:3000/api/connexion', (req) => {
      // Vous pouvez éventuellement vérifier ou modifier la requête ici si nécessaire
    }).as('postData'); // Donne un alias à l'interception
    // Aller sur la page de l'application
    cy.visit('http://localhost:8081/');
    // Cibler le champ avec `testID`, remplir l'email et vérifier
    cy.get('[data-testid="email-input"]') // Cibler l'input par son `testID`
      .type('cyril@email.fr') // Remplir le champ
    // Cibler le champ avec `testID`, remplir le password et vérifier
    cy.get('[data-testid="password-input"]') // Cibler l'input par son `testID`
      .type('12345') // Remplir le champ
    // Cliquer sur le bouton "Envoyer"
    cy.get('[data-testid="connexion-button"]').click()
    cy.wait('@postData').then((interception) => {
      // Vérifier que la réponse contient bien des données
      expect(interception.response.body).to.have.property('utilisateur');
      // Vous pouvez aussi vérifier des valeurs spécifiques
    });
  });
});