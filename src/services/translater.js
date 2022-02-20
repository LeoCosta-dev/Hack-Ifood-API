
const puppeteer = require('puppeteer')

let apiGoogleTranslate = async (text) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    let url = `https://translate.google.com.br/?sl=pt&tl=en&text=${encodeURIComponent(text)}&op=translate`;
    await page.goto(url)
    await page.waitForTimeout(800);

    const result = await page.evaluate(() => {
        return document.getElementsByClassName('NqnNQd')[0].innerText;
    })

    browser.close()
    return result
}

module.exports = apiGoogleTranslate
apiGoogleTranslate('Para montagem da AI, foram utilizados Javascript como línguagem de programação, fazendo uso do runtime NodeJS').then((value) => {
    console.log(value)
})