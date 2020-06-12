describe('Logged In Trouw', function() {
  var trurlprod = 'https://www.trouw.nl/'
  var account = 'selectives+masteraccount@persgroep.net'
  var password = 'masteraccount'

  before(() => {
    Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });


  it('Loged In Trouw', function() {
    //visit
    cy.setSessionCookieNl('trouw.nl')
    cy.visit(trurlprod)
    
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