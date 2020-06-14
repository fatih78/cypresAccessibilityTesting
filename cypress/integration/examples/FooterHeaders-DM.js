describe('Footer DM', function() {
  var dmurlprod = 'www.demorgen.be'

  before(() => {
  Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

  it('DM Footer Headers', function() {

   cy.disableCookiewallBE('demorgen.be')
    cy.visit(dmurlprod)

      cy.get('.app-footer__column')
       .should('contain', 'Algemeen')
       .should('contain', 'Service')
       .should('contain', 'Volg De Morgen')
       .should('contain', 'Navigeer')
  })
         Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
        
})