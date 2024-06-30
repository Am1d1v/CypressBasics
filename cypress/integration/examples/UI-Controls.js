/// <reference types="cypress" />

describe('UI Controls', () => {

    it('should select certain check boxes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        // Select 1 and 3 check boxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value', 'option3');;
    });

    it.only('should uncheck certain check boxes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        // Select 1 and 3 check boxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value', 'option3');;

        // Uncheck 1 and 3 check boxes
        cy.get('#checkBoxOption1').uncheck();
        cy.get('#checkBoxOption3').uncheck();

        cy.wait(3000);

        // 1 and 3 check boxes must have be unchecked
        //cy.get('#checkBoxOption1').check().should('not.be.checked');
        //cy.get('#checkBoxOption3').check().should('not.be.checked');

        cy.get('input:checkbox').uncheck(['option1', 'option3']).should('not.be.checked');

    })



});