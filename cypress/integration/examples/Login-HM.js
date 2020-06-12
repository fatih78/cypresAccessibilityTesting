describe('Login Items Humo', function() {
  var hmurlprod = 'https://humo:gohumo@beta.humo.be/'
  var account = 'selectives+masteraccount@persgroep.net'
  var password = 'masteraccount'

  before(() => {
    Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

  it('Login Humo', function() {
    //visit
    cy.disableCookiewallBE('humo.be')
    cy.visit(hmurlprod)
    //login
    cy.get('.fjs-hamburger-menu').click({ force: true })
      cy.get('.menu-list__item [data-gtm="menu / Inloggen / text"]').click({ force: true })
      cy.get('[type="email"]').type(account)
      cy.get('[type="submit"]').click({ force: true })
      cy.get('[type="password"]').type(password)
      cy.get('[type="submit"]').click({ force: true })
    //logit 
      cy.get('.fjs-hamburger-menu').click({ force: true })
      cy.get('.menu-list__item [data-gtm="menu / Uitloggen / text"]').click({ force: true })

      //ignore exception
       Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
  })
})