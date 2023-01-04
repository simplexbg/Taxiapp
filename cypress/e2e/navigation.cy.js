// client/cypress/e2e/navigation.cy.js

describe('Navigation', function () {
  it('Can navigate to home from log in', function () {
    cy.visit('/#/log-in');
    cy.get('a').contains('Home').click();
    cy.hash().should('eq', '#/');
  });
});