describe("HSBC Website Test", () => {
  it("should validate HSBC website", () => {
    // Open the website
    cy.visit("https://www.hsbc.co.in/");

    // Scroll down to the bottom of the page
    cy.scrollTo("bottom");

    // Click on Find your nearest branch or ATM link in footer section
    cy.get('nav > .footer-large > :nth-child(2) > a').click();

    // Validate in new page the URL has String = ‘/ways-to-bank/branches/’
    cy.url('https://www.hsbc.co.in/ways-to-bank/branches/').should("include", "/ways-to-bank/branches/");

    // Validate Header as Branches & ATM
    cy.get('.A-PNL-RW-ALL').should("be.visible");

    // Click on before Branch & ATM Locator button
    cy.contains("Branch & ATM Locator").click();

    // Type country name as India
    cy.visit('https://www.hsbc.co.in/branch-finder/')
    cy.wait(3000)
    cy.scrollTo(0, 250)
    cy.get('#searchInput').type('India').should('have.value','India');
    

    // In drop-down option click option India
    cy.get('#searchInput').type('India').type("{enter}");

    // Validate ATM Header name is showing as Rajbhavan Road
    cy.get('._1521gYSzrNIMk9R-rS4Hur').should("contain.text", "Rajbhavan Road");

    // Click on add Show more results button
    cy.contains("Show more results").click();

    // Check second ATM branch name tooltip as 2 in red color is getting displayed
    cy.get("._1OVu0dKjGeodXsBo3rrQ-i")
      .eq(1) // Assuming the second ATM has index 1
      .should("have.text", "2")
      .and("have.css", "color", "rgb(255, 255, 255)");
    // Check Instagram in social media option in footer section
    cy.xpath('//a[@class="social-image social-icon-instagram"]');
    // Check Facebook in social media option in footer section
    cy.get(':nth-child(2) > .social-image').contains("Facebook").should("be.visible");

    // Check Twitter in social media option in footer section
    cy.get(':nth-child(3) > .social-image').contains("Twitter").should("be.visible");

    // Check Youtube in social media option in footer section
    cy.xpath('//a[@class="social-image social-icon-youtube"]');

    // Click on HSBC Logo
    cy.get('.header-logo > a > img').click();

    // Validate page is navigating to home page by its title
    cy.title().should("eq", "HSBC India - Credit Cards, NRI Services, Saving and Deposit");

    // Scroll down to the bottom
    cy.scrollTo("bottom");

    // Check and Click on Privacy link
    cy.get('.lg-7 > .footer-supplementary > :nth-child(3) > a').click();

    // Validate Privacy Statement as Header
    cy.contains("Privacy Statement");
  });
});
