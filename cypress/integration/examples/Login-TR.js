//describe('Login Items Trouw', function() {
//  var trurl = 'https://trn:trn@acc.trouw.nl/'
//  var trurlprod = 'https://www.trouw.nl/'
//  var account = 'selectives+masteraccount@persgroep.net'
//  var password = 'masteraccount'
//
//   before(() => {
//    Cypress.Cookies.debug(true);
//  });
//
//  beforeEach(() => {
//    Cypress.Cookies.preserveOnce("sessionid");
//  });
//
//
//  it('Login Trouw', function() {
//    cy.disableCookiewallNL('trouw.nl')
//    cy.visit(trurlprod)
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