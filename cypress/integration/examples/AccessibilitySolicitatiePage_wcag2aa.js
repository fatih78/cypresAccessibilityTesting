const routes = ['/solliciteer'];

 const A11Y_OPTIONS = {
    runOnly: {
              type: 'tag',
              values: ['wcag2aa'],
            },
          }

describe('Component accessibility test SolicitatiePage wcag2aa', () => {
  routes.forEach((route) => {
    const componentName = route.replace('.html', '');
    const testName = `${componentName} has no detectable accessibility violations on load`;

    it("HomePage", () => {
    cy.disableCookiewall('.kindertelefoon.nl')
      cy.visit(route);
      cy.viewport(1280, 1024)
      cy.injectAxe();
        cy.checkAccessibility(A11Y_OPTIONS);
      });
    });
});

