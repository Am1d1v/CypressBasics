/// <reference types="cypress" />

describe('Table Handle', () => {

    it.only("should validate 'SQL' course and it's price", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        cy.get('tr td:nth-child(2)').each((item, index) => {
            const text = item.text()
            
            if(text.includes('Learn SQL')){
                // Get "Price" column
                cy.get('tr td:nth-child(2)').next().eq(index).then((price) => {
                    expect(price.text()).equal('25');
                });
            };
            
        });
    });

});