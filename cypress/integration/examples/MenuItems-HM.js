describe('Menu Items Humo', function() {
  var hmurlprod = 'http://humo:gohumo@beta.humo.be/'

  before(() => {
    Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

  const meururls = (
    '/login',
    'https://myaccount.humo.be/',
    '/logout',
    '/search',
    '/feedback-web',
    '/tv-gids',
    'service/',
    'https://abonnement.humo.be/colofon/digitaal?otag=TbjwRI&pg=yes&pgtp=MENU_ITEM&URL_referrer=https%3A%2F%2Fbeta.humo.be%2F',
    '/nieuwsbrief',
    'https://redactie.humo.be/digitaallezen',
    '/open-venster',
    'https://magazine.humo.be/',
    'https://shop.humo.be/',
    'https://www.dpgmedia.be/nl/gebruiksvoorwaarden',
    'https://www.dpgmedia.be/nl/cookiebeleid',
    'https://www.dpgmedia.be/nl/privacy'
    )


  it('Menu Items Humo', function() {

    cy.disableCookiewallBE('humo.be')
    cy.visit(hmurlprod)

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