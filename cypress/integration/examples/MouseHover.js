/// <reference types="cypress" />

describe('Mouse Hover', () => {

    it.only("", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click();
    });

});