//describe('Paywall Items Parool', function() {
//  var account = 'selectives+masteraccount@persgroep.net'
//  var password = 'masteraccount'
//
//  const urlhp = [
//  'https://www.parool.nl/aaa/aaa~b58d2d0b',
//  'https://www.parool.nl/aaa/aaa~ba27a1f2',
//  'https://www.parool.nl/aaa/aaa~b8d8b935',
//  'https://www.parool.nl/aaa/aaa~b2d5a631',
//  'https://www.parool.nl/aaa/aaa~be865f63'
//  ]
//
//  before(() => {
//    Cypress.Cookies.debug(true);
//  });
//
//  beforeEach(() => {
//    Cypress.Cookies.preserveOnce("sessionid");
//  });
//
//  it(`TR Paywall Visble ${urlhp}`, () =>  {
//    //visit
//   cy.disableCookiewallNL('parool.nl')
//   urlhp.forEach((urlhp) => {
//    cy.visit(urlhp)
//})
//
//
////paywall check - should be visible
//    cy.get('.fjs-paywall-window').should('exist')
//
//    cy.get('[data-gtm="paywall / login"]').click({ force: true })
//    cy.get('[type="email"]').type(account)
//    cy.get('[type="submit"]').click({ force: true })
//    cy.get('[type="password"]').type(password)
//    cy.get('[type="submit"]').click({ force: true })
//
////paywall check - should be not visible
//      cy.get('.fjs-paywall-window').should('not.exist')
//
//
//      //ignore exception
//       Cypress.on('uncaught:exception', (err, runnable) => {
//        return false
//    })
//  })
//})