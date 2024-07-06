/// <reference types="cypress" />

describe('Table Handle', () => {

    it.only("should validate course and it's price", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        cy.get('tr td:nth-child(2)')
    });

});