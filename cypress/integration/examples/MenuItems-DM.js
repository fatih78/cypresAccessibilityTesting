describe('Menu Items DeMorgen', function() {
  var dmurlprod = 'https://www.demorgen.be/'
  
  before(() => {
    Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

  const meururls = (
    '/login',
    '/logout',
    '/search',
    '/feedback-web',
    '/tv-gids',
    'https://www.demorgen.be/service/',
    'https://abonnement.demorgen.be/?otag=fiXLaB&pg=yes&pgtp=MENU_ITEM&URL_referrer=https%3A%2F%2Fwww.demorgen.be%2F',
    '/nieuwsbrief',
    'https://www.demorgen.be/service/faq',
    'https://myaccount.demorgen.be/',
    'https://www.demorgen.be/digitalekrant',
    'https://shop.demorgen.be/',
    'https://www.demorgen.be/tipderedactie/',
    'https://www.dpgmedia.be/nl/gebruiksvoorwaarden',
    'https://www.dpgmedia.be/nl/privacy',
    'https://www.dpgmedia.be/nl/cookiebeleid'
    )


it('Menu Items DeMorgen', function() {

    cy.disableCookiewallBE('demorgen.be')
    cy.visit(dmurlprod)

    cy.get('.fjs-hamburger-menu').click({ force: true })
      cy.get('.menu-list__item')
     .find('a')
        .should($a => {
          let hrefs = $a.map((i, el) => {
          return Cypress.$(el).attr('href')})
          expect(hrefs.get()).to.contain(meururls)
      
      })
    })
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })  
  })