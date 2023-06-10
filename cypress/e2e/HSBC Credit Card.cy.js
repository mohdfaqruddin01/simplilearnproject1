describe("HSBC Credit Cards Test", () => {
    it("should validate credit card options and compare functionality", () => {
      cy.visit("https://www.hsbc.co.in/");
  
      // Step 2: Hover cursor on Banking menu navigation
      cy.get('ul.row > :nth-child(1)').trigger("mouseover");
  
      // Step 3: Click on Credit Cards link
      cy.get('.A-TYP38L-RW-ALL').click();
  
      // Step 4: Validate Credit Card as a header text
      cy.contains("Credit Card");
  
      // Step 5: Validate Apply Now button
      cy.visit('https://www.hsbc.co.in/credit-cards/features/');
    cy.wait(3000)
    cy.scrollTo(0, 250)
      cy.xpath('//a[@id="content_main_button_1"]')
      .contains("Apply Now");
  
      // Step 6: Check there are four types of Credit Card options available
      cy.get('.A-PAR16R-RW-ALL > a').click()
      cy.visit("https://www.hsbc.co.in/credit-cards/")
      cy.xpath('//div[@class="row product-general"]').should("have.length", 4);
  
      // Step 7: Validate first credit Card image attribute is HSBC Visa Cashback Credit Card
      cy.get('#listing_main_image_3')
        .first()
        .should("have.attr", "alt", "HSBC Visa Cashback Credit Card");
  
      // Step 8: Validate first credit Card header text is HSBC Cashback Credit Card
      cy.get('#listing_main_creditCardProductModule_1 > .product-general > .md-8 > .A-LNKND38L-RW-ALL')
        .first()
        .should("contain", "HSBC Cashback Credit Card");
  
      // Step 9: Validate first credit Card has attached Compare cards button
      cy.get('#listing_main_button_1 > span')
        .first()
        .should("contain", "Compare cards");
  
      // Step 10: Validate first credit Card has attached Find out more button
      cy.get('#listing_main_button_2 > [aria-hidden="true"]')
        .first()
        .should("contain", "Find out more");
  
      // Step 11: Validate first credit Card has attached Apply now button
      cy.get('#listing_main_button_3 > [aria-hidden="true"]')
        .first()
        .should("contain", "Apply now");
  
      // Step 12: Click on First Credit card’s Compare cards button
      cy.get('#listing_main_button_1')
        .first()
        .contains("Compare cards")
        .click();
  
      // Step 13: Validate the new pop up has a close button
      cy.get('.close-button');
  
      // Step 14: Validate "Select cards to compare" is the header of the pop up
      cy.get('#title-pp_tools_productComparator_4');
  
      // Step 15: Check that there are four credit cards options available in the pop up to compare
      cy.xpath('//div[@class="tile-selector"]').should("have.length", 4);
  
      // Step 16: Check first and second Credit Card checkbox to compare
      cy.get('[data-product-type="cashback-credit-card"] > .container-title-checkbox > .modal-checkbox')
     .click( );// First checkbox

      cy.get('[data-product-type="visa-platinum-credit-card"] > .container-title-checkbox > .modal-checkbox')
      .click( );// Second checkbox
  
      // Step 17: Click on Compare button
      cy.get('.A-BTNP-RW-ALL > span').click();
  
      // Step 18: Validate that a total of two credit cards have been selected
      cy.xpath('//h2[@class="A-TYPS4L-RW-DEV title"]').should("have.length", 2);
  
      // Step 19: Validate two remove links are present for both the credit cards
      cy.xpath('//div[@class="product-select"][2]').should('be.visible', 2).each((creditCard) => {
        // Check if there are two "remove" links associated with each credit card
        cy.wrap(creditCard)
          .find('span')
          .should('be.visible', 2)
          .each((removeLink) => {
            // Assert that each "remove" link contains the expected text
            cy.wrap(removeLink).should('contain', 'Remove');
          });
      });
      // Step 20: Click on Add card link
      cy.contains("Add card").click();
  
      // Step 21: Add third credit card checkbox to compare
      cy.get('[data-product-type="smart-value-credit-card"]').click();
      cy.get('.A-BTNP-RW-ALL > span').click();
  
      // Step 22: Now validate a total of three credit cards have been selected
      cy.xpath('//div[@class="product-select"][2]').should('be.visible', 3);
  
      // Step 23: Validate a total of three remove links are present
      cy.xpath('//div[@class="product-select"][2]').should('be.visible', 3);
  
      // Step 24: Now click on any remove link out of three
      cy.get(':nth-child(1) > .A-TYPS7R-RW-DEV > [aria-hidden="true"]').contains("Remove").click();
  
      // Step 25: Now only two credit card options should be available on the page
      cy.get('.product-select-container > :nth-child(1)').should('be.visible', 2);
  
      // Step 26: Again click on Add card link
      cy.contains("Add card").click();
  
      // Step 27: In the pop-up, click on close button
      cy.get('.close-button').click();
  
      // Step 28: The pop-up should close successfully
      cy.contains(".close-button").should("not.exist");
    });
  });
  