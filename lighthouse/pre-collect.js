const puppeteer = require('puppeteer-extra')
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')

module.exports = async browser => {
  const page = await browser.newPage();

  page.setCookie({
    domain: 'https://independer.nl',
    name: 'set-cookie',
    value:
      'BIGipServer~development~pool_master.independer.nl_DefaultWebsitePool=!sSeyaP3rMK39bW9c8aPI61iczy6Eaf1KmhCh/OroPJ4UUN3DTqYPDTwgmdEOZQ1ftR4HWJH9JBwZWC9iTm9lIkXNNh7ALOCqGhyIvIXNe4U=; expires=Fri, 20-Jan-2023 15:31:59 GMT; path=/; Httponly; Secure',
  });

  puppeteer.use(
    RecaptchaPlugin({
      provider: { id: '2captcha', token: 'XXXXXXX' },
      visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
    })
  )

  // puppeteer usage as normal
  puppeteer.launch({ headless: true }).then(async browser => {
    const page = await browser.newPage()
    await page.goto('https://www.independer.nl/')

    // That's it, a single line of code to solve reCAPTCHAs 🎉
    await page.solveRecaptchas()

    await Promise.all([
      page.waitForNavigation(),
      page.click(`#recaptcha-demo-submit`)
    ])
    await page.screenshot({ path: 'response.png', fullPage: true })
    await browser.close()
  })

  page.solveRecaptchas()
};
