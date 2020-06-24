
describe('Footer Parool', function() {
  var hpurlprod = 'https://www.parool.nl/'

  before(() => {
  Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

  const footerurls = (
    'https://www.parool.nl/service/contact',
    'https://www.dpgmedia.nl/privacy',
    'https://www.parool.nl/abonnementsvoorwaarden',
    'https://www.dpgmedia.nl/gebruiksvoorwaarden',
    'https://www.parool.nl/cookiewall/info',
    'https://www.parool.nl/service/',
    'https://www.parool.nl/service/bezorging',
    'https://myaccount.parool.nl',
    'https://www.parool.nl/service/vakantie',
    'https://www.dpgmedia.nl/merk/hetparool',
    'https://www.dpglosseverkoop.nl/tornl_j2ee/pag/pve_index.jsp',
    'https://www.parool.nl/abonnementen/abonnementen/hp/?otag=t2ejen&utm_source=hp&utm_medium=interne_referral&utm_content=footer&utm_campaign=alwayson',
    '/nieuwsbrief',
    'http://krant.parool.nl/',
    'https://winkel.parool.nl/',
    'https://meer.parool.nl/',
    '/rss/feeds',
    'https://itunes.apple.com/nl/app/parool.nl-mobile/id427597105?mt=8',
    'https://www.facebook.com/paroolnl/',
    'https://twitter.com/parool',
    '/archief'
    )

  it('HP Footer Headers', function() {

    cy.disableCookiewallNL('parool.nl')
    cy.visit(hpurlprod)

      cy.get('.app-footer__column')
       .should('contain', 'Algemeen')
       .should('contain', 'Service')
       .should('contain', 'Meer Parool')
       .should('contain', 'Navigeer')
  })

   it('HP Footer URLS', function()  {
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

