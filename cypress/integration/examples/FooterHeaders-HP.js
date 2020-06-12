
describe('Footer Parool', function() {
  var hpurl = 'https://parool75:parool75@acc.parool.nl/'
  var hpurlprod = 'https://www.parool.nl/'

  before(() => {
  Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

  it('HP Footer Headers', function() {

    cy.disableCookiewallNL('parool.nl')
    cy.visit(hpurlprod)

      cy.get('.app-footer__column')
       .should('contain', 'Algemeen')
       .should('contain', 'Service')
       .should('contain', 'Meer Parool')
       .should('contain', 'Navigeer')
  })
         Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })  
})

