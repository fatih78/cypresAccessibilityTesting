describe('Footer DM', function() {
  var dmurlprod = 'www.demorgen.be'

  before(() => {
  Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

  
  const footerurls = (
    'https://www.demorgen.be/contact',
    'https://www.advertising.dpgmedia.be/nl',
    'https://www.werkenbij.dpgmedia.be/nl',
    'https://www.dpgmedia.be/nl/privacy',
    'https://abonnement.demorgen.be/algemene-voorwaarden?_ga=2.99715230.148345265.1574848874-1011350813.1574848874',
    'https://www.dpgmedia.be/nl/gebruiksvoorwaarden',
    'hhttps://www.dpgmedia.be/nl/cookiebeleid',
    'https://myprivacy.dpgmedia.net/?siteKey=6OfBU0sZ5RFXpOOK&callbackUrl=https://www.demorgen.be/privacy-wall/accept?redirectUri=/',
    'https://www.demorgen.be/service/',
    'https://myaccount.demorgen.be/',
    'https://abonnement.demorgen.be/?_ga=2.264858767.148345265.1574848874-1011350813.1574848874',
    'https://shop.demorgen.be/?_ga=2.264858767.148345265.1574848874-1011350813.1574848874',
    'https://www.facebook.com/demorgen',
    'https://twitter.com/demorgen',
    'https://www.instagram.com/demorgen/',
    '/nieuwsbrief',
    '/rss/feeds',
    'https://play.google.com/store/apps/details?id=be.persgroep.android.news.mobiledm&hl=nl',
    'https://itunes.apple.com/be/app/demorgen.be-mobile/id416079343?mt=8',
    'https://twitter.com/parool',
    'https://krant.demorgen.be/',
    '/zoeken',
    '/archief'
    )

  it('DM Footer URLS', function()  {
   cy.disableCookiewallBE('demorgen.be')
    cy.visit(dmurlprod)

    cy.get('.app-footer__list-item')
      .find('a')
        .should($a => {
          let hrefs = $a.map((i, el) => {
          return Cypress.$(el).attr('href')})
          expect(hrefs.get()).to.contain(footerurls)

      //ignore exception
       Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })  
    })
  }) 
})
