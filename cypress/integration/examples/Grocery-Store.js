/// <reference types="cypress" />

describe('Grocery Store', () => {

    it('should check that default number of products is 1', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.stepper-input .quantity').should('have.value', 1);
    });

    it('should find "Brocolli" in search input field', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Type "Brocolli" in search input field
        cy.get('.search-keyword').type('Brocolli');

        // Check that product exists
        cy.get('.products > .product').should('exist');
    });

    it('should display several products with same characters', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Type "Ca" in search input field
        cy.get('.search-keyword').type('Ca');

        cy.wait(1000);

        // Check that list of products contains more then 1 element
        cy.get('.products > .product').should('have.length.above', 1);

    });

    it.only('should display one product on the page', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Check that at least 1 product exist
        cy.get('.products').find('.product').should('have.length.above', 1);

    });

    it('should display message that the searching product does not exist', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Type "Nothing" in search input field
        cy.get('.search-keyword').type('Nothing');

        // Product doesn't exist
        cy.get('.no-results > h2').contains('Sorry, no products matched your search!');
    });

});