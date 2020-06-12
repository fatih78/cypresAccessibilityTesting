describe('Footer Volkskrant', function() {
  var vkurl = 'https://vkgo:vkgo@www.acceptance.volkskrant.nl/'
  var vkurlprod = 'https://www.volkskrant.nl/'

    before(() => {
    Cypress.Cookies.debug(true);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid");
  });
  
  const footerurls = (
    'https://www.volkskrant.nl/service/contact',
    'https://www.dpgmedia.nl/privacy',
    'https://www.volkskrant.nl/service/sites/default/files/Abonnementsvoorwaarden_de_Volkskrant.pdf',
    'https://www.dpgmedia.nl/gebruiksvoorwaarden',
    'https://www.volkskrant.nl/cookiewall/info',
    'https://www.volkskrant.nl/cultuur-media/colofon~bc7018ce/',

    'https://www.volkskrant.nl/service',
    'https://myaccount.volkskrant.nl',
    'https://www.volkskrant.nl/service/vakantie',
    'https://www.dpgmedia.nl/merk/devolkskrant',
    'https://www.dpgmedia.nl/merk/devolkskrant',
    'https://www.dpglosseverkoop.nl/tornl_j2ee/pag/pve_index.jsp',

    'https://www.volkskrant.nl/abonnementen/abonnementen/vk/?otag=t2ejen&utm_source=vk&utm_medium=interne_referral&utm_content=footer&utm_campaign=alwayson',
    '/nieuwsbrief',
    'https://krant.volkskrant.nl/titles/volkskrant/7929/',
    'https://webwinkel.volkskrant.nl/',
    '/rss/feeds',
    'https://www.facebook.com/volkskrant/',
    'https://www.twitter.com/volkskrant',
    'https://play.google.com/store/apps/details?id=be.persgroep.android.news.mobilevk&hl=nl',
    'https://itunes.apple.com/nl/app/de-volkskrant/id418873064?mt=8',

    '/columns',
    '/recensies',
    '/volkskeuken',
    '/archief'
    )

    it('VK Footer URLS', function()  {
    //visit
   cy.disableCookiewallNL('volkskrant.nl')
    cy.visit(vkurlprod)

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