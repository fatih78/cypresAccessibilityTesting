const routes = ['/'];

 const A11Y_OPTIONS = {
    runOnly: {
              type: 'tag',
              values: ['wcag2aa'],
            },
          }


describe('Component accessibility test HomePage wcag2aa', () => {
  routes.forEach((route) => {
    const componentName = route.replace('.html', '');
    const testName = `${componentName} has no detectable accessibility violations on load`;

    it("HomePage", () => {
    cy.disableCookiewall('.kindertelefoon.nl')
      cy.visit(route);
      cy.injectAxe();
        cy.checkAccessibility(A11Y_OPTIONS);
      });
    });
});

