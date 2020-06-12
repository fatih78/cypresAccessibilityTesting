describe('Menu Items Trouw', function() {
  var trurlprod = 'https://www.trouw.nl/'

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
    'https://www.trouw.nl/service/',
    'https://www.trouw.nl/abonnementen/abonnementen/tr/?otag=t2ejen&utm_source=tr&utm_medium=interne_referral&utm_campaign=alwayson&utm_content=MENU_ITEM&URL_referrer=https%3A%2F%2Fwww.trouw.nl%2F',
    '/nieuwsbrief',
    'https://myaccount.trouw.nl/',
    'https://krant.trouw.nl',
    'https://www.topics.nl/',
    'ttps://webwinkel.trouw.nl/',
    '/tipderedactie/',
    'https://www.dpgmedia.nl/gebruiksvoorwaarden',
    'https://www.dpgmedia.nl/privacy',
    '/cookiewall/info'
    )


  it('Menu Items Trouw', function() {

    cy.disableCookiewallNL('trouw.nl')
    cy.visit(trurlprod)

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