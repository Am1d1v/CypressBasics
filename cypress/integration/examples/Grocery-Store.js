/// <reference types="cypress" />

describe('Grocery Store', () => {

    it('Default number of products is 1', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.stepper-input .quantity').should('have.value', 1);
    })

});