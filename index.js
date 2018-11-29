const axios = require('axios');
const cheerio = require('cheerio');


async function requestUrl(url) {
    const response = await axios.get(url);
    return response.data;
}


function parseHtml(html) {
    return html;
}


function outputResults(parsedResults) {
    console.log(parsedResults);
}

(async () => {
    const html = await requestUrl('https://www.amazon.es/s/ref=nb_sb_noss/257-5628384-8752308?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&url=search-alias%3Daps&field-keywords=phones');
    const parsedResults = parseHtml(html);

    outputResults(parsedResults);
})();

