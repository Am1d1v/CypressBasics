/// <reference types="cypress" />

describe('UI Controls', () => {

    it('should select certain check boxes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        // Select 1 and 3 check boxes
        cy.get('#checkBoxOption1').check();
        cy.get('#checkBoxOption3').check();
    });

})