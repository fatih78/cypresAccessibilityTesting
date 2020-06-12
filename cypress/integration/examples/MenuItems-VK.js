describe('Menu Items Volkskrant', function() {
  var vkurl = 'https://vkgo:vkgo@www.acceptance.volkskrant.nl/'
  var vkurlprod = 'https://www.volkskrant.nl/'

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
    'https://www.volkskrant.nl/abonnementen/abonnementen/vk?otag=t2ejen&utm_source=vk&utm_medium=interne_referral&utm_campaign=alwayson&utm_content=MENU_ITEM_5dc17f047cac5b0b3cb4ad1c_B&URL_referrer=https%3A%2F%2Fwww.volkskrant.nl%2F',
    '/nieuwsbrief',
    'https://myaccount.parool.nl/',
    '/nieuwsbrief',
    'https://krant.volkskrant.nl',
    'https://www.topics.nl/',
    'ttps://webwinkel.volkskrant.nl/',
    'https://www.volkskrant.nl/tipderedactie/',
    'https://www.dpgmedia.nl/gebruiksvoorwaarden',
    'https://www.dpgmedia.nl/privacy',
    '/cookiewall/info'
    )


  it('Menu Items Volkskrant', function() {

cy.disableCookiewallNL('volkskrant.nl')
    cy.visit(vkurlprod)

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