describe('Logged In Humo', function() {
  var hmurlprod = 'https://humo:gohumo@beta.humo.be/'
  var account = 'selectives+masteraccount@persgroep.net'
  var password = 'masteraccount'

  before(() => {
    Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });


  it('Loged In Humo', function() {
    //visit
    cy.setSessionCookieBe('humo.be')
    cy.visit(hmurlprod)
    
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