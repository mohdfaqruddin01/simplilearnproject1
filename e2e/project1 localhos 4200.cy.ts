import { Optional } from "@angular/core"

describe('Website Loading Test', () => {
  it('Visits the website and asserts successful loading', () => {
    // Visit the website on localhost:4200
    cy.visit('http://localhost:4200')

    const newLocal = 'ngx-admin Demo Application'
    // Assert that the page is loaded successfully
    cy.title( ).should('eq', 'ngx-admin Demo Application') // expected title of  website
    cy.get('body').should('be.visible') // Assert that the body element is visible
  })
})
describe('Forms Navigation Test', () => {
  it('Clicks on Forms and Forms Layout links', () => {
    // Visit the website on localhost:4200
    cy.visit('http://localhost:4200/pages/forms/layouts')

    // Click on the "Forms" link
    cy.contains('Forms').click()

    // Assert that the Forms page is loaded
    cy.url( ).should('include', 'http://localhost:4200/pages/forms/layouts')
    cy.contains('Forms').should('be.visible').click()

    // Click on the "Forms Layout" link
    cy.get('.ng-tns-c7-5 > .menu-title').click( )

    // Assert that the Forms Layout page is loaded
    cy.url( ).should('include', 'http://localhost:4200/pages/forms/layouts')
    cy.get('.ng-tns-c7-5 > .menu-title').should('be.visible')
  })
})
describe('Edit Sign In Button Attributes', () => {
  it('Adds data-cy attribute to the Sign In button', () => {
    
  })
})
describe('Application Deployment Test', () => {
  it('Verifies the successful deployment of the application', () => {
    cy.visit('http://localhost:4200') 

    // Assert that a specific element or page is visible
    cy.get('ngx-header').should('be.visible')   
      })
  })
describe('Interacting with Sign In button', () => {
  it('Visits the website and interacts with the Sign In button', () => {
    // Visit the website on localhost:4200
    cy.visit('http://localhost:4200')

    // Locate and interact with the Sign In button using the attribute
    cy.get('[data-cy="signInButton"]').click({force:true})
  })
})
describe('Interacting with Email Field, Password Field, and Checkbox', () => {
  it('Visits the website and interacts with the form elements', () => {
    // Visit the website on localhost:4200
    cy.visit('http://localhost:4200/pages/forms/layouts')

    // Locate and inspect the email field under the horizontal form
    cy.get('#inputEmail3').type('example@email.com')

    // Locate and inspect the password field under the horizontal form
    cy.get('#inputPassword3').type('password123')

    // Locate and inspect the checkbox under the horizontal form
    cy.get('.checkbox > nb-checkbox > .label > .text').click()

    // Assert that the email field, password field, and checkbox are interacted with successfully
    cy.get('#inputEmail3').should('have.value', 'example@email.com')
    cy.get('#inputPassword3').should('have.value', 'password123')
    cy.get('.checkbox > nb-checkbox > .label > .text').should('be.visible')
  })
})
describe('Validating the "Sign in" button in the form', () => {
  it('Visits the website and validates the "Sign in" button', () => {
    // Visit the website on localhost:4200
    cy.visit('http://localhost:4200/pages/forms/layouts')

    // Locate the form containing the "Sign in" button
    cy.get('.form-horizontal > :nth-child(4)').as('.form-horizontal > :nth-child(4) > .offset-sm-3 > .appearance-filled')

    // Assert that the form contains a button with the name "Sign in"
    cy.get('@.form-horizontal > :nth-child(4) > .offset-sm-3 > .appearance-filled').contains('Sign in').should('have.class','appearance-filled size-medium status-warning shape-rectangle transitions')
  })
})
describe('Interacting with Radio Buttons', () => {
  it('Opens the website and interacts with radio buttons', () => {
    // Open the website on localhost:4200
    cy.visit('http://localhost:4200/pages/forms/layouts')

    // Find all three radio buttons under the form layout
    cy.get('nb-radio-group > :nth-child(1) > label > .text').as('radioButtons')

    // Inspect and click on the first radio button
    cy.get('nb-radio-group > :nth-child(1) > label > .text').eq(0).as('radioButton1')
    cy.get('@radioButton1').should('be.visible').click()

    // Inspect and click on the second radio button
    cy.get(':nth-child(2) > label > .text').eq(0).as('radioButton2')

    // Validate that radio button 1 is not selected
    cy.get('@radioButton1').should('not.be.checked')

    // Validate whether radio button 3 is disabled or not
    cy.get('[ng-reflect-disabled=""] > label > .text').eq(0).as('radioButton3')
    cy.get('@radioButton3').should('not.be.disabled')
  })
})
describe('Interacting with Modals, Toaster, and Checkboxes', () => {
  it('Opens the website and interacts with modals, toaster, and checkboxes', () => {
    // Open the website on localhost:4200
    cy.visit('http://localhost:4200/pages/forms/layouts')

    // Navigate to Modals and Overlays
    cy.get('a.ng-tns-c7-7').click()

    // Click on the Modals item
    cy.get(':nth-child(4) > .menu-items').click()

    // Inspect and click on the toaster
    cy.get('.ng-tns-c7-11 > .menu-title').click()

    // Select all three checkboxes
    cy.get(':nth-child(2) > .ng-valid > .label > .custom-checkbox').click({ force: true })
    cy.get(':nth-child(3) > .ng-valid > .label > .custom-checkbox').click({ force: true })
    cy.get(':nth-child(4) > .ng-valid > .label > .custom-checkbox').click({ force: true })

    // Inspect and click on only the second checkbox
    cy.get(':nth-child(3) > .ng-valid > .label > .text').eq(0).click()
  })
})
