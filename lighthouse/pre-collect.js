module.exports = async browser => {
  const page = await browser.newPage();

  page.setCookie({
    domain: 'https://independer.nl',
    name: 'set-cookie',
    value:
      'BIGipServer~development~pool_master.independer.nl_DefaultWebsitePool=!sSeyaP3rMK39bW9c8aPI61iczy6Eaf1KmhCh/OroPJ4UUN3DTqYPDTwgmdEOZQ1ftR4HWJH9JBwZWC9iTm9lIkXNNh7ALOCqGhyIvIXNe4U=; expires=Fri, 20-Jan-2023 15:31:59 GMT; path=/; Httponly; Secure',
  });

  page.solveRecaptchas()
};
