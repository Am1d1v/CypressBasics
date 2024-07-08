/// <reference types="cypress" />

describe('Calendars handle', () => {

    it('should choose certain date in calendar', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');

        // Calendar is hidden
        cy.get('div.react-date-picker').should('have.class', 'react-date-picker--closed');

        // Click on calendar
        cy.get('.react-date-picker__wrapper').click();

        // After calendar icon was clicked calendar appears
        cy.get('div.react-date-picker').should('have.class', 'react-date-picker--open');

        // Type certain month
        cy.get('.react-date-picker__inputGroup__month').type('7');

        // Type certain day
        cy.get('.react-date-picker__inputGroup__day').type('8');

        // Type certain year
        cy.get('.react-date-picker__inputGroup__year').type('2024');

    });

    

});