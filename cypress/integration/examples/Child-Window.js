/// <reference types="cypress" />

describe('Handle Child Windows', () => {

    it('Should handle "Open Tab" button by removing attribute', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#opentab').invoke('removeAttr', 'target').click();

        cy.location('pathname', 'https://www.qaclickacademy.com/');
    });

    it.only('Should handle "Open Tab" button', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#opentab').then((elem) => {
            const url = elem.prop('href');

            cy.visit(url);
            cy.location(url);

        });
    })

});