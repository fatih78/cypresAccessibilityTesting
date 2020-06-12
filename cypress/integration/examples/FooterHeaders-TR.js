
describe('Footer VK', function() {
  var trurlprod = 'https://www.trouw.nl/'

  before(() => {
  Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

  it('VK Footer Headers', function() {

   cy.disableCookiewallNL('trouw.nl')
    cy.visit(trurlprod)

      cy.get('.app-footer__column')
       .should('contain', 'Algemeen')
       .should('contain', 'Service')
       .should('contain', 'Meer Trouw')
       .should('contain', 'Navigeer')
  })
         Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })  
})

