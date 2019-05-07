'use strict';

//Se recogen los datos del scraper
let rawdata = fs.readFileSync('scraperMercedes.json');  
let coches = JSON.parse(rawdata);  
coches.array.forEach(cochelement => {

});
console.log(coches);  