/* eslint-disable no-undef */
import * as PATHS from '../../src/constants/paths';
import { THEMES } from '../../src/styled/theme/config';
import { closeBrackets, openBrackets } from '../expressions/brackets';
import correctExpressions from '../expressions/correctExpressions';
import dotExpressions from '../expressions/dotExpressions';
import uncorrectedExpressions from '../expressions/uncorrectedExpressions';

describe('show Home Page', () => {
    it('passes', () => {
        cy.visit('/');
    });
});

describe('check correct expressions', () => {
    it('check functional', () => {
        cy.visit('/');
        correctExpressions.forEach((item) => {
            cy.makeExpressionTest(item);
        });
    });
});

describe('check uncorrected expressions', () => {
    it('check functional', () => {
        cy.visit('/');
        uncorrectedExpressions.forEach((item) => {
            cy.makeExpressionTest(item);
        });
    });
});

describe('check result expressions with brackets', () => {
    it('check open brackets', () => {
        cy.visit('/');
        openBrackets.forEach((item) => {
            cy.makeExpressionTest(item);
        });
    });
    it('check close brackets', () => {
        cy.visit('/');
        closeBrackets.forEach((item) => {
            cy.makeExpressionTest(item);
        });
    });
});

describe('check dot expressions', () => {
    it('check functional', () => {
        cy.visit('/');
        dotExpressions.forEach((item) => {
            cy.makeExpressionTest(item);
        });
    });
});

describe('check change theme', () => {
    it('choice Theme', () => {
        cy.visit('/settings');
        const themes = Object.keys(THEMES);
        themes.forEach((item) => cy.choiceTheme(THEMES[item]));
    });
});

describe('show/hide history module', () => {
    it('show history', () => {
        cy.visit('/settings');
        cy.get('#togglerHistory').check();
        cy.visit('/');
        cy.window()
            .its('store')
            .invoke('getState')
            .its('settings')
            .its('isShowHistory')
            .should('eq', true);
        cy.get('[data-test="history"]').should('be.visible');
    });
    it('hide history', () => {
        cy.visit('/settings');
        cy.get('#togglerHistory').uncheck();
        cy.visit('/');
        cy.window()
            .its('store')
            .invoke('getState')
            .its('settings')
            .its('isShowHistory')
            .should('eq', false);
        cy.get('[data-test="history"]').should('be.not.visible');
    });
});

describe('check keypad value', () => {
    it('check all buttons value', () => {
        cy.visit('/');

        cy.pressExpression('(1+2/3*4-5%6.7890±)');
        cy.get('[data-test="displayValue"]').should(
            'have.text',
            '( 1 + 2 / 3 × 4 - 5 % -6.7890 )'
        );
        cy.get('[data-test="C"]').click();

        cy.pressExpression('(1+2/3*4-5%6.7890±)=');
        cy.get('[data-test="displayValue"]').should('have.text', '-8.121');
        cy.get('[data-test="C"]').click();

        cy.get('[data-test="displayValue"]').should('have.text', '0');
        cy.get('[data-test="C"]').click();
    });
});

describe('check navigation', () => {
    it('check link of settings', () => {
        cy.visit('/');
        const paths = Object.keys(PATHS).filter(
            (pathName) => pathName !== 'DEFAULT'
        );
        paths.forEach((pathName) => {
            cy.get(`a[href="${PATHS[pathName]}"]`).click();
            cy.location('pathname').should('eq', `${PATHS[pathName]}`);
        });
    });
});

describe('check historyDisplayValue', () => {
    it('check historyDisplayValue after press EQUAL', () => {
        cy.visit('/');
        cy.pressExpression('1+((2+3)/5=');
        cy.get('[data-test="historyDisplayValue"]').should(
            'have.text',
            '1 + ( ( 2 + 3 ) / 5 ) = '
        );
    });
});

describe('check history list', () => {
    it('check length list of expression', () => {
        cy.visit('/');
        correctExpressions.forEach((item) => {
            cy.makeExpressionTest(item);
        });
        cy.get('[data-test="history"]')
            .children()
            .last()
            .children()
            .should('have.length', correctExpressions.length);
    });
});
