describe('Footer HM', function() {
  var hmurlprod = 'http://humo:gohumo@beta.humo.be/'

before(() => {
  Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });
  
  it('HM Footer Headers', function() {

   cy.disableCookiewallBE('beta.humo.be')
    cy.visit(hmurlprod)

      cy.get('.app-footer__column')
       .should('contain', 'Algemeen')
       .should('contain', 'Service')
       .should('contain', 'Meer HUMO')
       .should('contain', 'Navigeer')
  })
         Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })  

})