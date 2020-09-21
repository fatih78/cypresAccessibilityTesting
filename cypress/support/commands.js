1// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("disableCookiewallNL", function(brandDomain) {
      var NL_COOKIEWALL_VERSION = 'nl_cookiewall_version'
      var PWS = 'pws'
      var PWV = 'pwv'
      var AUTHID = 'authId'
      var PWV_VALUE = "2"
      var PWS_VALUE = 'functional|analytics|content_recommendation|targeted_advertising|social_media'
      var AUTHID_VALUE = '7d18804b-5084-4e18-b28d-d3e92a35a8d7'

    //set the cookies to disable cookiewall
      cy.setCookie(NL_COOKIEWALL_VERSION, '1', {
          domain : brandDomain,
          path : '/'})
      cy.setCookie(PWS, PWS, {
          domain : brandDomain,
          path : '/'})
      cy.setCookie(PWV, PWV_VALUE, {
          domain : brandDomain,
          path : '/'})
        cy.setCookie(AUTHID, AUTHID_VALUE, {
          domain : brandDomain,
          path : '/'})

});

Cypress.Commands.add("disableCookiewallBE", function(brandDomain) {

      var NL_COOKIEWALL_VERSION = 'nl_cookiewall_version'
      var PWS = 'pws'
      var PWV = 'pwv'
      var AUTHID = 'authId'
      var PWV_VALUE = "1"
      var PWS_VALUE = 'functional|analytics|content_recommendation|targeted_advertising|social_media'
      var AUTHID_VALUE = '31911e2e-c88c-4261-8794-c211d7e12182'

    //set the cookies to disable cookiewall
      cy.setCookie(NL_COOKIEWALL_VERSION, '1', {
          domain : brandDomain,
          path : '/'})
      cy.setCookie(PWS, PWS, {
          domain : brandDomain,
          path : '/'})
      cy.setCookie(PWV, PWV_VALUE, {
          domain : brandDomain,
          path : '/'})
              cy.setCookie(AUTHID, AUTHID_VALUE, {
          domain : brandDomain,
          path : '/'})

});

Cypress.Commands.add("setSessionCookieNl", function(brandDomain) {
      var sessionNameVK = 'VK_SESSION'
      var sessionNameHP = 'PAROOL_SESSION'
      var sessionValue = 'eyJ1aWQiOiI1ODNmMDgxODczZmY0YmRlYjI2OGY4NWZjMWMwODMyZSIsImVtYWlsIjoic2VsZWN0aXZlcyttYXN0ZXJhY2NvdW50QHBlcnNncm9lcC5uZXQiLCJhbXIiOlsiRU1BSUxfRklSU1QiXSwiaWRUb2tlbiI6ImV5SnJhV1FpT2lJeU1ERTRMVEE1TFRJMElpd2lZV3huSWpvaVVsTXlOVFlpZlEuZXlKdVlXMWxJam9pVFdGemRHVnlJRUZqWTI5MWJuUWlMQ0puYVhabGJsOXVZVzFsSWpvaVRXRnpkR1Z5SWl3aVptRnRhV3g1WDI1aGJXVWlPaUpCWTJOdmRXNTBJaXdpWlcxaGFXd2lPaUp6Wld4bFkzUnBkbVZ6SzIxaGMzUmxjbUZqWTI5MWJuUkFjR1Z5YzJkeWIyVndMbTVsZENJc0ltVnRZV2xzWDNabGNtbG1hV1ZrSWpwMGNuVmxMQ0puWlc1a1pYSWlPaUp0SWl3aVltbHlkR2hrWVhSbElqb2lNVGs1TUMwd01TMHdNU0lzSW1GdGNpSTZXeUpGVFVGSlRGOUdTVkpUVkNKZExDSnBjM01pT2lKb2RIUndjem92TDJ4dloybHVMbkJsY25ObmNtOWxjQzV1WlhRaUxDSnpkV0lpT2lJMU9ETm1NRGd4T0RjelptWTBZbVJsWWpJMk9HWTROV1pqTVdNd09ETXlaU0lzSW1GMVpDSTZXeUoyYXkxelpXeGxZM1JwZG1WekxYZGxZaUpkTENKbGVIQWlPakUxTmpZME56UTNPVFlzSW1saGRDSTZNVFUyTmpNNE9ETTVOaXdpYzE5b1lYTm9Jam9pUzNBMGRsVTRRV3RaYzBaTmNtZERPRUpJV0ZKd1VTSjkucW5LTGtsdHVlRTVqdkdfU0d3X3EtV2ZDTHdQdlFtQnFaLWs0OWhNVlQwb1NtZ0YzbWFaUzJQMUtyV1RyQURMSndmNmxWb0U0SFFVejhFTWk0aWl1TjdSVEJZc2FXS3duM1dTaXZYYkl5bkY4cGg1WHd3OUxTclJLa203eU9UNUp4OWozTDViNGhkaWVBTkNrY1dXTjdxb0tFSFhDWnNiTF83TFhmUFRKT0ZrU1RKNEdfaVUzSUpFTDdObkN2LXRnS2l2bTB0N1d0dFJkRF9reDVsZURJTVdHZmRuVGp0RG9qb0h3X1lHdXU2MXpnYlUxam42LWoyUFBrLUt3bUhVZHdLSXhGY0FOd0Qzdmd4akh0OUh2VHVIb2EyTHVlUjJHck1BNUh5MzFpMjhqS2hMYVdKU3VWYXJGTGRteXhOYW9lS182VlA3T1hCUWJfVXd3MjJIc3dRIiwiYWxnIjoiSFMyNTYifQ'
      var sessionExpireDate = '2034-11-28T14:20:36.676Z'

      var NL_COOKIEWALL_VERSION = 'nl_cookiewall_version'
      var PWS = 'pws'
      var PWV = 'pwv'
      var PWV_VALUE = "2"
      var PWS_VALUE = 'functional|analytics|content_recommendation|targeted_advertising|social_media'

    //set the cookies to disable cookiewall
      cy.setCookie(NL_COOKIEWALL_VERSION, '1', {
          domain : brandDomain,
          path : '/'})
      cy.setCookie(PWS, PWS, {
          domain : brandDomain,
          path : '/'})
      cy.setCookie(PWV, PWV_VALUE, {
          domain : brandDomain,
          path : '/'})
      cy.setCookie(sessionNameVK, sessionValue , {
          domain : brandDomain,
          path : '/',
          expires: sessionExpireDate})
      cy.setCookie(sessionNameHP, sessionValue , {
          domain : brandDomain,
          path : '/',
          expires: sessionExpireDate})

});

Cypress.Commands.add("setSessionCookieBe", function(brandDomain) {
      var sessionNameVK = 'VK_SESSION'
      var sessionNameHP = 'PAROOL_SESSION'
      var sessionValue = 'eyJ1aWQiOiI1ODNmMDgxODczZmY0YmRlYjI2OGY4NWZjMWMwODMyZSIsImVtYWlsIjoic2VsZWN0aXZlcyttYXN0ZXJhY2NvdW50QHBlcnNncm9lcC5uZXQiLCJhbXIiOlsiRU1BSUxfRklSU1QiXSwiaWRUb2tlbiI6ImV5SnJhV1FpT2lJeU1ERTRMVEE1TFRJMElpd2lZV3huSWpvaVVsTXlOVFlpZlEuZXlKdVlXMWxJam9pVFdGemRHVnlJRUZqWTI5MWJuUWlMQ0puYVhabGJsOXVZVzFsSWpvaVRXRnpkR1Z5SWl3aVptRnRhV3g1WDI1aGJXVWlPaUpCWTJOdmRXNTBJaXdpWlcxaGFXd2lPaUp6Wld4bFkzUnBkbVZ6SzIxaGMzUmxjbUZqWTI5MWJuUkFjR1Z5YzJkeWIyVndMbTVsZENJc0ltVnRZV2xzWDNabGNtbG1hV1ZrSWpwMGNuVmxMQ0puWlc1a1pYSWlPaUp0SWl3aVltbHlkR2hrWVhSbElqb2lNVGs1TUMwd01TMHdNU0lzSW1GdGNpSTZXeUpGVFVGSlRGOUdTVkpUVkNKZExDSnBjM01pT2lKb2RIUndjem92TDJ4dloybHVMbkJsY25ObmNtOWxjQzV1WlhRaUxDSnpkV0lpT2lJMU9ETm1NRGd4T0RjelptWTBZbVJsWWpJMk9HWTROV1pqTVdNd09ETXlaU0lzSW1GMVpDSTZXeUoyYXkxelpXeGxZM1JwZG1WekxYZGxZaUpkTENKbGVIQWlPakUxTmpZME56UTNPVFlzSW1saGRDSTZNVFUyTmpNNE9ETTVOaXdpYzE5b1lYTm9Jam9pUzNBMGRsVTRRV3RaYzBaTmNtZERPRUpJV0ZKd1VTSjkucW5LTGtsdHVlRTVqdkdfU0d3X3EtV2ZDTHdQdlFtQnFaLWs0OWhNVlQwb1NtZ0YzbWFaUzJQMUtyV1RyQURMSndmNmxWb0U0SFFVejhFTWk0aWl1TjdSVEJZc2FXS3duM1dTaXZYYkl5bkY4cGg1WHd3OUxTclJLa203eU9UNUp4OWozTDViNGhkaWVBTkNrY1dXTjdxb0tFSFhDWnNiTF83TFhmUFRKT0ZrU1RKNEdfaVUzSUpFTDdObkN2LXRnS2l2bTB0N1d0dFJkRF9reDVsZURJTVdHZmRuVGp0RG9qb0h3X1lHdXU2MXpnYlUxam42LWoyUFBrLUt3bUhVZHdLSXhGY0FOd0Qzdmd4akh0OUh2VHVIb2EyTHVlUjJHck1BNUh5MzFpMjhqS2hMYVdKU3VWYXJGTGRteXhOYW9lS182VlA3T1hCUWJfVXd3MjJIc3dRIiwiYWxnIjoiSFMyNTYifQ'
      var sessionExpireDate = '2034-11-28T14:20:36.676Z'

      var NL_COOKIEWALL_VERSION = 'nl_cookiewall_version'
      var PWS = 'pws'
      var PWV = 'pwv'
      var PWV_VALUE = "1"
      var PWS_VALUE = 'functional|analytics|content_recommendation|targeted_advertising|social_media'

    //set the cookies to disable cookiewall
      cy.setCookie(NL_COOKIEWALL_VERSION, '1', {
          domain : brandDomain,
          path : '/'})
      cy.setCookie(PWS, PWS, {
          domain : brandDomain,
          path : '/'})
      cy.setCookie(PWV, PWV_VALUE, {
          domain : brandDomain,
          path : '/'})
      cy.setCookie(sessionNameVK, sessionValue , {
          domain : brandDomain,
          path : '/',
          expires: sessionExpireDate})
      cy.setCookie(sessionNameHP, sessionValue , {
          domain : brandDomain,
          path : '/',
          expires: sessionExpireDate})

});

//  Cypress.Commands.add("runHTMLreport", function() {
//         const cypress = require('cypress')
//         const fse = require('fs-extra')
//         const { merge } = require('mochawesome-merge')
//         const generator = require('mochawesome-report-generator')

//         async function runTests() {
//         await fse.remove('mochawesome-report')
//         const { totalFailed } = await cypress.run()
//         const jsonReport = await merge()
//         await generator.create(jsonReport)
//         process.exit(totalFailed)

// }});

