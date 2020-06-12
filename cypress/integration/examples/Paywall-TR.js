describe('Paywall Items Trouw', function() {
  var account = 'selectives+masteraccount@persgroep.net'
  var password = 'masteraccount'

  const urltr = [
  'https://www.trouw.nl/aaa/aaa~b2c2a71e', 
  'https://www.trouw.nl/aaa/aaa~b21e3dde', 
  'https://www.trouw.nl/aaa/aaa~bc8b72b64',
  'https://www.trouw.nl/aaa/aaa~b3ed0707',
  'https://www.trouw.nl/aaa/aaa~b92b069a',
  'https://www.trouw.nl/aaa/aaa~b85870df',
  'https://www.trouw.nl/aaa/aaa~b2302c07',
  'https://www.trouw.nl/aaa/aaa~be5ceb66'
  ]

  before(() => {
    Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

  it(`TR Paywall Visble ${urltr}`, () =>  {
    //visit
   cy.disableCookiewallNL('trouw.nl')
   urltr.forEach((urltr) => {
    cy.visit(urltr)
})
    

//paywall check - should be visible
    cy.get('.fjs-paywall-window').should('exist')

    cy.get('[data-gtm="paywall / login"]').click({ force: true })
    cy.get('[type="email"]').type(account)
    cy.get('[type="submit"]').click({ force: true })
    cy.get('[type="password"]').type(password)
    cy.get('[type="submit"]').click({ force: true })

//paywall check - should be not visible
      cy.get('.fjs-paywall-window').should('not.exist')


      //ignore exception
       Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    }) 
  })
})