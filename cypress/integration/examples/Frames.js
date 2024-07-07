/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Handle Frames', () => {

    it('Navigate in the frame', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('a[href="mentorship"]')

    });

});