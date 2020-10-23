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


const routes = ['/'];

describe('Component accessibility test HomePageFooter wcag2aa', () => {
  routes.forEach((route) => {
    const componentName = route.replace('.html', '');
    const testName = `${componentName} has no detectable accessibility violations on load`;

    it("Footer", () => {
    cy.disableCookiewall('.kindertelefoon.nl')
      cy.visit(route);
      cy.injectAxe();

      cy.get('.footer > .container-fluid').each((element, index) => {
cy.checkA11y(
  '.footer > .container-fluid',
  {
    runOnly: {
      type: 'tag',
      values: ['wcag2aa'],
    },
  },
  terminalLog,
);
      });
    });
  });
});

