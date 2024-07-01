/// <reference types="cypress" />

describe('UI Controls', () => {

    it('should select certain check boxes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        // Select 1 and 3 check boxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value', 'option3');;
    });

    it('should uncheck certain check boxes', () => {
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

    it('should select Option 1 in static dropdown menu', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        // Select dropdowm menu
        // Select option by text
        //cy.get('#dropdown-class-example').select('Option1');

        // Select option by value
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');
    })

    it.only('should input "Aus" and select "Australia" in dynamic dropdown menu', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        // Type "Aus" in the input field
        cy.get('#autocomplete').type('Aus');

        // Select "Australia" from the list of options
        cy.get('.ui-menu-item div').each(el => {
            if(el.text() === 'Australia') el.click();
        })

        cy.get('#autocomplete').should('have.value', 'Australia');
    })



});