/// <reference types="cypress" />

describe('Handle Frames', () => {

    it('', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#courses-iframe');
    });

});