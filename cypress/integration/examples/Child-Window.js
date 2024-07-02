/// <reference types="cypress" />

describe('Handle Child Windows', () => {

    it('Should handle child window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#opentab').invoke('removeAttr', 'target').click();
    });

});