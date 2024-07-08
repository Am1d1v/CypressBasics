/// <reference types="cypress" />

describe('Calendars', () => {

    it('should choose certain date in calendar', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');

        // Calendar is hidden
        cy.get('div.react-date-picker').should('have.class', 'react-date-picker--closed');

        // Click on calendar
        cy.get('.react-date-picker__wrapper').click();

        // After calendar icon was clicked calendar appears
        cy.get('div.react-date-picker').should('have.class', 'react-date-picker--open');

    });

    

});