/// <reference types="cypress" />

describe('Mouse Hover', () => {

    it("should hover mouse on input and select 'Top'", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click();
        
        // #top should concate with url
        cy.url().should('include', '#top')
    });

    it.only("should hover mouse on input and select 'Top' using force click", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        cy.contains('Top').click({'force': true});

        // #top should concate with url
        cy.url().should('include', '#top')
    });

});