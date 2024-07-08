/// <reference types="cypress" />

describe('Calendars handle', () => {

    it('should type certain date in calendar', () => {
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

    it.only('should click on certain date in calendar', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');

        // Click on calendar
        cy.get('.react-date-picker__wrapper').click();

        // Click on month in calendar
        cy.get('.react-calendar__navigation__label').click();

        // All months appears after "Month" was clicked
        cy.get('.react-calendar__viewContainer').should('be.visible');

        // Click on the year in calendar
        cy.get('.react-calendar__navigation__label').click();

    });

    

});