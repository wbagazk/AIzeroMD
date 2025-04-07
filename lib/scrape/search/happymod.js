const axios = require('axios');
const cheerio = require('cheerio');

function happymod(query) {
    return new Promise((resolve, reject) => {
        const baseUrl = 'https://www.happymod.com/';
        axios.get(`${baseUrl}search.html?q=${query}`)
        .then(({ data }) => {
            const $ = cheerio.load(data);
            const hasil = [];
            $("div.pdt-app-box").each((i, elem) => {
                hasil.push({
                    title: $(elem).find("a").text().trim(),
                    icon: $(elem).find("img.lazy").attr('data-original'),
                    rating: $(elem).find("span").text(),
                    link: baseUrl + $(elem).find("a").attr('href')
                });
            });
            resolve(hasil);
        })
        .catch(reject);
    });
}

module.exports = { happymod };