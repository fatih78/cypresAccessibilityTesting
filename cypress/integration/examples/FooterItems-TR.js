
describe('Footer TR', function() {
  var trurlprod = 'https://www.trouw.nl/'

  before(() => {
  Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });

    const footerurls = (
      'https://www.trouw.nl/overons',
      'https://www.trouw.nl/service/contact',
      'https://www.dpgmedia.nl/privacy',
      'https://www.trouw.nl/service/sites/default/files/Abonnementsvoorwaarden_Trouw.pdf',
      'https://www.dpgmedia.nl/gebruiksvoorwaarden',
      'https://www.trouw.nl/cookiewall/info',
      'https://www.trouw.nl/opinie/opiniestukken-insturen-en-colofon-trouw~a2a8ebf8/',

      'https://www.trouw.nl/service',
      'https://myaccount.trouw.nl/',
      'https://www.trouw.nl/service/vakantie',
      'https://www.dpgmedia.nl/merk/trouw',
      'https://www.dpgmedia.nl/merk/devolkskrant',
      'https://www.dpglosseverkoop.nl/tornl_j2ee/pag/pve_index.jsp',

      'https://www.trouw.nl/abonnementen/abonnementen/tr/?otag=t2ejen&utm_source=tr&utm_medium=interne_referral&utm_content=footer&utm_campaign=alwayson',
      '/nieuwsbrief',
      'https://krant.trouw.nl/titles/?utm_source=tr&utm_medium=tekstlink&utm_content=site+footer&utm_campaign=digitale+krant',
      'https://webwinkel.trouw.nl/',
      'https://www.trouw.nl/rss/feeds',
      'https://www.facebook.com/Trouw.nl',
      'https://twitter.com/Trouw',
      'https://play.google.com/store/apps/details?id=be.persgroep.android.news.mobiletr',
      'https://itunes.apple.com/nl/app/trouw-nl-mobile/id418881043',

      'https://www.trouw.nl/columns',
      'https://www.trouw.nl/recensies',
      '/archief'
      )

  it('TR Footer Headers', function() {

   cy.disableCookiewallNL('trouw.nl')
    cy.visit(trurlprod)

      cy.get('.app-footer__column')
       .should('contain', 'Algemeen')
       .should('contain', 'Service')
       .should('contain', 'Meer Trouw')
       .should('contain', 'Navigeer')
  })

   it('TR Footer URLS', function()  {
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

