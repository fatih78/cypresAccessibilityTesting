//describe('Login Items Volkskrant', function() {
//  var vkurl = 'https://vkgo:vkgo@www.acceptance.volkskrant.nl/'
//  var vkurlprod = 'https://www.volkskrant.nl/'
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
//  it('Login Volkskrant', function() {
//    //visit
//   cy.disableCookiewallNL('volkskrant.nl')
//    cy.visit(vkurlprod)
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