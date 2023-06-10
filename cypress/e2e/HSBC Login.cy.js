describe("HSBC Website Test", () => {
  it("should validate HSBC website", () => {
    // Open the website
    cy.visit("https://www.hsbc.co.in/");

    // Validate HSBC Bank Logo
    cy.get('h1 > img')
      .should("be.visible")
      .and(($logo) => {
        expect($logo.attr("h1 > img")).to.equal( );
      });

    // Validate Home Page Title
    cy.title().should(
      "eq",
      "HSBC India - Credit Cards, NRI Services, Saving and Deposit"
    );

    // Click on Login button
    cy.get(':nth-child(5) > .header-dropdown > .selected-item').click();

    // Validate Log On header in Login page
    cy.contains("Log On").should("be.visible");

    // Check Continue button is available
    cy.contains("Continue").should("be.visible");

    // Validate initially Continue button is disabled
    cy.contains("Continue").should("be.disabled");
  });
});
describe("HSBC Website Test", () => {
  it.only("should validate HSBC website", () => {
    // Open the website
    cy.visit("https://www.hsbc.co.in/");

    // Validate HSBC Bank Logo
    cy.get('h1 > img')
      .should("be.visible")
      .and(($logo) => {
        expect($logo.attr("h1 > img")).to.equal( );
      });

    // Validate Home Page Title
    cy.title().should(
      "eq",
      "HSBC India - Credit Cards, NRI Services, Saving and Deposit"
    );

    // Click on Login button
    cy.get(':nth-child(5) > .header-dropdown > .selected-item').click();

    // Validate Log On header in Login page
    cy.contains("Log On").should("be.visible");

    // Check Continue button is available
    cy.contains("Continue").should("be.visible");

    // Type in the username field
    cy.get('#username').type('John123');

    // Check Continue button is enabled
    cy.get('#username_submit_btn').should("be.enabled");

    // Validate Remember me checkbox is not checked by default
    cy.get('#rememberMe').should("not.be.checked");

    // Validate there is a question mark tooltip present on the page
    cy.get('#username_help_link > [role="text"] > .icon').should("be.visible");

    // Click on the tooltip
    cy.get('#username_help_link > [role="text"] > .icon').click();

    // Validate the username header in the new pop-up screen
    cy.get('#username').should("be.visible");

    // Validate there is a Close button in the new pop-up screen
    cy.get('.close-btn > [role="text"] > .icon').should("be.visible");

    // Click on the close button present in the new pop-up screen
    cy.get('.close-btn > [role="text"] > .icon').click();
  });
});

