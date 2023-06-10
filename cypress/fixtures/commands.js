Cypress.Commands.add("login", (username) => {
  cy.get('#username').type('John123');
  cy.get('#username_submit_btn').click();
  });
  