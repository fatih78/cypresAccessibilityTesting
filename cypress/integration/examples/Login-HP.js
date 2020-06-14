//describe('Login Items Parool', function() {
//  var hpurl = 'https://parool75:parool75@acc.parool.nl/'
//  var hpurlprod = 'https://www.parool.nl/'
//  var account = 'selectives+masteraccount@persgroep.net'
//  var password = 'masteraccount'
//
//  before(() => {
//    Cypress.Cookies.debug(true);
//  });
//
//  beforeEach(() => {
//    Cypress.Cookies.preserveOnce("sessionid");
//  });
//
//  it('Login Parool', function() {
//    //visit
//    cy.disableCookiewallNL('parool.nl')
//    cy.visit(hpurlprod)
//    //login
//    cy.get('.fjs-hamburger-menu').click({ force: true })
//      cy.get('.menu-list__item [data-gtm="menu / Inloggen / text"]').click({ force: true })
//      cy.get('[type="email"]').type(account)
//      cy.get('[type="submit"]').click({ force: true })
//      cy.get('[type="password"]').type(password)
//      cy.get('[type="submit"]').click({ force: true })
//    //logit
//      cy.get('.fjs-hamburger-menu').click({ force: true })
//      cy.get('.menu-list__item [data-gtm="menu / Uitloggen / text"]').click({ force: true })
//
//      //ignore exception
//       Cypress.on('uncaught:exception', (err, runnable) => {
//        return false
//    })
//  })
//})