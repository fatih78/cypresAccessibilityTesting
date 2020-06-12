describe('Paywall Items Volkskrant', function() {
  var account = 'selectives+masteraccount@persgroep.net'
  var password = 'masteraccount'

  const urlvk = [
  'https://www.volkskrant.nl/aaa/aaa~bcce30e9', 
  'https://www.volkskrant.nl/aaa/aaa~b581a302', 
  'https://www.volkskrant.nl/aaa/aaa~b5afb534',
  'https://www.volkskrant.nl/aaa/aaa~b7a3af22',
  'https://www.volkskrant.nl/aaa/aaa~b671b45e',
  'https://www.volkskrant.nl/aaa/aaa~ba5be412',
  'https://www.volkskrant.nl/aaa/aaa~bbb4ba32',
  'https://www.volkskrant.nl/aaa/aaa~b3b0904a',
  'https://www.volkskrant.nl/aaa/aaa~b7003603'
  ]

  before(() => {
    Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

  it(`VK Paywall Visble ${urlvk}`, () =>  {
    //visit
   cy.disableCookiewallNL('volkskrant.nl')
   urlvk.forEach((urlvk) => {
    cy.visit(urlvk)
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