/// <reference types="cypress" />

import { DEFAULT_WAIT_TIME } from '../support/e2e';

describe('with App', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(DEFAULT_WAIT_TIME);
  });

  it('should render', () => {
    cy.contains('ReSplash').should('be.visible');
  });

  it('should search and get results', () => {
    cy.get('[data-cy="search-input"]').click().type('nature');

    cy.wait(1000);

    cy.get('[data-cy="progressive-img"]').should('have.length.at.least', 5);
  });

  it('should show no results text if results are empty', () => {
    cy.get('[data-cy="search-input"]').click().type('sdgasgsagdsdgsagsgd');

    cy.wait(1000);

    cy.get('[data-cy="progressive-img"]').should('have.length', 0);

    cy.contains('No results').should('be.visible');
  });

  it('should clear the search bar', () => {
    cy.get('[data-cy="search-input"]').click().type('nature');

    cy.wait(1000);

    cy.get('[data-cy="clear-search"]').click();

    cy.get('[data-cy="search-input"]').should('have.value', '');
  });
});
