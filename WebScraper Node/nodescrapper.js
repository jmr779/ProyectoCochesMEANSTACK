const puppeteer = require('puppeteer');
var request = require('request');
const fs = require('fs');

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

        cochesData.forEach(coche => {
            //Step 1 - Set the headers
            var headers = {
                'Content-Type': 'application/json'
            }

            //Step 2 - Configure the request
            var options = {
                url: 'http://localhost:3000/coches',
                method: 'POST',
                headers: headers,
                json:{
                    marca: coche.marca,
                    modelo: coche.model,
                    tipo: coche.body,
                    precio: coche.price,
                    imagen: coche.image
                }
            }

            //Step 3 - do the request
            request(options, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body);
                }
            });
        })
        //console.log(cochesData);
    })()

})();

//End WebScrapper Mercedes.