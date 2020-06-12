describe('Logged In  Volkskrant', function() {
  var vkurl = 'https://vkgo:vkgo@www.acceptance.volkskrant.nl/'
  var vkurlprod = 'https://www.volkskrant.nl/'
  var account = 'selectives+masteraccount@persgroep.net'
  var password = 'masteraccount'

  before(() => {
    Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });


  it('Logged In Volkskrant', function() {
    //visit
    cy.setSessionCookieNl('volkskrant.nl')
    cy.visit(vkurlprod)
    
    //logout 
      cy.get('.fjs-hamburger-menu').click({ force: true })
      cy.get('.menu-list__item-link')
      .should('contain', 'Uitloggen')
      .should('contain', 'Mijn profiel')


      //ignore exception
       Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    }) 
})
})