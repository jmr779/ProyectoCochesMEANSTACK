const puppeteer = require('puppeteer');
const fs = require('fs');
//const getResults = require('../scraper');
//WebScrapper Mercedes.
let mercedesUrl = 'https://www.mercedes-benz.es';
(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 4096, height: 2048 });
    await page.goto(mercedesUrl);

    await page.click("button[class=modeloverview__showMoreBtn]");

    page.evaluate(function () {
        window.scrollTo(0, document.body.scrollHeight);
    })

    // get car details
    let cochesData = await page.evaluate(() => {
        let coches = [];
        // get car elements
        let cochesElms = document.querySelectorAll('div.modeloverview__entryWrapper');
        // get car data
        cochesElms.forEach((cochelement) => {
            let cocheJson = {};
            try {
                cocheJson.marca = "Mercedes";
                cocheJson.model = cochelement.querySelector('p.modeloverview__modelName').innerText;
                cocheJson.body = cochelement.querySelector('p.modeloverview__modelBodyStyle').innerText;
                cocheJson.price = cochelement.querySelector('span.aem--is-no-wrapped').innerText;
                cocheJson.image = cochelement.querySelector('div.modeloverview__thumbnail > a > img').getAttribute("data-src");
            }
            catch (exception) {

            }
            coches.push(cocheJson);
        });
        return coches;
    });
    (async () => {
        let results = cochesData;
        let jsonString = JSON.stringify(results);
        fs.writeFileSync('../WebScraper Node/output.json', jsonString, 'utf-8');
    })()
    //console.dir(cochesData);
    console.dir("WebScrapper Realizado");
})();



//End WebScrapper Mercedes.