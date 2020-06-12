describe('Paywall Items Humo', function() {
  var account = 'selectives+masteraccount@persgroep.net'
  var password = 'masteraccount'

  const urlhm = [
  'https://humo:gohumo@beta.humo.be/aaa/aaa~b100e01c',
  'https://humo:gohumo@beta.humo.be/aaa/aaa~b7d06af8',
  'https://humo:gohumo@beta.humo.be/aaa/aaa~b9a7c036',
  'https://humo:gohumo@beta.humo.be/aaa/aaa~b195d37c',
  'https://humo:gohumo@beta.humo.be/aaa/aaa~bddb3254'
  ]

  before(() => {
    Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

  it(`HM Paywall Visble ${urlhm}`, () =>  {

  //visit
   cy.disableCookiewallBE('humo.be')
   urlhm.forEach((url) => {
    cy.visit(url)
})
    

//paywall check - should be visible
    cy.get('.artstyle__freecontentdelimiter').should('exist')

    cy.get('[data-gtm="anon_user_comic_var_a_textlink_inloggen"]').click({ force: true })
    cy.get('[type="email"]').type(account)
    cy.get('[type="submit"]').click({ force: true })
    cy.get('[type="password"]').type(password)
    cy.get('[type="submit"]').click({ force: true })

//paywall check - should be not visible
      cy.get('.artstyle__freecontentdelimiter').should('not.exist')


      //ignore exception
       Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    }) 
  })
})