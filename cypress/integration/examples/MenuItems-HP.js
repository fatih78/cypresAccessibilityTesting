describe('Menu Items Parool', function() {
  var hpurl = 'https://parool75:parool75@acc.parool.nl/'
  var hpurlprod = 'https://www.parool.nl/'

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
    'https://www.parool.nl/abonnementen/abonnementen/hp/?otag=t2ejen&utm_source=hp&utm_medium=interne_referral&utm_campaign=alwayson&utm_content=MENU_ITEM&URL_referrer=https%3A%2F%2Fwww.parool.nl%2F',
    'https://www.parool.nl/abonnementen/abonnementen/hp/?otag=t2ejen&utm_source=hp&utm_medium=interne_referral&utm_campaign=alwayson&utm_content=MENU_ITEM&URL_referrer=https%3A%2F%2Fwww.parool.nl%2F',
    'https://myaccount.parool.nl/',
    '/nieuwsbrief',
    'https://krant.parool.nl',
    'https://www.topics.nl/',
    'https://webwinkel.parool.nl/',
    'https://www.parool.nl/tipderedactie/',
    'https://www.dpgmedia.nl/gebruiksvoorwaarden',
    'https://www.dpgmedia.nl/privacy',
    '/cookiewall/info'
    )


  it('Menu Items Parool', function() {

    cy.disableCookiewallNL('parool.nl')
    cy.visit(hpurlprod)

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