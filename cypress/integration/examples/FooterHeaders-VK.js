
describe('Footer VK', function() {
  var vkurl = 'https://vkgo:vkgo@www.acceptance.volkskrant.nl/'
  var vkurlprod = 'https://www.volkskrant.nl/'

  before(() => {
  Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });
  
  it('VK Footer Headers', function() {

   cy.disableCookiewallNL('volkskrant.nl')
    cy.visit(vkurlprod)

      cy.get('.app-footer__column')
       .should('contain', 'Algemeen')
       .should('contain', 'Service')
       .should('contain', 'Meer de Volkskrant')
       .should('contain', 'Navigeer')
  })
         Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })  
})

