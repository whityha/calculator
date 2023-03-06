/* eslint-disable no-undef */
Cypress.Commands.add('pressExpression', (exp) => {
    exp.split('').forEach((selector) => {
        cy.get(`[data-test="${selector}"]`).click();
    });
});

Cypress.Commands.add('makeExpressionTest', (exp) => {
    cy.pressExpression(exp.expression);
    cy.get('[data-test="displayValue"]').should('have.text', exp.result);
    cy.get('[data-test="C"]').click();
});

Cypress.Commands.add('choiceTheme', (theme) => {
    cy.get('select').select(theme);
    cy.window()
        .its('store')
        .invoke('getState')
        .its('settings')
        .its('theme')
        .should('eq', theme);
});
