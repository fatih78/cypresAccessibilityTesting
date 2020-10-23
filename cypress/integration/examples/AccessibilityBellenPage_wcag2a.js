const terminalLog = (violations) => {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )

  cy.task('table', violationData)
}


const routes = ['Bellen'];

describe('Component accessibility test BellenPage wcag2a', () => {
  routes.forEach((route) => {
    const componentName = route.replace('.html', '');
    const testName = `${componentName} has no detectable accessibility violations on load`;

    it("NavBarWrapper", () => {
    cy.disableCookiewall('.kindertelefoon.nl')
      cy.visit(route);
      cy.injectAxe();

      cy.get('.navbar-wrapper').each((element, index) => {
cy.checkA11y(
  '.navbar-wrapper',
  {
    runOnly: {
      type: 'tag',
      values: ['wcag2a'],
    },
  },
  terminalLog,
);
      });
    });

        it("ModuleWappers", () => {
        cy.disableCookiewall('.kindertelefoon.nl')
          cy.visit(route);
          cy.injectAxe();

          cy.get('.module-wrapper').each((element, index) => {
cy.checkA11y(
  '.module-wrapper',
  {
    runOnly: {
      type: 'tag',
      values: ['wcag2a'],
    },
  },
  terminalLog,
);
          });
        });
  });
});

