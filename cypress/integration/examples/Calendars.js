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

    it('should click on certain date in calendar', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');

        // Hardcoded calendar data
        const month = '6';
        const day = '10';
        const year = '2025';

        // Click on calendar
        cy.get('.react-date-picker__wrapper').click();

        // Click on month in calendar
        cy.get('.react-calendar__navigation__label').click();

        // All months appears after "Month" was clicked
        cy.get('.react-calendar__viewContainer').should('be.visible');

        // Click on the year in calendar
        cy.get('.react-calendar__navigation__label').click();

        // Select certain year
        cy.contains('button', year).click();

        // Year selection assertion
        cy.get('.react-calendar__navigation__label').then((elem) => expect(elem.text()).eq(year));

        // Select certain month
        cy.get('.react-calendar__year-view__months').then((monthsElem) => {
            monthsElem.children()[month].click();
        });

        // Select certain day
        cy.get('.react-calendar__month-view__days').then(dayElem => {
            dayElem.children()[day].click();
        })

    });


    it.only('should click on certain date in calendar', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');

        // Hardcoded calendar data
        const month = '6';
        const day = '10';
        const year = '2025';

        // Click on calendar
        cy.get('.react-date-picker__inputGroup').click();

        // Click on month in calendar
        cy.get('.react-calendar__navigation__label').click();

        // Click on the year in calendar
        cy.get('.react-calendar__navigation__label').click();

        // Select certain year
        cy.contains('button', year).click();

        // Select certain month
        cy.get('.react-calendar__year-view__months__month').eq(month).click();    

        // Select certain day
        //cy.get('.react-calendar__month-view__days__day').eq(day).click();
        cy.contains('abbr', day).click();

        // Date assertion
        cy.get('.react-date-picker__inputGroup__input').each((elem, index) => {
            cy.wrap(elem)
        });
    });

    

});