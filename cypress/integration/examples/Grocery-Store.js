/// <reference types="cypress" />

describe('Grocery Store', () => {

    it('should check that default number of products is 1', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.stepper-input .quantity').should('have.value', 1);
    });

    it.only('should find "Brocolli" in search input field', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Type "Brocolli" in search input field
        cy.get('.search-keyword').type('Brocolli');

        // Check that product exists
        cy.get('.products > .product').should('exist');
    });


});