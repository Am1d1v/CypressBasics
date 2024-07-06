/// <reference types="cypress" />

describe('Handle Child Windows', () => {

    it('Should handle "Open Tab" button', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#opentab').invoke('removeAttr', 'target').click();

        cy.location('pathname', 'https://www.qaclickacademy.com/');
    });

});