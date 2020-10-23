describe('Footer Kindertelefoon', function() {
  var dmurlprod = 'https://www.kindertelefoon.nl/'

  before(() => {
  Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

    const footerurls = (
      'huisregels',
      'spreekbeurt-of-werkstuk',
      'meedenken-overzicht',
      'veelgestelde-vragen',
      '/privacy'
      )

  it('DM Footer Headers', function() {

   cy.disableCookiewall('www.kindertelefoon.nl')
    cy.visit(dmurlprod)

      cy.get('.col-lg-11')
       .should('contain', 'Huisregels')
       .should('contain', 'Spreekbeurt of werkstuk')
       .should('contain', 'Meedenken')
       .should('contain', 'Veelgestelde vragen')
       .should('contain', 'Privacy')
  })

  it('DM Footer URLS', function()  {
    cy.get('.footer-links')
      .find('a')
        .should($a => {
          let hrefs = $a.map((i, el) => {
          return Cypress.$(el).attr('href')})
          expect(hrefs.get()).to.contain(footerurls)
  })
      })
         Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
        
})