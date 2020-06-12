describe('Paywall Items DeMorgen', function() {
  var account = 'selectives+masteraccount@persgroep.net'
  var password = 'masteraccount'

  const urldm = [
  'https://www.demorgen.be/aaa/aaa~b78ab6b6',
  'https://www.demorgen.be/aaa/aaa~ba5c0045',
  'https://www.demorgen.be/aaa/aaa~b735b8e2',
  'https://www.demorgen.be/aaa/aaa~bed2c389'
  ]

  before(() => {
    Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

  it(`DM Paywall Visble ${urldm}`, () =>  {

  //visit
   cy.disableCookiewallBE('demorgen.be')
   urldm.forEach((url) => {
    cy.visit(url)
})
    

//paywall check - should be visible
    cy.get('.fjs-paywall-overlay').should('exist')

    cy.get('[data-gtm="paywall / login"]').click({ force: true })
    cy.get('[type="email"]').type(account)
    cy.get('[type="submit"]').click({ force: true })
    cy.get('[type="password"]').type(password)
    cy.get('[type="submit"]').click({ force: true })

//paywall check - should be not visible
      cy.get('.fjs-paywall-overlay').should('not.exist')


      //ignore exception
       Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    }) 
  })
})