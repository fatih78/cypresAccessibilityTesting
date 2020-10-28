const routes = ['/'];

 const A11Y_OPTIONS = {
    runOnly: {
              type: 'tag',
              values: ['wcag2a'],
            },
          }

describe('Component accessibility test HomePage Zoeken wcag2a', () => {
  routes.forEach((route) => {
    const componentName = route.replace('.html', '');
    const testName = `${componentName} has no detectable accessibility violations on load`;

    it("HomePage", () => {
    cy.disableCookiewall('.kindertelefoon.nl')
      cy.visit(route);
      cy.viewport(1280, 1024)
      cy.injectAxe();
      cy.get('.fa').click()
      cy.get('.alert').each((element, index) => {
      cy.checkA11y('.alert', A11Y_OPTIONS);

      });
    });
});
});