describe('Footer HM', function() {
  var hmurlprod = 'http://www.humo.be/'

before(() => {
  Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });


  const footerurls = (
    'https://beta.humo.be/nieuws/contact~bf6bae9f',
    'https://www.advertising.dpgmedia.be/nl',
    'https://beta.humo.be/nieuws/colofon~ba50b89f',
    'https://www.werkenbij.dpgmedia.be/nl',
    'https://www.dpgmedia.be/nl/privacy',
    'https://abonnement.humo.be/algemene-voorwaarden?_ga=2.55291176.224949569.1574840712-1378201444.1574840712',
    'https://www.dpgmedia.be/nl/gebruiksvoorwaarden',
    'https://www.dpgmedia.be/nl/cookiebeleid',
    'https://myprivacy.dpgmedia.be/?siteKey=ZdzTNfFnK26aD0JT&callbackUrl=https://www.humo.be/privacy-wall/accept?redirectUri=%2f',
    'https://www.humo.be/service?_ga=2.256011656.224949569.1574840712-1378201444.1574840712',
    'https://myaccount.humo.be/?_ga=2.256011656.224949569.1574840712-1378201444.1574840712',
    'https://abonnement.humo.be/?_ga=2.256011656.224949569.1574840712-1378201444.1574840712',
    'https://shop.humo.be/?_ga=2.256011656.224949569.1574840712-1378201444.1574840712',
    'https://www.facebook.com/humo.be/',
    'https://twitter.com/humo',
    'https://www.instagram.com/humo.be/',
    '/nieuwsbrieven',
    'https://play.google.com/store/apps/details?id=be.humo.tvgids',
    'https://apps.apple.com/nl/app/id579619140',
    '/rss/feeds',
    '/search',
    'https://beta.humo.be/cartoons',
    'https://beta.humo.be/uitlaat',
    'https://beta.humo.be/openvenster',
    'https://beta.humo.be/columns',
    'https://beta.humo.be/recensies',
    '/archief',
    '/rockrally'
    )

  it('HM Footer Headers', function() {

   cy.disableCookiewallBE('.humo.be')
    cy.visit(hmurlprod)
    cy.get('.app-footer__column')
       .should('contain', 'Algemeen')
       .should('contain', 'Service')
       .should('contain', 'Meer HUMO')
       .should('contain', 'Navigeer')
  })

  it('HM Footer URLS', function()  {
          cy.get('.app-footer__list-item')
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