describe('Logged In DeMorgen', function() {
  var dmurlprod = 'https://www.demorgen.be/'
  var account = 'selectives+masteraccount@persgroep.net'
  var password = 'masteraccount'

  before(() => {
    Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });


  it('Loged In DeMorgen', function() {
    //visit
    cy.setSessionCookieBe('demorgen.be')
    cy.visit(dmurlprod)
    
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