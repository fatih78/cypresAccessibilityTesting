describe('Logged In Parool', function() {
  var hpurlprod = 'https://www.parool.nl/'
  var account = 'selectives+masteraccount@persgroep.net'
  var password = 'masteraccount'

  before(() => {
    Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });


  it('Loged In Parool', function() {
    //visit
    cy.setSessionCookieNl('parool.nl')
    cy.visit(hpurlprod)
    
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